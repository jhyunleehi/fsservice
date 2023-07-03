
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import useAuth from "../hook/useJwt";



const Buildings = ()=>{

    const [buildings, setBuildings] = useState([])
    const {jwt} = useAuth

    // handle induvidual building requests
    /*  
    
      const handleBuilding = (id) => {
        navigate("/buildings/"+id)
      }
    
    */

    useEffect (()=>{

        //Bring the data from the backend

          
          /* 
          const headers =- new Headers();
          headers.append("Content-Type", "application/json");
          headers.append("Authorization", `Bearer ${jwt}`);

          const requestOptions = {
            method: "GET",
            headers: headers,
          }
          
          fetch("http://localhost:5000/buildings", requestOptions).then((response) => response.json()).then((data) => {
            setBuildings(data);} ) .catch((error) => {
                setClassname("alert alert-danger");
                setMessage(error.message);
            });
        
        */
        

        let enterBuilding= [
            {
                id: 1,
                name: "John Doe",
                address: "Seoul district",
                phone: "0123456789",
                owner: "John Doe",
                date: "2020-01-01",
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
        setBuildings(enterBuilding)

    },[])
    return(
        <div className="col-md-10 text-center">
            <h1>Buildings</h1>
            <hr />
         
            <table className="table table-striped table-hover">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Owner</th>
                        <th scope="col">Installed Date</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {buildings.map((building) => (
                        <tr key={building.id}>
                            <Link className="col" to={`/buildings/${building.id}`} >
                                <td>{building.name}</td>
                            </Link>
        
                            <td>{building.owner}</td>
                            <td>{building.date}</td>
                            <td>{building.phone}</td>
                            <td>{building.address}</td>
                            <button className="btn btn-primary" >Update</button>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    )
}

export default Buildings;