import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function StudentTable() {
 const [students, setStudents] = useState("");

    useEffect(()=>{

        fetch('http://localhost:3001/students')
        .then((res) =>res.json()
        .then((data) => {
            setStudents(data);
        })) 
        .catch((err) => {
            console.error(err.message);
        })

    })
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
                <tr>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.address}</td>
            <td>{item.phone}</td>
            <td>{item.email}</td>
            <td>
                <a href="#" className="btn btn-edit">Edit</a>
                <a href="#" className="btn btn-delete">Delete</a>
                <a href="#" className="btn btn-view">View</a>
            </td>
        </tr>

            )
            

            
        }

    </tbody>
</table>
             
        </div>
    );
}