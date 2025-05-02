import { Link } from 'react-router-dom';

export default function StudentTable() {
    return (
        <div className="container">
            <h2>Students Details</h2>
             <div className="table-contentner">
                 <Link to ="/student/create"  class="btn btn-add">Add New Srudent</Link>
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
        <tr>
            <td>1</td>
            <td>John</td>
            <td>Doe</td>
            <td>123 Main St</td>
            <td>555-555-5555</td>
            <td>man@gamil.com</td>
            <td>
                <a href="#" class="btn btn-edit">Edit</a>
                <a href="#" class="btn btn-delete">Delete</a>
                <a href="#" class="btn btn-view">View</a>
            </td>
        </tr>
    </tbody>
</table>
             
        </div>
    );
}