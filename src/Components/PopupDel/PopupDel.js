import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '../Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

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



export default function PopupDel({ open, handleClose, productId }) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Do you want delete product #{productId} 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <Button content='Yes'/>
            <Button content='No' onClick={handleClose}/>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}