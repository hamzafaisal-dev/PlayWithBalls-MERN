// import { Button } from 'react-bootstrap'

import { Button } from "@mui/material";

function handleChange() {
  alert("Button Clicked");
}

export const TestButton = (props) => {
  return (
    <div className="TestButton">
      <Button onClick={handleChange}>{props.buttonName}</Button>
    </div>
  );
};

export const SignUpButton = () => {
  return (
    <Button
      variant="contained"
      color="primary"
      style={{
        backgroundColor: "#18204A",
        borderRadius: "10px",
        padding: "13px 24px",
        width: "150px",
        textTransform: "none",
        boxShadow: "none",
        fontSize: "17px",
        fontWeight: 600,
      }}
    >
      Sign up
    </Button>
  );
};

export const SignInButton = () => {
  return (
    <Button
      variant="outlined"
      style={{
        borderColor: "#18204A",
        color: "#18204A",
        borderRadius: "10px",
        padding: "13px 24px",
        width: "150px",
        textTransform: "none",
        boxShadow: "none",
        fontSize: "17px",
        fontWeight: 600,
      }}
    >
      Sign in
    </Button>
  );
};

export const MUIButton = () => {
  return (
    <div className="MUIButton">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </div>
  );
};
