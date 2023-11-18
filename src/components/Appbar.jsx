import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from "../logoM-removebg-preview.png"
import Drawer from './Drawer';



export default function Appbar({setIsTurned}) {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" style={{backgroundColor:"#EEEEEE"}}>
        <Toolbar style={{ display:"flex", justifyContent:"space-between"}}>
          <img src={logo} alt="" style={{height:'75px'}}/>

          <Drawer
          setIsTurned={setIsTurned}
          />
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
