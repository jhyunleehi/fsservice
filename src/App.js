import React, { useEffect } from "react";
import { useState, useContext } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

import Alert from "./components/form/Alert";
import useAuth from "./components/hook/useJwt";

function App() {
  const { jwt, setJwt } = useAuth();
  const [message, setMessage] = useState("");
  const [classname, setClassname] = useState("d-none");
  const [map, setMap] = useState(null);
  const [selectedMarker, setSelectedMarker] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedInfo, setSelectedInfo] = useState(null);
  const [ticking, setTicking] = useState(false);
  const navigate = useNavigate();
  const handleLogout = (e) => {
    setJwt("");
    //This is logout logic that deletes the jwt token
    /*  
    const requestOption = {
      methd:"GET",
      credentials:"include",
    }
    fetch("/logout", requestOption).catch((err)=>{console.error(err)}).finally(() =>{
      Cookie.remove("jwt");
      setJwt("")
      navigate("/login");
    });

    
    */

    navigate("/login");
  };

  // Refreshing jwt token
  /* 
  useEffect(() => {

    if (jwt === "") {
       const requestOption = {
        method:"GET",
        credentials:"include",
       }

       fetch("/refresh", requestOption).then((response) => response.json()).then((data) => {
        if(response.token){
          setJwt(data.token);

        }
       }).catch((error) => {console.error(error)});
    } 

  }. [jwt]);
  */

  // ToogleRefreshing jwt token
  /*  
  let i = setInterval(() => {
    
  }, 1000);
  */

  return (
    <div className="container">
      <div className="row">
        <div className="col mt-3">
          <h2>Company name</h2>
        </div>
        <div className="col  text-end mt-3 p-3">
          {jwt === "" ? (
            <Link to="/login" className="badge bg-success p-2">
              Login
            </Link>
          ) : (
            <button
              to="/login"
              onClick={handleLogout}
              className="badge bg-danger p-2"
            >
              Logout
            </button>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col-md-2 mt-2">
          <nav>
            <div className="list-group">
              {jwt !== "" && (
                <>
                  <Link
                    to="/home"
                    className="list-group-item list-group-item-action"
                  >
                    Dashboard
                  </Link>
                  <Link
                    to="/employees"
                    className="list-group-item list-group-item-action"
                  >
                    Employees
                  </Link>
                  <Link
                    to="/buildings"
                    className="list-group-item list-group-item-action"
                  >
                    Buildings
                  </Link>
                  <Link
                    to="/settings"
                    className="list-group-item list-group-item-action"
                  >
                    Settings
                  </Link>
                </>
              )}
              <Link
                to="/contact"
                className="list-group-item list-group-item-action"
              >
                Contact
              </Link>
            </div>
          </nav>
        </div>
        <div className="col-md-10">
          <Alert message={message} className={classname} />
          <Outlet context={{ 
            setClassname, 
            setMessage,
            map,
            setMap,
            selectedMarker,
            setSelectedMarker,
            selectedAddress,
            setSelectedAddress,
            selectedInfo,
            setSelectedInfo,
             }} />
        </div>
      </div>
    </div>
  );
}

export default App;
