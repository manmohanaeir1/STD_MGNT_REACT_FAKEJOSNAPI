import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function CreateStudent() {
    const [id, setId] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [validation, setValidation] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const student = { id, firstName, lastName, address, phone, email };

        // Check if all fields are filled
        if (!id || !firstName || !lastName || !address || !phone || !email) {
            setValidation(true);
            return;
        }

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
                {validation && !id && <span className="error">Please enter Student ID</span>}

                <label htmlFor="firstName">First Name:</label>
                <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={firstName}
                    onChange={(e) => setFirstName(e.target.value)}
                />
                {validation && !firstName && <span className="error">Please enter First Name</span>}

                <label htmlFor="lastName">Last Name:</label>
                <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={lastName}
                    onChange={(e) => setLastName(e.target.value)}
                />
                {validation && !lastName && <span className="error">Please enter Last Name</span>}

                <label htmlFor="address">Address:</label>
                <input
                    type="text"
                    id="address"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
                {validation && !address && <span className="error">Please enter Address</span>}

                <label htmlFor="phone">Phone:</label>
                <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                />
                {validation && !phone && <span className="error">Please enter Phone Number</span>}

                <label htmlFor="email">Email:</label>
                <input
                    type="text"
                    id="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {validation && !email && <span className="error">Please enter Email</span>}

                <input type="submit" value="Submit" className="btn btn-submit" />
                <input type="reset" value="Reset" className="btn btn-reset" />

                <Link to="/" className="btn btn-back">Back</Link>
            </form>
        </div>
    );
}