import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';



export default function AddressForm(
  {
    airtelmoney,
    tosend,
    setairtelmoney,
    settosend,
    setPaymentMethod,
    setnom,
    setbank,
    paymentMethod
  }
) {

  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setPaymentMethod(event.target.value);
  };
  
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informations de l'emeteur
      </Typography>
      <Grid container spacing={3}>
 
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="No. Airtel Money"
            fullWidth
            variant="outlined"
            value={airtelmoney}
            onChange={(event) => {setairtelmoney(event.target.value.replace(/[^0-9]/g, ''))}}

          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="lastName"
            name="lastName"
            label="Montant(XAF)"
            fullWidth
            type='number'
            variant="outlined"
            value={tosend}
            onChange={(event) => {settosend(event.target.value)}}


          />
        </Grid>

        <Grid item xs={12}>
        <FormControl>
        <Typography variant="h6" gutterBottom>
        Moyen de paiement      
        </Typography>      
        <RadioGroup
        row
        aria-labelledby="demo-row-radio-buttons-group-label"
        name="row-radio-buttons-group"
        
      >
        <FormControlLabel value={0} control={<Radio />} label="Banque" onClick={()=>{setPaymentMethod(1)}}/>
        <FormControlLabel value={1} control={<Radio />} label="E-wallet" onClick={()=>{setPaymentMethod(0);setbank('**************');setnom('**************')}}/>


      </RadioGroup>
    </FormControl>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
