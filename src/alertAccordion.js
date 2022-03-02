import React, { useState } from 'react';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';
import { Alert } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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

export default function AlertAccordion({ alerts }) {
  return (
    <>
      <Alert variant="filled" severity="error">
        Weather Alerts in your area:
        {alerts.map((alerts, i) => (
            <Accordion key={i} sx={{
                backgroundColor: "rgb(211, 47, 47, 1)"
              }}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography>{alerts.event}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                        from: {alerts.sender_name}
                    </Typography>
                    <Typography>
                        {alerts.description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
        ))}
      </Alert>
    </>
  );
}