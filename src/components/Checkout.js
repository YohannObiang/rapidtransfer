import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Paper from '@mui/material/Paper';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import logo from "../logoM-removebg-preview.png"
import Typography from '@mui/material/Typography';
import AddressForm from './AddressForm';
import PaymentForm from './PaymentForm';
import Review from './Review';
import axios from 'axios';
import Grid from '@mui/material/Grid';
import html2canvas from 'html2canvas';
import DownloadButton from './DownloadBtn';





const steps = ['Informations l\'emeteur', 'Informations destinataire', 'Verification finale'];



export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [tosend, settosend] = React.useState(0);
  const [receiptNumber, setreceiptNumber] = React.useState(0);
  const [toreceive, settoreceive] = React.useState(0);
  const [airtelmoney, setairtelmoney] = React.useState("");
  const [rib, setrib] = React.useState("");
  const [nom, setnom] = React.useState("");
  const [bank, setbank] = React.useState("");

  const toAdd={
      airtelmoney: String(airtelmoney),
      tosend: String(tosend),
      toreceive: String(toreceive),
      rib: String(rib),
      nom: String(nom),
      bank: String(bank)
  }

const setReceipt = () => {
  axios.post('https://moneyflow-25oe.onrender.com/ajout/retrait', toAdd).then((res)=>{
    console.log(res.data.id_retrait)
    setreceiptNumber(res.data.id_retrait)
    console.log(toAdd);
    setActiveStep(activeStep + 1);
  })
    
  
  };
  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  function getStepContent(step) {
    switch (step) {
      case 0:
        return <AddressForm 
        airtelmoney={airtelmoney}
        tosend={tosend}
        setairtelmoney={setairtelmoney}
        settosend={settosend}
        />;
      case 1:
        return <PaymentForm 
        toreceive={toreceive}
        rib={rib}
        nom={nom}
        bank={bank}
        setrib={setrib}
        settoreceive={settoreceive}
        setnom={setnom}
        setbank={setbank}
        />;
      case 2:
        return <Review 
        airtelmoney={airtelmoney}
        tosend={tosend}
        toreceive={toreceive}
        rib={rib}
        nom={nom}
        bank={bank}
        />;
      default:
        throw new Error('Unknown step');
    }
  }
  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar
        position="absolute"
        color="default"
        elevation={0}
        sx={{
          position: 'relative',
          borderBottom: (t) => `1px solid ${t.palette.divider}`,
        }}
      >

      </AppBar>
      <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
          <Typography component="h1" variant="h4" align="center">
            Créer un reçu
          </Typography>
          <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
            {steps.map((label) => (
              <Step key={label} style={{display:'flex', flexDirection:'column', alignItems:'center',justifyContent:'center', textAlign:'center' }}>
                <StepLabel></StepLabel>
                <br/>
                {label}
              </Step>
            ))}
          </Stepper>
          {activeStep === steps.length ? (
            <div>
             <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} id="divToDownload">

            <div style={{display:'flex', alignItems:'center'}}>
            <img src={logo} alt="" style={{height:'75px', margin:'auto'}}/>
            </div>
            <br />
             <Typography variant="h6" gutterBottom style={{textAlign:'center', textDecoration:"underline",fontFamily:'monospace'}}>
             Reçu No.{receiptNumber}
             </Typography>
             
             <Grid container spacing={2} style={{display:'flex', flexDirection:'column'}}>
               <Grid item xs={12} sm={12}>
                 <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                   <strong style={{fontFamily:'monospace'}}>Informations de l'émeteur</strong><br /><br />
                 </Typography>
                 <Typography gutterBottom  style={{fontFamily:'monospace'}}>
                   Numéro d'envoie: <br /><strong>{airtelmoney}</strong><br /><br />
                   Somme envoyée: <br /><strong>{tosend} FCFA</strong>
       
                 </Typography>
               </Grid>
               <Grid item container direction="column" xs={12} sm={12}>
                 <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                 <strong  style={{fontFamily:'monospace'}}>Informations du destinataire</strong> <br /><br />
                 </Typography>
                 <Grid container>
                 <Typography gutterBottom  style={{fontFamily:'monospace'}}>
                   Nom du destinataire: <br /><strong>{nom}</strong><br /><br />
                   Banque: <br /><strong>{bank}</strong><br /><br />
                   Numéro de compte: <br /><strong>{rib}</strong><br /><br />
                   Somme reçue: <br /><strong>R {toreceive}</strong>
                  </Typography>
                  
                  <p style={{fontSize:'10px', fontFamily:"monospace"}}>
                  Nous vous remercions chaleureusement d'avoir choisi Moneyflow pour votre transaction. 
                  Votre confiance est précieuse. 
                  N'hésitez pas à nous contacter pour toute assistance future. 
                  Nous apprécions votre partenariat continu.
                  </p>
                 </Grid>
                 
               </Grid>
               <br/><br/>
              
             </Grid>
             
           </Paper>
            <DownloadButton targetDivId="divToDownload" />
            </div>
          ) : (
            <React.Fragment>
              {getStepContent(activeStep)}
              <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                {activeStep !== 0 && (
                  <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                    Retour
                  </Button>
                )}


                  {activeStep === steps.length - 1 ? 
                  <Button
                  variant="contained"
                  onClick={setReceipt}
                  sx={{ mt: 3, ml: 1 }}
                  >
                  Place order
                  </Button> 
                  : 
                  <Button
                  variant="contained"
                  onClick={handleNext}
                  sx={{ mt: 3, ml: 1 }}
                  >
                  Suivant
                  </Button>
                  }
              </Box>

            </React.Fragment>
          )}
        </Paper>
      </Container>
    </React.Fragment>
  );
}
