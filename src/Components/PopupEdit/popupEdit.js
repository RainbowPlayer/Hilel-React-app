import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '../Button';
import { useState, useEffect } from 'react';

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

export default function PopupEdit({ handleCloseEdit, openEdit, product, modalTitle, addProductFetch, setCategory, setName, setQuantity, setPrice, category, name, quantity, price, editProductFetch }) {
  
  const [isValid, setIsValid] = useState(false);

  const handleChange = () => {
    if (!category || !name || !quantity || !price) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }

  useEffect(() => {
    handleChange();
  }, [category, name, quantity, price]);

  useEffect(() => {
    if (product) {
        setCategory(product.category);
        setName(product.name);
        setQuantity(product.quantity);
        setPrice(product.price);
    }
  }, [product]);

  return (
    <div>
      <Modal
        open={openEdit}
        onClose={handleCloseEdit}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                {modalTitle}
            </Typography>
            <TextField id="outlined-basic" label="Category" variant="outlined" defaultValue={product?.category || ""} value={category} onChange={(e) => {setCategory(e.target.value); handleChange(); }} />
            <TextField id="outlined-basic" label="Name" variant="outlined" defaultValue={product?.name || ""} value={name} onChange={(e) => {setName(e.target.value); handleChange(); }} />
            <TextField id="outlined-basic" label="Quantity" variant="outlined" defaultValue={product?.quantity || ""}  value={quantity} onChange={(e) => {setQuantity(e.target.value); handleChange(); }} />
            <TextField id="outlined-basic" label="Price" variant="outlined" defaultValue={product?.price || ""} value={price} onChange={(e) => {setPrice(e.target.value); handleChange();}} />
            <Button content='Submit' onClick={() => { product ? editProductFetch() : addProductFetch(); handleCloseEdit(); }} disabled={isValid} />
          </form>
        </Box>
      </Modal>
    </div>
  );
}