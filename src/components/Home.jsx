import chicken from "./chickens";
import { useState } from "react";
import Chicken from "./Chicken";
import { Container } from "@material-ui/core";
import Header from "./Header";

import React from "react";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(2),
  },
  card: {
    minWidth: 200,
    textAlign: "center",
    margin: theme.spacing(2),
    padding: theme.spacing(2),
  },
}));

const Home = () => {
  const classes = useStyles();
  const [chickens, setChickens] = useState([...chicken]);

  return (
    <Container className={"overscroll-contain" + classes.root}>
      <Grid container spacing={3} justifyContent="center">
        <Header />

        {chickens.map((chicken) => (
          <Chicken key={chicken.id} {...chicken} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;
