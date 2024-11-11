import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import "../styles/adduser.css";
import "../styles/button.css";

const AddUser = () => {
  const users = {
    name: "",
    email: "",
    address: "",
  };
  const [user, setUser] = useState(users);
  const navigate = useNavigate();

  const inputHandler = (e) => {
    const { name, value } = e.target;
    console.log(name, value);

    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    await axios
      .post("http://localhost:8000/api/user", user)
      .then((respone) => {
        toast.success(respone.data.massage, { position: "top-right" });
        navigate("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="addUser">
      <Link to="/" type="button" class="btn btn-secondary submit-user-btn">
        <img
          src="/images/arrow-left-solid.svg"
          alt="Back"
          className="mb-1 btn-back"
        />
        Back
      </Link>
      <h3>Add New User</h3>
      <form className="addUserForm" onSubmit={submitForm}>
        <div className="inputGroup">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            onChange={inputHandler}
            name="name"
            autoComplete="off"
            placeholder="Enter your user Name"
          />
          <div className="inputGroup">
            <label htmlFor="email">Email:</label>
            <input
              type="text"
              id="email"
              onChange={inputHandler}
              name="email"
              autoComplete="off"
              placeholder="Enter your email"
            />
          </div>
          <div className="inputGroup">
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              onChange={inputHandler}
              name="address"
              autoComplete="off"
              placeholder="Enter your address"
            />
          </div>
          <div className="inputGroup">
            <button
              type="submit"
              class="btn btn-outline-primary btn-submit-user"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
