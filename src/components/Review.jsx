import * as React from 'react';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Grid from '@mui/material/Grid';

const products = [
  {
    name: 'Product 1',
    desc: 'A nice thing',
    price: '$9.99',
  },
  {
    name: 'Product 2',
    desc: 'Another thing',
    price: '$3.45',
  },
  {
    name: 'Product 3',
    desc: 'Something else',
    price: '$6.51',
  },
  {
    name: 'Product 4',
    desc: 'Best thing of all',
    price: '$14.11',
  },
  { name: 'Shipping', desc: '', price: 'Free' },
];

const addresses = ['1 MUI Drive', 'Reactville', 'Anytown', '99999', 'USA'];
const payments = [
  { name: 'Card type', detail: 'Visa' },
  { name: 'Card holder', detail: 'Mr John Smith' },
  { name: 'Card number', detail: 'xxxx-xxxx-xxxx-1234' },
  { name: 'Expiry date', detail: '04/2024' },
];

export default function Review(
  {
    airtelmoney,
    tosend,
    toreceive,
    rib,
    nom,
    bank
  }
) {
  return (
    <React.Fragment>
      <Typography variant="h5" gutterBottom style={{textAlign:'center'}}>
        Verification finale
      </Typography>
      
      <Grid container spacing={2} style={{display:'flex', flexDirection:'column'}}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            <strong>Informations de l'émeteur</strong><br /><br />
          </Typography>
          <Typography gutterBottom>
            Numéro d'envoie: <br /><strong>{airtelmoney}</strong><br /><br />
            Somme envoyée: <br /><strong>{tosend} FCFA</strong>

          </Typography>
        </Grid>
        <Grid item container direction="column" xs={12} sm={12}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
          <strong>Informations du destinataire</strong> <br /><br />
          </Typography>
          <Grid container>
          <Typography gutterBottom>
            Nom du destinataire: <br /><strong>{nom}</strong><br /><br />
            Banque: <br /><strong>{bank}</strong><br /><br />
            Numéro de compte: <br /><strong>{rib}</strong><br /><br />
            Somme reçue: <br /><strong>R {toreceive}</strong>
           </Typography>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
