import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";

import Typography from "@mui/material/Typography";
import VisibilityIcon from "@mui/icons-material/Visibility";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const PersonalModal = ({ area, name, designation, contact }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <VisibilityIcon color="info" onClick={handleOpen} />
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography
              align="center"
              id="transition-modal-title"
              variant="h6"
              component="h2"
            >
              {name}
            </Typography>
            <Typography
              align="center"
              id="transition-modal-description"
              sx={{ mt: 2 }}
            >
              {designation}
            </Typography>
            <Typography
              align="center"
              id="transition-modal-description"
              sx={{ mt: 2 }}
            >
              {contact}
            </Typography>
            <Typography
              align="center"
              id="transition-modal-description"
              sx={{ mt: 2 }}
            >
              {area}
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
};

export default PersonalModal;
