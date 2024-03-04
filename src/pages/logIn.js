import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import LoginFrom from "../components/loginFrom";

const card = (
  <React.Fragment>
    <CardContent>
      <LoginFrom />
    </CardContent>
  </React.Fragment>
);

const Login = () => {
  return (
    <Box sx={{ maxWidth: 400, minWidth: 275, margin: "auto", paddingTop: 5 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
};

export default Login;
