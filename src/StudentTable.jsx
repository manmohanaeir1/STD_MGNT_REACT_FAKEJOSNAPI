import { useEffect, useState } from 'react';
import { Link , useNavigate} from 'react-router-dom';

export default function StudentTable() {
 const [students, setStudents] = useState("");
 const  navigate = useNavigate();
 const DisplayDetails = (id) => {
     navigate("/student/view/" +id);
 };

 const EditStudent = (id) => {
     navigate("/student/edit/" +id);
 }
 
 const DeleteStudent = (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
        fetch(`http://localhost:3001/students/${id}`, {
            method: 'DELETE',
        })
            .then(() => {
                alert("Student deleted successfully");
                setStudents(students.filter((student) => student.id !== id)); // Update the state
            })
            .catch((err) => {
                console.error(err.message);
                alert("Error deleting student");
            });
    }
};

 useEffect(() => {
    fetch('http://localhost:3001/students')
        .then((res) => res.json())
        .then((data) => {
            setStudents(data);
        })
        .catch((err) => {
            console.error(err.message);
        });
 }, []);
    return (
        <div className="container">
            <h2>Students Details</h2>
             <div className="table-contentner">
                 <Link to ="/student/create" className="btn btn-add">Add New Srudent</Link>
             </div>
             <table>
    <thead>
        <tr>
            <th>Student ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Address</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        {
            students && students.map((item)=>
                <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.address}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>
            <button onClick={() => DisplayDetails(item.id)} className="btn btn-view">
                View
            </button>
            <button onClick={() => EditStudent(item.id)} className="btn btn-edit">
                Edit    
            </button>
            <button onClick={() => DeleteStudent(item.id)} className="btn btn-delete">
                                    Delete
                                </button>
                  
                 
             </td>
        </tr>

            )
            

            
        }

    </tbody>
</table>
             
        </div>
    );
}