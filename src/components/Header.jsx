import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const HomePage = () => {
  return (
    <Container>
      <Typography variant="h2" align="center" gutterBottom>
        Welcome to Our Chicken Farm
      </Typography>
      <Typography variant="subtitle1" align="center" paragraph>
        Discover the joy of fresh, organic eggs from our happy chickens.
      </Typography>

      {/* Featured Chickens Section */}
      <Typography variant="h4" align="center" gutterBottom>
        Featured Chickens
      </Typography>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "20px",
        }}
      >
        <Card style={{ maxWidth: 300 }}>
          <CardMedia
            component="img"
            height="140"
            image="https://thumbs.dreamstime.com/b/white-hen-14168261.jpg"
            alt="Chicken 1"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Clara
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Friendly Rhode Island Red known for vibrant feathers.
            </Typography>
          </CardContent>
        </Card>
      </div>

      <Typography variant="h3" align="center" gutterBottom>
        Image Showcase
      </Typography>
    </Container>
  );
};

export default HomePage;
