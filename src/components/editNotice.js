import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";

import Typography from "@mui/material/Typography";
import CreateIcon from "@mui/icons-material/Create";
import TextField from "@mui/material/TextField";

import { useForm, Controller } from "react-hook-form";
import iAxios from "../httpService";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const EditNotice = ({ id, title, type, date }) => {
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

  const updateData = async (data) => {
    const sendData = { id: id, data: data };
    console.log(sendData);
    await iAxios.patch("/notice", sendData);
  };

  return (
    <React.Fragment>
      <CreateIcon color="info" onClick={handleClickOpen} />
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle>Edit Notice</DialogTitle>
        <div style={{ margin: 30, marginTop: 0 }}>
          <form onSubmit={handleSubmit(updateData)}>
            <Typography variant="h6">Title</Typography>
            <Controller
              name="title"
              control={control}
              defaultValue={title}
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
              defaultValue={type}
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
              defaultValue={date}
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
              Save
            </Button>
          </form>
        </div>
      </BootstrapDialog>
    </React.Fragment>
  );
};

export default EditNotice;
