import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import QueueIcon from '@mui/icons-material/Queue';
import LogoutIcon from '@mui/icons-material/Logout';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import Checkout from './Checkout';
import Receipts from './Receipts';
import axios from 'axios';



export default function Dashboard({logoff}) {
  const [value, setValue] = React.useState(0);
  const [retraits, setRetraits] = React.useState({});
  React.useEffect(() => {
    getRetraits();
  }, []);

  const getRetraits = async () => {
    var response = await axios.get(`https://moneyflow-25oe.onrender.com/retraits`);
    setRetraits(response.data.reverse());
  };  
  
  function getStepContent(step) {
    switch (step) {
      case 1:
        return <Receipts
        retraits={retraits}
        />;  
      
      case 0:
        return <Checkout/>;
      default:
        throw new Error('Unknown step');
    }
  }

  const [activeStep, setActiveStep] = React.useState(0);

  return (
    <div>

   
    {getStepContent(activeStep)} 
    <Box sx={{ width: '100%' , position:'fixed', bottom:'0', left:'0'}}>
      {/* <Checkout/> */}
             
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Créer un reçu" icon={<QueueIcon />} onClick={()=>{setActiveStep(0)}}/>
        <BottomNavigationAction label="Reçu" icon={<ReceiptLongIcon />} onClick={()=>{setActiveStep(1)}}/>
        <BottomNavigationAction label="Se déconnecter" icon={<LogoutIcon />} onClick={logoff}/>
      </BottomNavigation>
    </Box>
    </div>
  );
}
