import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { useParams } from "react-router-dom";
import useAuth from "../../hook/useJwt";

const Employee = () => {
  const [employee, setEmployee] = useState({});
  const { setClassname, setMessage } = useOutletContext();
  let { id } = useParams();
  const { jwt } = useAuth();
  // Handle Delete Update Employee
  /*  
  const headers =- new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("Authorization", `Bearer ${jwt}`);

    const requestOptions = {
      method: "DELETE",
      headers: headers,
    }
  const handleDelete = (id) =>{
    
    fetch(`http://localhost:5000/employee/${id}`, requestOptions).then((response) => response.json()).then((data) => {
      setClassname("alert alert-success");
      setMessage(data.message);
      navigate("/employees");
    }).catch((error) => {
        setClassname("alert alert-danger");
        setMessage(error.message);
    });
  }
  */

  useEffect(() => {
    // Bring data

    /* 
          
          fetch(`http://localhost:5000/employee/$id`, requestOptions).then((response) => response.json()).then((data) => {
            setEmployee(data);} ) .catch((error) => {
                setClassname("alert alert-danger");
                setMessage(error.message);
            });
        
        */

    let Newemployee = {
      id: 3,
      name: "Jdohn Doe",
      email: "kenadvdfvda@example.com",
      phone: "0123456789",
      address: "1234 Main St",
      position:"IT",
      department:"bla"
    };
    setEmployee(Newemployee);
  }, id);

  return (
    <div className="col-md-10 text-center">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{employee.name}</h5>
          <p className="card-text">
            <strong>Position:</strong> {employee.position}
            <br />
            <strong>Department:</strong> {employee.department}
          </p>
          <div className="btn-group">
            <button className="btn btn-primary" onClick>
              Update
            </button>
            <button className="btn btn-danger" onClick>
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Employee;
