import React, { useEffect, useState } from "react";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const fetchUserData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setUsers(data);
      });
  };

  useEffect(() => {
    fetchUserData();
  }, []);

  return (
    <div className="box">
      <h1>All Customers</h1>
      <div className="span-box">
        <span className="span1">Customer Name</span>
        <span className="span2">Company</span>
        <span className="span3">Phone Number</span>
        <span className="span4">Email</span>
        <span className="span5">Street</span>
      </div>
      {users.length > 0 && (
        <table>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.company.name}</td>
                <td>{user.phone}</td>
                <td>{user.email}</td>
                <td>{user.address.street}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default App;
