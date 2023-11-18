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
import GabonToSa from '../components/GabonToSa';
import SaToGabon from '../components/SaToGabon';
import Admin from './Admin'





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

export default function Home({transferType}) {
  const [exchangeRate, setExchangeRate] = useState(0);
  const [frais, setfrais] = useState(0);
  const [toSend, setToSend] = useState(0);
  const [toReceive, setToReceive] = useState();
  const BASE_URL = 'https://v6.exchangerate-api.com/v6/7d510eacf9aafb382d783d68/pair/ZAR/XAF';
  useEffect(() => {
    fetchExchangeRate();
  }, []);

  function fetchExchangeRate() {
fetch(BASE_URL)
  .then(res => res.json())
  // .then(query => setExchangeRate(Math.floor(((655.50/query.rates.ZAR)+2.5)*100)/100))
  .then(query => setExchangeRate(query.conversion_rate+2.3))

  }

  const handleChangeToSend = (e) => {
    // setToSend(e.target.value);
    alert('Cannot write here')
    // const result= Math.ceil(e.target.value * exchangeRate)
    // setToReceive(result-(result*5.5/100));
    // setfrais(result*5.5/100)
  };

  const handleChangeToReceive = (e) => {
    fetchExchangeRate()
    setToReceive(e.target.value);
    const result= Math.ceil(e.target.value-(e.target.value*5.5/100))
    setToSend(Math.floor(result/exchangeRate));
    console.log(Math.floor((e.target.value-(e.target.value*5.5/100))/exchangeRate));
    setfrais(Math.floor(e.target.value*5.5/100))
    console.log(exchangeRate)
  };
  const handleChangeToReceive2 = (e) => {
    setToReceive(e.target.value);
    const result= Math.floor(e.target.value / exchangeRate)
    setfrais(Math.floor(result*5.5/100*exchangeRate));
  };
  const theme = createTheme({
    palette: {
      primary: {
  
        main: '#EEEEEE',
  
      },
      secondary: {
  
        main: '#8AE0AA',
        
      },
    },
  });  return (

        <Box
         sx={{
           display: 'flex',
           flexDirection: 'column',
           minHeight: '90vh',
         }}
       >
             <Container component="main" maxWidth="xs" sx={{mt:5}}>
             {transferType ? (
            <div>
                <GabonToSa/>
            </div>
            ) : ( 
            <div>
                <SaToGabon/>
            </div>
            )}

             <br/>
             <Card sx={{padding:'20px 10px', height:'fit-content', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
             <WhatsAppIcon sx={{fontSize:'50px'}}/>
             <span>+27 61 857 4387</span>
             </Card>
     
             </Container>
        </Box>
 
   
  );
}
