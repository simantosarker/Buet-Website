import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import iAxios from "../httpService";

const LoginFrom = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const loginData = async (data) => {
    console.log(data);
    const response = await iAxios.post("/users/login", { data });
    localStorage.setItem("token", response?.data?.token);
    console.log(localStorage);
  };

  // const logOut = () => {
  //   localStorage.clear();
  // };

  return (
    <div>
      <form onSubmit={handleSubmit(loginData)}>
        <Typography variant="h6">Username</Typography>
        <Controller
          name="name"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              style={{ width: "100%", paddingTop: 4, paddingBottom: 4 }}
              {...field}
            />
          )}
        ></Controller>
        {errors.name?.type === "required" && (
          <Typography variant="h6" color="error">
            Username is required
          </Typography>
        )}
        <Typography variant="h6">Password</Typography>
        <Controller
          name="password"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <TextField
              style={{
                width: "100%",
                paddingTop: 4,
                paddingBottom: 15,
              }}
              {...field}
            />
          )}
        ></Controller>
        {errors.password?.type === "required" && (
          <Typography variant="h6" color="error" style={{ paddingBottom: 10 }}>
            Password is required
          </Typography>
        )}
        <Button type="submit" variant="outlined">
          Login
        </Button>
      </form>

      {/* {localStorage.getItem("token") == localStorage.getItem("token") && (
        <>
          <Typography
            variant="h6"
            color="green"
            style={{ paddingTop: 10, paddingBottom: 10 }}
          >
            Login Successfully
          </Typography>
          <Button
            onClick={logOut()}
            type="submit"
            variant="outlined"
            style={{ color: "red", borderColor: "red" }}
          >
            Log Out
          </Button>
        </>
      )} */}
    </div>
  );
};

export default LoginFrom;
