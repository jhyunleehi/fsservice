import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";



const SingleBuilding = ()=>{
    const [employee, setEmployee] = useState({});
    let {id} = useParams();

    useEffect(()=>{
        // axios.get(`http://localhost:5000/api/employee/${id}`).then((res)=>{setEmployee(res.data)})
        let Newemployee = {
            address: 'Incheon Immigration Office',
            latitude: 37.4525,
            longitude: 126.6597,
            phoneNumber: '0987654321'
          }
        setEmployee(Newemployee);
    },{id})

    return(
        <div className="col-md-10 text-center">
            <h1>Address: {employee.address}</h1>
            <h2>{employee.latitude}</h2>
            <h2>{employee.longitude}</h2>
            <h2>Phone Number: {employee.phoneNumber}</h2>
        </div>
    )
}

export default SingleBuilding;