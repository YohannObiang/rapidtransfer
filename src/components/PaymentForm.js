import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

export default function PaymentForm({
  toreceive,
  rib,
  nom,
  bank,
  setrib,
  settoreceive,
  setnom,
  setbank
}) {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Informations du destinataire
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardName"
            label="Nom"
            fullWidth
            autoComplete="cc-name"
            variant="outlined"
            value={nom}
            onChange={(event) => {setnom(event.target.value)}}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Numero de comtpe"
            fullWidth
            autoComplete="cc-number"
            variant="outlined"
            value={rib}
            onChange={(event) => {setrib(event.target.value)}}
          />
        </Grid>
        <Grid item xs={12} md={6}>
        <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Banque</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={bank}
          label="Banque"
          onChange={(event) => {setbank(event.target.value)}}
        >
          <MenuItem value="FNB">FNB</MenuItem>
          <MenuItem value="STANDARD Bank">STANDARD Bank</MenuItem>
          <MenuItem value="ABSA">ABSA</MenuItem>
          <MenuItem value="NedBank">NedBank</MenuItem>
          <MenuItem value="Capitec">Capitec</MenuItem>
        </Select>
      </FormControl>
        </Grid>
        <Grid item xs={12} md={6}>
          <TextField
            required
            id="cvv"
            label="Montant(ZAF)"
            helperText="Le montant a recevoir en Rand sud-africain(ZAF)"
            fullWidth
            variant="outlined"
            value={toreceive}
            onChange={(event) => {settoreceive(event.target.value)}}
          />
        </Grid>
        
      </Grid>
    </React.Fragment>
  );
}
