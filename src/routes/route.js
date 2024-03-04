import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./../pages/home";
import CivilWing from "./../pages/civilWing";
import Personal from "./../pages/personal";
import DownloadForm from "./../pages/downloadForm";
import AllNotice from "./../pages/allNotice";
import LogIn from "./../pages/logIn";
import AreaView from "../pages/areaView";

// import { createBrowserRouter } from "react-router-dom";

// const underRoute = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/civilWing",
//     element: <CivilWing />,
//   },
//   {
//     path: "/personal",
//     element: <Personal />,
//   },
//   {
//     path: "/downloadForm",
//     element: <DownloadForm />,
//   },
//   {
//     path: "/notice",
//     element: <AllNotice />,
//   },
//   {
//     path: "/login",
//     element: <LogIn />,
//   },
// ]);

// const LocalRoute = () => {
//   return <RouterProvider router={underRoute} />;
// };

const LocalRoute = () => {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />}></Route>
        <Route path="/civilWing" exact element={<CivilWing />}></Route>
        <Route path="/civilWing/:area" element={<AreaView />}></Route>
        <Route path="/personal" exact element={<Personal />}></Route>
        <Route path="/downloadForm" exact element={<DownloadForm />}></Route>
        <Route path="/notice" exact element={<AllNotice />}></Route>
        <Route path="/login" exact element={<LogIn />}></Route>
      </Routes>
    </>
  );
};

export default LocalRoute;
