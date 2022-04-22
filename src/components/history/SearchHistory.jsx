import React from 'react'
import {Box, List, ListItem, ListItemIcon, ListItemText,
       Dialog, DialogTitle, DialogContent, DialogContentText, DialogActions, Button} from '@mui/material'

import ManIcon from '@mui/icons-material/Man';

function SearchHistory(props) {
  let open = props.open;
  let handleClose = () =>{
     props.closeFunction();
  }
  return (  
    <Dialog open={open} onClose={handleClose}>
          <DialogTitle> Search History</DialogTitle>
          <DialogContent>
            <DialogContentText>
            <Box>
             <List>
              {props.names.map((name, index)=>(
                  <ListItem key={index}>
                    <ListItemIcon>
                      <ManIcon/>
                    </ListItemIcon>
                    <ListItemText primary = {name} />
                    </ListItem>
              ))}
           </List>
          </Box>
            </DialogContentText>
            </DialogContent>
            <DialogActions>
            <Button onClick={handleClose}>Ok!</Button>
            </DialogActions>
      </Dialog>
    )
}

export default SearchHistory
