import React, {useState} from 'react'
import {Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@mui/material'


function Demographics(props) {
   let open = props.open;
   let handleClose = () =>{
      props.closeFunction();
      // props.func();
      
   }
  return (  
  <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Predicted Demographic Information for 
          <div style={{fontWeight: "bold", marginLeft: '50%'}}>{props.name}</div></DialogTitle>
        <DialogContent>
          <DialogContentText>
            <ul>
              <li>{props.age}</li>
              <li>{props.gender}</li>
            </ul>
            <ul>
            <div style={{fontWeight: "bold"}}> Probable nations:</div>
                {props.nations.map((nation, index)=>(
                    <li key={index}>{nation.country_id} -    {nation.probability}</li>
                ))}
            </ul>
          </DialogContentText>
          </DialogContent>
          <DialogActions>
          <Button onClick={handleClose}>Alright, I'm Done</Button>
          </DialogActions>
    </Dialog>
  )
}

export default Demographics