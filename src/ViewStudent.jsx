import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

export default function ViewStudent() {
    const { std_id } = useParams(); // Extract student ID from URL
    const navigate = useNavigate(); // For navigation
    const [student, setStudent] = useState(null); // State to store student details

    // Fetch student details on component mount
    useEffect(() => {
        fetch(`http://localhost:3001/students/${std_id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch student details");
                }
                return res.json();
            })
            .then((data) => {
                setStudent(data); // Set student data
            })
            .catch((err) => {
                console.error(err.message);
                alert("Error fetching student details");
            });
    }, [std_id]);

    // Handle delete student
    const handleDelete = () => {
        if (window.confirm("Are you sure you want to delete this student?")) {
            fetch(`http://localhost:3001/students/${std_id}`, {
                method: "DELETE",
            })
                .then(() => {
                    alert("Student deleted successfully");
                    navigate("/"); // Redirect to home page
                })
                .catch((err) => {
                    console.error(err.message);
                    alert("Error deleting student");
                });
        }
    };

    // Handle edit student (navigate to edit page)
    const handleEdit = () => {
        navigate(`/student/edit/${std_id}`);
    };

    return (
        <div className="container">
            <h2>Student Details</h2>
            {student ? (
                <div className="student-details">
                    <p><strong>Student ID:</strong> {student.id}</p>
                    <p><strong>First Name:</strong> {student.firstName}</p>
                    <p><strong>Last Name:</strong> {student.lastName}</p>
                    <p><strong>Address:</strong> {student.address}</p>
                    <p><strong>Phone:</strong> {student.phone}</p>
                    <p><strong>Email:</strong> {student.email}</p>
                </div>
            ) : (
                <p>Loading student details...</p>
            )}
            <button className="btn btn-delete" onClick={handleDelete}>Delete</button>
            <button className="btn btn-edit" onClick={handleEdit}>Edit</button>
            <Link to="/" className="btn btn-back">Back</Link>
        </div>
    );
}