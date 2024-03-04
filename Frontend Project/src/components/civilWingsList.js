import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import CivilAreaCard from "./civilAreaCard";
import { Link } from "react-router-dom";

import Rows from "./user";
const rows = [...new Set(Rows.map((item) => item.area))];

console.log(rows);
const CivilWingsList = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {rows.map((row) => (
          <Grid item xs={2} sm={4} md={4} key={row}>
            <Link
              to={`/civilwing/${row}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <CivilAreaCard area={row} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
export default CivilWingsList;
