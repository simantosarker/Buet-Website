import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import MiniDrawer from "./components/miniDrawer.js";
import Box from "@mui/material/Box";
import DrawerHeader from "./components/drawerHeader.js";
import LocalRoute from "./routes/route.js";

function App() {
  return (
    <>
      <BrowserRouter>
        <Box sx={{ display: "flex" }}>
          <MiniDrawer />

          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />

            <LocalRoute />
          </Box>
        </Box>
      </BrowserRouter>
    </>
  );
}

export default App;
