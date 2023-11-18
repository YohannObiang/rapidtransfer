import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import {Link } from "react-router-dom";




export default function TemporaryDrawer({setIsTurned}) {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        <h4 style={{marginLeft:"15px"}}>Transferts</h4>
        <Divider />

          <ListItem disablePadding>
          <Link to="/" style={{ textDecoration: 'none', color:"black" }}> 
            <ListItemButton  onClick={()=>{toggleDrawer(anchor, false); setIsTurned(false)}}>
              <ListItemIcon>
                <CurrencyExchangeIcon/>
              </ListItemIcon>
              <ListItemText primary={"Af. du sud - Gabon"} />
            </ListItemButton>
            </Link>


          </ListItem>
          <ListItem disablePadding>
          <Link to="/" style={{ textDecoration: 'none', color:"black" }}> 

            <ListItemButton  onClick={()=>{toggleDrawer(anchor, false); setIsTurned(true)}}>
              <ListItemIcon>
                <CurrencyExchangeIcon/>
              </ListItemIcon>
              <ListItemText primary={"Gabon - Af. du sud"} />
            </ListItemButton>
            </Link>
          </ListItem>
          


      </List>
      <br />
      <h4 style={{marginLeft:"15px"}}>Administrateur</h4>

      <Divider />
      <List>
      <ListItem disablePadding>
            <Link to="/dashboard" style={{ textDecoration: 'none', color:"black" }}> 
            <ListItemButton  onClick={toggleDrawer(anchor, false)}>
              <ListItemIcon>
                <LoginIcon/>
              </ListItemIcon>
              <ListItemText primary={"Tableau de bord"} />
            </ListItemButton>
            </Link>
          </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {['right'].map((anchor) => (
        <React.Fragment key={"right"}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }} 
            onClick={toggleDrawer(anchor, true)}
            >
            <MenuIcon style={{color:'#000'}}/>
            </IconButton>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
