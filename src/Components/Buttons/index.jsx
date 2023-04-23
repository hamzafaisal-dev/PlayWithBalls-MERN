import { Button } from "@mui/material";
import "../Buttons/style.css";

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

export const SignUpButton = ({ onClick }) => {
  return (
    <Button
      variant="contained"
      style={{
        backgroundColor: "#18204A",
        color: "white",
        borderRadius: "10px",
        padding: "13px 24px",
        width: "150px",
        textTransform: "none",
        boxShadow: "none",
        fontSize: "17px",
        fontWeight: 600,
      }}
      onClick={onClick}
      href="/signup"
    >
      Sign up
    </Button>
  );
};

export const SignInButton = ({ onClick }) => {
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
      onClick={onClick}
      href="/login"
    >
      Sign in
    </Button>
  );
};

export const AboutUsButton = ({ onClick }) => {
  return (
    <Button
      variant="outlined"
      style={{
        border: "none",
        color: "#18204A",
        borderRadius: "10px",
        padding: "13px 24px",
        width: "150px",
        textTransform: "none",
        boxShadow: "none",
        fontSize: "17px",
        fontWeight: 600,
      }}
      onClick={onClick}
      href="/about"
    >
      About Us
    </Button>
  );
};

export const ContactUsButton = ({ onClick }) => {
  return (
    <Button
      variant="outlined"
      style={{
        border: "none",
        color: "#18204A",
        borderRadius: "10px",
        padding: "13px 24px",
        width: "150px",
        textTransform: "none",
        boxShadow: "none",
        fontSize: "17px",
        fontWeight: 600,
      }}
      onClick={onClick}
      href="/contact"
    >
      Contact Us
    </Button>
  );
};

export const AddGroundButton = ({ handleAddGroundClick }) => {
  return (
    <Button
      className="add-ground"
      variant="contained"
      color="primary"
      onClick={handleAddGroundClick}
    >
      Add Ground
    </Button>
  );
};

export const AddCityButton = ({ handleAddCityClick }) => {
  return (
    <Button
      className="add-city"
      variant="contained"
      color="primary"
      onClick={handleAddCityClick}
    >
      Add City
    </Button>
  );
};

// export const MUIButton = () => {
//   return (
//     <div className="MUIButton">
//       <Button variant="text">Text</Button>
//       <Button variant="contained">Contained</Button>
//       <Button variant="outlined">Outlined</Button>
//     </div>
//   );
// };
