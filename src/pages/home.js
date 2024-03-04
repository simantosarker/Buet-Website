import React from "react";
import { Typography } from "@mui/material";
import HomePaper from "../components/homePaper.js";

const Home = () => {
  return (
    <>
      <Typography
        variant="h2"
        justifyContent="center"
        align="center"
        color={"#932020"}
        paddingTop={5}
      >
        Office of the Chief Engineer
      </Typography>
      {/* <img
        src="./../images/enggHead.img"
        style={{ justifyContent: "center", align: "center" }}
      ></img> */}

      <Typography
        variant="h5"
        justifyContent="center"
        align="center"
        paddingTop={5}
      >
        Dr. A.K.M. Jahangir Alam, PEngg
      </Typography>
      <Typography
        variant="h5"
        justifyContent="center"
        align="center"
        color={"#932020"}
      >
        Chief Engineer
      </Typography>
      <Typography
        variant="h5"
        justifyContent="center"
        align="center"
        color={"#932020"}
      >
        Phone:01711832597
      </Typography>
      <HomePaper />
    </>
  );
};

export default Home;
