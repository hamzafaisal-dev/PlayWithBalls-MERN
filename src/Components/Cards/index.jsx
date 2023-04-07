import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Row, Col } from "react-bootstrap";
import "./style.css";

export const TestCard = function CardExample() {
  return (
    <Card style={{ width: "40rem" }}>
      <Row>
        <Col className="charizard">
          <Card.Img
            variant="top"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png"
          />
          <Card.Body>
            <Card.Title className="card-title">Charizard</Card.Title>
            <Card.Text>Charizard uses flamethrower</Card.Text>
            <Button
              variant="primary"
              href="https://www.pokemon.com/us/pokedex/charizard"
              target="_blank"
            >
              Learn More
            </Button>
          </Card.Body>
        </Col>
        <Col className="blastoise">
          <Card.Img
            variant="top"
            src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png"
          />
          <Card.Body>
            <Card.Title className="card-title">Blastoise</Card.Title>
            <Card.Text>Blastoise is thicc</Card.Text>
            <Button
              variant="primary"
              href="https://www.pokemon.com/us/pokedex/blastoise"
              target="_blank"
            >
              Learn More
            </Button>
          </Card.Body>
        </Col>
      </Row>
      <style>
        {`
          .card-title {
            color: #333;
          }

          .card-text {
            color: #666;
          }
        `}
      </style>
    </Card>
  );
};

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

export const BasicCard = function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};

export const MUICard = () => {
  return (
    <Box width="300px">
      <Card style={{ boxShadow: "0px 3px 8px rgba(0, 0, 0, 0.3)" }}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            React
          </Typography>
          <Typography variant="body2" color="text.secondary">
            I am Hamza and I like to siuuuuuu
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
