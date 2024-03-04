import React from "react";
import CivilWingsList from "../components/civilWingsList.js";
import { Typography } from "@mui/material";
const CivilWing = () => {
  return (
    <>
      <Typography padding={8} align="center" variant="h4" component="h2">
        Civil Areas
      </Typography>

      <CivilWingsList />
    </>
  );
};

export default CivilWing;
