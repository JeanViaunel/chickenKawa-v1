import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function Chicken(props) {
  return (
    <Card sx={{ maxWidth: 180, maxHeight: 350 }} className="m-3">
      <CardActionArea component={Link} to={props.name}>
        <CardMedia
          component="img"
          height="100"
          // width={"100"}
          image={props.image}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h8" component="div">
            {props.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.description.length > 100
              ? props.description.slice(0, 50) + "..."
              : props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
