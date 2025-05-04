import React, { useState, useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

export default function EditStudent() {
    const { std_id } = useParams(); // Extract student ID from URL
    const navigate = useNavigate(); // For navigation
    const [student, setStudent] = useState({
        id: '',
        firstName: '',
        lastName: '',
        address: '',
        phone: '',
        email: '',
    });
    const [validation, setValidation] = useState(false);

    // Fetch student details on component mount
    useEffect(() => {
        fetch(`http://localhost:3001/students/${std_id}`)
            .then((res) => {
                if (!res.ok) {
                    throw new Error('Failed to fetch student details');
                }
                return res.json();
            })
            .then((data) => {
                setStudent(data); // Populate form with student data
            })
            .catch((err) => {
                console.error(err.message);
                alert('Error fetching student details');
            });
    }, [std_id]);

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        setValidation(true);

        const { id, firstName, lastName, address, phone, email } = student;

        if (id && firstName && lastName && address && phone && email) {
            fetch(`http://localhost:3001/students/${std_id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(student),
            })
                .then(() => {
                    alert('Student details updated successfully');
                    navigate('/'); // Redirect to home page
                })
                .catch((err) => {
                    console.error(err.message);
                    alert('Error updating student details');
                });
        }
    };

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setStudent((prevStudent) => ({
            ...prevStudent,
            [name]: value,
        }));
    };

    return (
        <div className="container">
            <h2>Edit Student</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID:</label>
                <input
                    type="text"
                    id="id"
                    name="id"
                    value={student.id}
                    onChange={handleChange}
                    disabled // ID should not be editable
                />
                {validation && !student.id && <span className="error">Please enter Student ID</span>}

                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={student.firstName}
                    onChange={handleChange}
                />
                {validation && !student.firstName && <span className="error">Please enter First Name</span>}

                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={student.lastName}
                    onChange={handleChange}
                />
                {validation && !student.lastName && <span className="error">Please enter Last Name</span>}

                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={student.address}
                    onChange={handleChange}
                />
                {validation && !student.address && <span className="error">Please enter Address</span>}

                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={student.phone}
                    onChange={handleChange}
                />
                {validation && !student.phone && <span className="error">Please enter Phone Number</span>}

                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={student.email}
                    onChange={handleChange}
                />
                {validation && !student.email && <span className="error">Please enter Email</span>}

                <input type="submit" value="Update" className="btn btn-submit" />
                <Link to="/" className="btn btn-back">Back</Link>
            </form>
        </div>
    );
}