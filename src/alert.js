import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Button } from '@mui/material';
import { Typography } from '@mui/material';
import { Modal } from '@mui/material';
import { Alert } from '@mui/material';

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

export default function Alerts({ alerts }) {
  const [modalData, setModalData] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleClose = () => setModalIsOpen(false);
  return (
    <>
      <Alert variant="filled" severity="error">
        Weather Alerts in your area:
        {alerts.map((alerts, i) => (

          <Button
            key={i}
            onClick={() => {
              setModalIsOpen(true);
              setModalData(alerts);
            }}>
            {alerts.event}
          </Button>
        ))}
      </Alert>
      <Modal
        open={modalIsOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            issued by: {modalData.sender_name}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {modalData.description}
          </Typography>
        </Box>
      </Modal>
    </>
  );
}
