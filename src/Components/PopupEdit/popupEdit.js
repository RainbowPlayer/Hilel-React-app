import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

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

export default function PopupEdit({ handleCloseEdit, openEdit, product, modalTitle }) {
  return (
    <div>
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {modalTitle}
            </Typography>
            <TextField id="outlined-basic" label="Category" variant="outlined" defaultValue={product?.category || ""} />
            <TextField id="outlined-basic" label="Name" variant="outlined" defaultValue={product?.name || ""} />
            <TextField id="outlined-basic" label="Quantity" variant="outlined" defaultValue={product?.quantity || ""} />
            <TextField id="outlined-basic" label="Price" variant="outlined" defaultValue={product?.price || ""} />
            
        </Box>
      </Modal>
    </div>
  );
}