import React from "react";
import PersonalList from "../components/personalList.js";
import { Typography } from "@mui/material";

const Personal = () => {
  return (
    <>
      <Typography padding={8} align="center" variant="h4" component="h2">
        List of Officers
      </Typography>
      <PersonalList />
    </>
  );
};

export default Personal;
