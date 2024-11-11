import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/user.css";
import "../styles/button.css"

const User = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/users");
        setUsers(res.data);
      } catch (err) {
        console.log("Error while fetching data!", err);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="userTable table-responsive">
      <Link to="/add" type="button" className="btn btn-secondary add-user-btn">
        <img
          src="/images/plus.svg"
          alt="Add"
          className="mb-1"
        />
        Add User
      </Link>
      <table class="table table-hover">
        <thead>
          <tr class="table-secondary">
            <th scope="col">Index</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Address</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => {
            return (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.address}</td>
                <td className="actionButton">
                  <button type="button" class="btn btn-info">
                    <i class="fa-solid fa-pen-to-square"></i>Edit
                  </button>
                  <button type="button" class="btn btn-danger">
                    <i class="fa-solid fa-trash"></i>Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default User;
