import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AddIcon from "@mui/icons-material/Add";

import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";

import { useForm, Controller } from "react-hook-form";
import { Typography } from "@mui/material";
import iAxios from "../httpService";

const AddNotice = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const noticeData = async (data) => {
    console.log(data);
    await iAxios.post("/notice", data);
  };

  return (
    <React.Fragment>
      <Box onClick={handleClickOpen} sx={{ "& > :not(style)": { m: 1 } }}>
        <Fab
          color="info"
          aria-label="add"
          style={{ position: "absolute", bottom: 100, right: 250 }}
        >
          <AddIcon />
        </Fab>
      </Box>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Add Notice</DialogTitle>
        <div style={{ margin: 30, marginTop: 0 }}>
          <form onSubmit={handleSubmit(noticeData)}>
            <Typography variant="h6">Title</Typography>
            <Controller
              name="title"
              control={control}
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  style={{ width: "100%", paddingTop: 4, paddingBottom: 4 }}
                  {...field}
                />
              )}
            ></Controller>
            <Typography variant="h6">Type</Typography>
            <Controller
              name="type"
              control={control}
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
            <Typography variant="h6">Date</Typography>
            <Controller
              name="date"
              control={control}
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

            <Button
              onClick={handleClose}
              type="submit"
              variant="outlined"
              style={{ color: "black", borderColor: "black" }}
            >
              Add Notice
            </Button>
          </form>
        </div>
      </Dialog>
    </React.Fragment>
  );
};

export default AddNotice;
