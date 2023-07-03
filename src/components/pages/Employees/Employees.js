import { useEffect, useState } from "react";
import { Link, useNavigate} from "react-router-dom";
import useAuth from "../../hook/useJwt";
import { useOutletContext } from "react-router-dom";



const Employees = ()=>{
    const {jwt} = useAuth()
    const navigate = useNavigate();

    const {setClassname, setMessage} = useOutletContext()
    

    const [employees, setEmployees] = useState([]);

    useEffect(()=>{
        if (jwt ===""){
            navigate("/login")
        }

        // Making a post request for the employees 
        /* 
          const headers =- new Headers();
          headers.append("Content-Type", "application/json");
          headers.append("Authorization", `Bearer ${jwt}`);

          const requestOptions = {
            method: "GET",
            headers: headers,
          }
          fetch("http://localhost:5000/employees", requestOptions).then((response) => response.json()).then((data) => {
            setEmployees(data);} ) .catch((error) => {
                setClassname("alert alert-danger");
                setMessage(error.message);
            });

        
        */

        let employeesList= [
            {
                id: 1,
                name: "John Doe",
                email: "kenaa@example.com",
                phone: "0123456789",
                address: "1234 Main St",
            },
            {
                id: 2,
                name: "John Doff",
                email: "kenaa@efdffxample.com",
                phone: "012345678dfd9",
                address: "1234 Main St",
            },
            {
                id: 3,
                name: "Jfddohn Doe",
                email: "kenadvdfvda@example.com",
                phone: "0123456789",
                address: "1234 Main St",
            },
        ]
        setEmployees(employeesList);
    },[])
    return(
        <div className="col-md-10 text-center">
            <h2>Employees</h2>
            <hr />
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr key={employee.id}>
                            <td><Link to={`/employees/${employee.id}`} >{employee.name}</Link></td>
                            <td>{employee.email}</td>
                            <td>{employee.phone}</td>
                            <td>{employee.address}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Employees;