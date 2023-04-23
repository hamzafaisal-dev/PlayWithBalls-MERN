import React, { useState } from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Room } from "@mui/icons-material";
import "./style.css";

type CityCardProps = {
  city: string,
  subtitle: string,
  imageLink: string,
};

export const CityCard = ({ city, subtitle, imageLink }: CityCardProps) => {
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
        <Typography gutterBottom variant="h5" component="div">
          {city}
        </Typography>
        <div style={{ display: "flex", alignItems: "center" }}>
          <Room
            sx={{ color: "rgba(0,0,0,0.5)", fontSize: "16px", mr: "4px" }}
          />
          <Typography variant="subtitle1" color="text.secondary">
            {subtitle}
          </Typography>
        </div>
      </CardContent>
    </Card>
  );
};
