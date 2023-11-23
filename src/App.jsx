import * as React from 'react';
import TextField from '@mui/material/TextField';
import { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Link from '@mui/material/Link';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import SaToGabon from './components/SaToGabon';
import Appbar  from './components/Appbar';
import Admin from './pages/Admin'
import axios from 'axios';





const defaultTheme = createTheme();

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      MoneyFlow{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const [isTurned, setIsTurned] = useState(true);
  const [transferType, setTransferType] = useState(true);
  
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    checkAuthentication();
  }, []);

  const checkAuthentication = async () => {
    try {
      const token = localStorage.getItem('token');
      if (token) {
        // Envoyer une requête au serveur pour vérifier la validité du token JWT
        const response = await axios.post(`https://ebillet.onrender.com/api/check-auth`, { token });
        if (response.data.valid) {
          setIsTurned(false);
          console.log("bon");
        } else {
          setIsTurned(true);
          console.log("bad");

        }
      } else {
        setIsTurned(true);
        console.log("bad");

      }
    } catch (error) {
      setIsTurned(true);
      console.log("bad");

      console.error('Une erreur s\'est produite lors de la vérification de l\'authentification:', error);
    }
  };


  const theme = createTheme({
    palette: {
      primary: {
  
        main: '#4A9E39',
  
      },
      secondary: {
  
        main: '#EEEEEE',
        
      },
    },
  });  
  
 
  
  return (
    <BrowserRouter>

<Box
         sx={{
           display: 'flex',
           flexDirection: 'column',
           minHeight: '90vh',
         }}
       >
         {/* <div style={{height:'75px', backgroundColor:'#eeeeee', display:'flex', flexDirection:'column', alignItems:'center',textDecoration:'none', justifyContent:'center'}}>
     <img src={logo} alt="" style={{height:'75px'}}/>
     </div> */}
          <ThemeProvider theme={theme}sx={{display:'flex', alignItem:'center', justifyContent:'center', height:'100vh', margin:'50px'}}>
            <Appbar
            setIsTurned={setTransferType}
            />

             <Container component="main" maxWidth="xs" sx={{mt:5}}>

             <Routes>
        <Route path="/" element={<Home
        transferType={transferType}
        />}/>
        <Route path="/dashboard" element={<Admin
        isLoggedIn={isLoggedIn}
        setIsTurned={setIsTurned}
        isTurned={isTurned}

        />}/>
      </Routes>


             
     
           </Container>
           
           
         </ThemeProvider>  
     
     <ThemeProvider theme={defaultTheme}>
     
             <CssBaseline />
     
             <Box
               component="footer"
               sx={{
                 py: 3,
                 px: 2,
                 mt: 'auto',
                 backgroundColor: (theme) =>
                   theme.palette.mode === 'light'
                     ? theme.palette.grey[200]
                     : theme.palette.grey[800],
               }}
             >
               <Container maxWidth="sm">
                 <Typography variant="body1">
                 Développé par <a href='https://yohannobiang.com' style={{color:'black'}} ><strong>Yohann Obiang</strong>.</a>
                 </Typography>
                 <Copyright />
               </Container>
             </Box>
           
         </ThemeProvider>
         </Box>
 
    </BrowserRouter>
   
  );
}
