import React from "react";
import "../Pages/style.css";
import { LoginForm } from "../Components/Forms/index.jsx";

export default function home_page() {
  function handleChange() {
    alert("Button Clicked");
  }

  return (
    <>
      <LoginForm></LoginForm>
    </>
  );
}
