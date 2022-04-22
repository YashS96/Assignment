import React from 'react'
import { Box, AppBar, Toolbar } from '@mui/material'


function Header() {
  return (
    <Box >
        <AppBar>
            <Toolbar className='header'>
                Innovacle Assignment #1
            </Toolbar>  
        </AppBar>
    </Box>
  )
}

export default Header