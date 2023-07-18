import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle, faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import Ws from "../../hook/useWebsocket";

const BuildingInfoTable = () => {
  const { sendJsonMessage, lastJsonMessage } = Ws();
  const [building, setBuilding] = useState({});
  const [history, setHistory] = useState([]);

  useEffect(() => {
    console.log(lastJsonMessage)
    // Hardwritten Data for building information
    let building1 = {
      id: 1,
      name: "Building A",
      owner: "John Doe",
      installer: "Jane Smith",
      address: "123 Main St, City",
      numOfSensors: 10,
      status:false,
      lastModified: "2023-07-15",
      roomNumber: "101",
    };
    
    // Update building status based on WebSocket message
    if (lastJsonMessage?.action === "active") {
     
      building1.status = false;
    } else if(lastJsonMessage?.action ==="inactive") {
      building1.status = true;
      building1.broken = lastJsonMessage?.message
    }

    setBuilding(building1);

    // Hardwritten data for history
    let history1 = [
      {
        id: 1,
        alarmTime: "2023-07-16 10:30 AM",
        address: "456 Elm St, Town",
        building: "Building B",
        sensorId: "SENSOR001",
        roomNumber: "102",
        turnedOffBy: "John Doe",
        lastChecked: "2023-07-16 11:00 AM",
      },
    ];
    setHistory(history1);
  }, [lastJsonMessage]);

  return (
    <div className="container mt-4">
      <h2>Building Information</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Building Name</th>
            <th>Owner</th>
            <th>Installer</th>
            <th>Address</th>
            <th>Number of Sensors</th>
            <th>Status</th>
            {building.status && <th>Broken</th>}
            <th>Last Modified</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{building.name}</td>
            <td>{building.owner}</td>
            <td>{building.installer}</td>
            <td>{building.address}</td>
            <td>{building.numOfSensors}</td>
            <td>
              {!building.status ? (
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className="text-success fa-2x"
                />
              ) : (
                <FontAwesomeIcon
                  icon={faTimesCircle}
                  className="text-danger fa-2x"
                />
              )}
            </td>
            {building.status && <td>{building.broken}</td>}
            <td>{building.lastModified}</td>
          </tr>
        </tbody>
      </table>

      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          setBuilding((prevBuilding) => ({
            ...prevBuilding,
            status: !prevBuilding.status,
          }));
        }}
      >
        Change Status
      </button>

      <h2 className="mt-4">History</h2>
      <table className="table table-bordered mt-3">
        <thead>
          <tr>
            <th>Alarm Time</th>
            <th>Address</th>
            <th>Building</th>
            <th>Sensor ID</th>
            <th>Room Number</th>
            <th>Turned Off By</th>
            <th>Last Checked</th>
          </tr>
        </thead>
        <tbody>
          {history.map((item) => (
            <tr key={item.id}>
              <td>{item.alarmTime}</td>
              <td>{item.address}</td>
              <td>{item.building}</td>
              <td>{item.sensorId}</td>
              <td>{item.roomNumber}</td>
              <td>{item.turnedOffBy}</td>
              <td>{item.lastChecked}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BuildingInfoTable;
