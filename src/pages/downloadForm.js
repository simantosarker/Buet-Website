import React from "react";
import DownloadList from "../components/downloadList.js";
import { Typography } from "@mui/material";

const DownloadForm = () => {
  return (
    <>
      <Typography padding={8} align="center" variant="h4" component="h2">
        List Of Download From
      </Typography>
      <DownloadList />
    </>
  );
};

export default DownloadForm;
