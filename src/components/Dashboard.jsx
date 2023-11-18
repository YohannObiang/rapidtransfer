import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import QueueIcon from '@mui/icons-material/Queue';import LogoutIcon from '@mui/icons-material/Logout';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';

export default function Dashboard({logoff}) {
  const [value, setValue] = React.useState(0);

  return (
    <Box sx={{ width: '100%' }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Creer recu" icon={<QueueIcon />} />
        <BottomNavigationAction label="Recus" icon={<ReceiptLongIcon />} />
        
        <BottomNavigationAction label="Se deconnecter" icon={<LogoutIcon />} onClick={logoff}/>
      </BottomNavigation>
    </Box>
  );
}
