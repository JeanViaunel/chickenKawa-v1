import React from "react";
import { Container } from "@material-ui/core";
import Avatar from "@mui/material/Avatar";

export default function MyAvatar(props) {
  return (
    <Container>
      <Avatar
        alt={props.name}
        src={props.image}
        sx={{ width: 300, height: 300 }}
      />
    </Container>
  );
}
