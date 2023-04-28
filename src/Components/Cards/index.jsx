import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography, Box } from "@mui/material";
import {
  SportsSoccerTwoTone,
  LocationOn,
  Star,
  Room,
} from "@mui/icons-material";
import "./style.css";

export const CityCard = ({ city, grounds = 0, imageLink }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "12px",
        border: "1px solid black",
        cursor: "pointer",
        boxShadow: hovered ? "0px 3px 8px rgba(0, 0, 0, 0.3)" : "none",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <CardMedia
        component="img"
        height="140"
        image={imageLink}
        sx={{
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          paddingTop: "8px",
          paddingLeft: "8px",
          paddingRight: "8px",
        }}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{ textAlign: "center" }}
        >
          {city}
        </Typography>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "10px",
          }}
        >
          <SportsSoccerTwoTone
            color="green"
            sx={{ fontSize: "25px", mr: "8px" }}
          />
          <Typography variant="subtitle1" color="text.secondary">
            {grounds} Grounds
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};

export const GroundCard = ({
  groundName = "Ground Name",
  address = "Ground address",
  reviews = 0,
  type = "Ground type",
  imageLink = "https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
}) => {
  const [hovered, setHovered] = useState(false);

  return (
    <Card
      sx={{
        borderRadius: "12px",
        border: "1px solid black",
        cursor: "pointer",
        boxShadow: hovered ? "0px 3px 8px rgba(0, 0, 0, 0.3)" : "none",
        marginLeft: "10px",
        marginRight: "10px",
        height: "450px",
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        style={{
          position: "relative",
          display: "inline-block",
          borderTopLeftRadius: "12px",
          borderTopRightRadius: "12px",
          overflow: "hidden", // set overflow to hide any image overflow
          height: "60%", // set a fixed height for the image container
        }}
      >
        <CardMedia
          component="img"
          height="100%"
          width="100%" // set width to 100%
          objectFit="cover" // make the image cover the container
          image={imageLink}
          sx={{
            borderTopLeftRadius: "12px",
            borderTopRightRadius: "12px",
          }}
        />
        {type && (
          <div
            style={{
              position: "absolute",
              top: "8px",
              right: "7px",
              backgroundColor: "green",
              color: "white",
              borderRadius: "4px",
              padding: "4px",
              paddingLeft: "9px",
              paddingRight: "9px",
            }}
          >
            {type}
          </div>
        )}
      </div>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {groundName}
        </Typography>
        <div
          style={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
        >
          <Room
            sx={{
              color: "rgba(0,0,0,0.5)",
              fontSize: "16px",
              width: "16px",
              marginRight: "4px",
            }}
          />
          <Typography variant="subtitle1" color="text.secondary">
            {address}
          </Typography>
        </div>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Star
            sx={{
              color: "rgba(0,0,0,0.5)",
              fontSize: "16px",
              marginRight: "4px",
            }}
          />
          <Typography variant="subtitle1" color="text.secondary">
            {`Reviews (${reviews})`}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
