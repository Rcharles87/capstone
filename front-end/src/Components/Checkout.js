import React from 'react'
import "../Styles/checkout.css"
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'rgba(205, 238, 239, 1)',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function CheckOut({carts, handleCheckout}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

 
    console.log(carts)
  return (
    <div className='checkout-container'>
        <h1>Order Summary</h1>
        <hr />

        <p>Total number of meals: {carts[0]?.items.length} </p>
        {/* <p>Kinds of meals: </p> */}
        <button onClick={()=>{handleCheckout(); handleOpen();}}>Checkout</button>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Thank you for your order!
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>

          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default CheckOut