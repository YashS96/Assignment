import React, {useState} from 'react'
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@mui/material'


function Demographics(props) {
   let open = props.open;
   let handleClose = () =>{
      props.closeFunction();
    //  props.func();
   }
  return (  
  <Dialog open={open} onClose={handleClose}>
        <DialogTitle>The API isn't able to predict the demographic information and has returned null</DialogTitle>
        <DialogContent>
          <DialogContentText>
              Please enter the name properly!
          </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Try again!</Button>
          </DialogActions>
    </Dialog>
  )
}

export default Demographics