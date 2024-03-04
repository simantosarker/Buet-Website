import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";

const CivilAreaCard = ({ area }) => {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="./../images/civil.jpg"
          alt="area building"
        />
        <CardContent>
          <Typography align="left" gutterBottom variant="h5" component="div">
            {area}
          </Typography>
          <Typography align="left" variant="body2" color="text.secondary">
            Site details
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default CivilAreaCard;
