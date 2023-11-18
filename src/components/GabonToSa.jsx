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
import {Link } from "react-router-dom";
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

export default function GabonToSa() {
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
  .then(query => setExchangeRate(query.conversion_rate+2.5))

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

  return (
  <div>
    <Card sx={{padding:'20px 10px', height:'fit-content'}}>
        <Typography component="h1" variant="h5">
          Convertisseur de devises (XAF-ZAF)
        </Typography>
        <form noValidate>
          
          <TextField
            margin="normal"
            required
            fullWidth
            name="number"
            label="Montant à envoyer (Franc CFA)"
            type="number"
            id="toReceive"
            onChange={handleChangeToReceive}
            value={toReceive}
          />
          
          <TextField
            margin="normal"
            fullWidth
            disabled
            name="number"
            label="Frais inclus (Franc CFA)"
            type="number"
            id="toReceive"
            onChange={handleChangeToReceive2}
            value={frais}
          />
          <TextField
            margin="normal"
            required
            // disabled
            fullWidth
            id="toReceive"
            label="Montant à recevoir (Rand sud-africain)"
            name="number"
            type="number"
            onChange={handleChangeToSend}
            value={toSend}
          />
        </form>
        </Card>
        <br />
        <div style={{textAlign:'center'}}>
            <Link to="/to-gabon">
                Afrique du sud - Gabon
            </Link>
        </div>

  </div>
        

  );
}
