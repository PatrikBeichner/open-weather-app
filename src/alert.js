import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Modal } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function Alert({ alerts }) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false)

  return (
    <>
        <div>Hi im an alert</div>
        <p>I'm hardcoded: {alerts[0].event}</p>
        {alerts.map((alerts, i) => {
            return(
            <p key={i}>{alerts.event}</p>)})}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {alerts[0].sender_name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {alerts[0].description}
          </Typography>
        </Box>
      </Modal>
    </>
  )
}
