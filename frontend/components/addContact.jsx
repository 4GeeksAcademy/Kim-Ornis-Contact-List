import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

const addContact = () => {
  const { dispatch } = useGlobalReducer();
  const navigate = useNavigate();

  const [contactData, setContactData] = useState({});

  const handleChange = (e) => {
    setContactData({ ...contactData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // This creates a contact.
    const url = "https://playground.4geeks.com/contact/agendas/KOTHECODE/contacts";
    const request = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(contactData),
    };

    await fetch(url, request)
      .then((resp) => {
        if (!resp.ok) throw Error(resp.statusText);
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        // Dispatch data to store.js.
      })
      .catch((error) => {
        console.log(error);
      });

    await fetch(
      "https://playground.4geeks.com/contact/agendas/KOTHECODE/contacts"
    )
      .then((resp) => {
        if (!resp.ok) throw Error(resp.statusText);
        return resp.json();
      })
      .then((data) => {
        console.log(data);
        dispatch({
          'type': 'replace_contacts',
          'contacts': data.contacts
        })
      })
      .catch((error) => {
        console.log(error);
      });
      navigate("/");
    //} catch (error) {
      //console.error("Error adding contact", error);
  };

  return (
    <div className="contact-card-container mt-0">
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="form-group">
          <label>Full Name</label>
          <input
            type="text"
            name="name"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label>Address</label>
          <input
            type="text"
            name="address"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="tel"
            name="phone"
            onChange={(e) => {
              handleChange(e);
            }}
            required
          />
        </div>

        {/* if contact.id doesn't exist, Add Contact button and vice versa*/}
        <button type="submit">
          {contactData.id ? "Update Contact" : "Add Contact"}
        </button>
      </form>
    </div>
  );
};

export default addContact;