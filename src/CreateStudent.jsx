import { Link } from "react-router-dom";

export default function CreateStudent() {
    return (
       <div className="container">
        <h2>Add New Studests</h2>
        <form action="">
            <label htmlFor="id">ID:</label>
            <input type="text" id="id" name="id"/>
            
            <label htmlFor="firstName">First Name:</label>
            <input type="text" id="firstName" name="firstName"/>
            <label htmlFor="lastName">Last Name:</label>  
            <input type="text" id="lastName" name="lastName"/>
            <label htmlFor="address">Address:</label>
            <input type="text" id="address" name="address"/>                <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" name="phone"/>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email"/>   
            <input type="submit" value="Submit" className="btn btn-submit"/>
            <input type="reset" value="Reset" className="btn btn-reset"/>    

            <Link to='/' class="btn btn-back">Back</Link>      


        </form>
       </div>
                
     );
}   