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
    const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false)
  return (
    <>
        <Alert variant='filled' severity='error' >Weather Alerts in your area:
            {alerts.map((alerts, i) => { 
                const handleOpen = () => setOpen(true);
                const handleClose = () => setOpen(false)
                
                return( 
                <>
                    <Button key={i} onClick={handleOpen}>{alerts.event}</Button>
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                        overlayStyle={{backgroundColor: 'transparent'}}
                        BackdropProps={{ invisible: true }}
                    >
                        <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                issued by: {alerts.sender_name}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {alerts.description}
                            </Typography>
                        </Box>
                    </Modal>
                </>
        )})}
        </Alert>
        {/* {alerts.map((alerts, i) => {
            return(
            <Alert variant='filled' severity='error' key={i}><p>{alerts.event}</p></Alert>)})} */}
        {/* <Modal
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
      </Modal> */}
    </>
  )

}
