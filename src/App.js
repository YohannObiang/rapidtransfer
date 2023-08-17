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

const defaultTheme = createTheme();

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {'Copyright © '}
      RapidTransfer{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function App() {
  const [exchangeRate, setExchangeRate] = useState(0);
  const [frais, setfrais] = useState(0);
  const [toSend, setToSend] = useState(0);
  const [toReceive, setToReceive] = useState(0);
  const BASE_URL = 'http://api.exchangeratesapi.io/v1/latest?access_key=fa5f93fc0965f0784e4f9128e9f494d3&format=1';
  useEffect(() => {
    fetchExchangeRate();
  }, []);

  function fetchExchangeRate() {
fetch(BASE_URL)
  .then(res => res.json())
  .then(query => setExchangeRate((655.50/query.rates.ZAR)+2.5))

  }

  const handleChangeToSend = (e) => {
    // setToSend(e.target.value);
    alert('Cannot write here')
    // const result= Math.ceil(e.target.value * exchangeRate)
    // setToReceive(result-(result*5.5/100));
    // setfrais(result*5.5/100)
  };

  const handleChangeToReceive = (e) => {
    setToReceive(e.target.value);
    const result= Math.ceil(e.target.value / exchangeRate)
    setToSend(Math.floor((e.target.value-(e.target.value*5.5/100))/exchangeRate));
    setfrais(Math.floor(e.target.value*5.5/100))
  };
  const handleChangeToReceive2 = (e) => {
    setToReceive(e.target.value);
    const result= Math.floor(e.target.value / exchangeRate)
    setfrais(Math.floor(result*5.5/100*exchangeRate));
  };

  return (
    <Box
    sx={{
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    }}
  >
    <div style={{height:'75px', backgroundColor:'black', display:'flex', flexDirection:'column', alignItems:'center',textDecoration:'none', justifyContent:'center'}}>
<h2 style={{color:'white'}}>RapidTransfer</h2>
</div>
     <ThemeProvider theme={defaultTheme}sx={{display:'flex', alignItem:'center', justifyContent:'center', height:'100vh', margin:'50px'}}>
      
        <Container component="main" maxWidth="xs" sx={{mt:5}}>
        <Card sx={{padding:'20px 10px', height:'fit-content'}}>
        <Typography component="h1" variant="h5">
          Convertisseur de devises
        </Typography>
        <form noValidate>
          
          <TextField
            margin="normal"
            required
            fullWidth
            name="number"
            label="Montant à envoyer frais inclus (Franc CFA)"
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
            label="Frais d'envoi (Franc CFA)"
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
        <br/>
        <br/>
        <Card sx={{padding:'20px 10px', height:'fit-content', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center'}}>
        <WhatsAppIcon sx={{fontSize:'50px'}}/>
        <span>+27 61 857 4387</span>
        </Card>

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
            Développé par <a href='yohannobiang.com' style={{color:'black'}} ><strong>Yohann Obiang</strong></a>
            </Typography>
            <Copyright />
          </Container>
        </Box>
      
    </ThemeProvider>
</Box>
  );
}
