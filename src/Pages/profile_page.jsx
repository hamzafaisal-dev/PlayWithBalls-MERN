import React, { useState } from "react";
import { MUINavbar, MUILoggedNavbar } from "../Components/Navbar";
import logo from "../Components/Forms/logo-black.png";

export default function ProfilePage() {
  const [name, setName] = useState("John Doe");
  const [bio, setBio] = useState(
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
  );
  const [age, setAge] = useState(25);
  const [position, setPosition] = useState("Software Engineer");
  const [email, setEmail] = useState("johndoe@example.com");
  const [gender, setGender] = useState("Male");

  const handleEditName = () => {
    const newName = prompt("Enter new name");
    if (newName) {
      setName(newName);
    }
  };

  const handleEditBio = () => {
    const newBio = prompt("Enter new bio");
    if (newBio) {
      setBio(newBio);
    }
  };

  const handleEditAge = () => {
    const newAge = prompt("Enter new age");
    if (newAge) {
      setAge(parseInt(newAge));
    }
  };

  const handleEditPosition = () => {
    const newPosition = prompt("Enter new position");
    if (newPosition) {
      setPosition(newPosition);
    }
  };

  const handleEditEmail = () => {
    const newEmail = prompt("Enter new email");
    if (newEmail) {
      setEmail(newEmail);
    }
  };

  const handleEditGender = () => {
    const newGender = prompt("Enter new gender");
    if (newGender) {
      setGender(newGender);
    }
  };

  return (
    <>
      <MUINavbar logo={logo} />
      <MUILoggedNavbar logo={logo} />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          paddingTop: "200px",
        }}
      >
        <img
          src="/path/to/profile-image.jpg"
          alt="Profile Image"
          style={{ width: "150px", borderRadius: "50%", marginBottom: "20px" }}
        />
        <h1 style={{ fontSize: "24px", fontWeight: "bold" }}>{name}</h1>
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>Bio:</h3>
          <p style={{ fontSize: "14px" }}>{bio}</p>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <h3 style={{ fontSize: "16px", fontWeight: "bold" }}>Stats:</h3>
          <ul style={{ listStyleType: "none", paddingLeft: "0" }}>
            <li>
              <span style={{ fontWeight: "bold" }}>Age: </span>
              <span>{age}</span>
              <button onClick={handleEditAge} style={{ marginLeft: "10px" }}>
                <i className="fas fa-edit"></i>
              </button>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Position: </span>
              <span>{position}</span>
              <button
                onClick={handleEditPosition}
                style={{ marginLeft: "10px" }}
              >
                <i className="fas fa-edit"></i>
              </button>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Email: </span>
              <span>{email}</span>
              <button onClick={handleEditEmail} style={{ marginLeft: "10px" }}>
                <i className="fas fa-edit"></i>
              </button>
            </li>
            <li>
              <span style={{ fontWeight: "bold" }}>Gender: </span>
              <span>{gender}</span>
              <button onClick={handleEditGender} style={{ marginLeft: "10px" }}>
                <i className="fas fa-edit"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
