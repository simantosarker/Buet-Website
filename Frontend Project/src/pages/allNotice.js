import React from "react";
import NoticeList from "./../components/noticeList";
import { Typography } from "@mui/material";

import AddNotice from "../components/addNotice";

const AllNotice = () => {
  return (
    <>
      <Typography variant="h4" align="center" paddingBottom={5} paddingTop={5}>
        Notices
      </Typography>

      <NoticeList />
      <AddNotice />
    </>
  );
};

export default AllNotice;
