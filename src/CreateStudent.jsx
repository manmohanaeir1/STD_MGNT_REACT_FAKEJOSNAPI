import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateStudent() {
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate(); // Correctly invoke useNavigate

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = { id, firstName, lastName, address, phone, email };
        fetch('http://localhost:3001/students', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(student)
        })
        .then(() => {
            alert("Student Added Successfully");
            navigate("/"); // Redirect to home page
        })
        .catch((err) => {
            console.error(err.message);
        });
    };

    return (
        <div className="container">
            <h2>Add New Student</h2>
            <form onSubmit={handleSubmit}>
                <label htmlFor="id">ID:</label>
                <input
                    type="text"
                    id="id"
                    name="id"
                    value={id}
                    onChange={(e) => setId(e.target.value)}
                />

                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />

                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />

                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />

                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />

                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />

                <input type="submit" value="Submit" className="btn btn-submit" />
                <input type="reset" value="Reset" className="btn btn-reset" />

                <Link to="/" className="btn btn-back">Back</Link>
            </form>
        </div>
    );
}