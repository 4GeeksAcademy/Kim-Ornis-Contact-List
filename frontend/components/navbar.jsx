import React from "react";
import { Link } from "react-router-dom";
import  addContact  from "../components/addContact.jsx";

const Navbar = () => {
  return (
    <nav className="navbar navbar-container">
      <Link to="/" style={{ color: "transparent" }}>
        <h3>Kim's Contact List</h3>
      </Link>
      <div className="ml-auto">
        <Link to="/addContact" className="btn btn-success navbar-button">
          Add New Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar