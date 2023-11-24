import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Review from './Review';
import html2canvas from 'html2canvas';
import DownloadButton from './DownloadBtn';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import logo from "../logoM-removebg-preview.png"
import Paper from '@mui/material/Paper';


export default function AlertDialog({handleClickOpen,handleClose,row,
    dateFormatee,
    open,
    setReceipt,
    retraits,
    receipt

}) {

    const Borrow=(id_retrait)=>{
        const choosenOne=retraits.filter((element,index)=>{
          return element.id_retrait === id_retrait});
          console.log(choosenOne[0])
          setReceipt(choosenOne[0])
          handleClickOpen()
    
    
      };
  return (
    <React.Fragment>

      <TableRow hover role="checkbox" tabIndex={-1} key={row.id_retrait}  onClick={()=>{Borrow(row.id_retrait)}}>
                    
                        <TableCell align='left'>
                          {row.id_retrait}
                        </TableCell>
                        <TableCell align='left'>
                          {dateFormatee}
                        </TableCell>
                        
                        <TableCell align='left'>
                         {row.tosend} FCFA
                        </TableCell>
                        <TableCell align='left'>
                         {row.airtelmoney}
                        </TableCell>
                        <TableCell align='left'>
                          R {row.toreceive} 
                        </TableCell>
                        <TableCell align='left'>
                          {row.rib} 
                        </TableCell>
                        <TableCell align='left'>
                         {row.nom}
                        </TableCell>
                        <TableCell align='left'>
                         {row.bank}
                        </TableCell>
                        
                        
                  </TableRow>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >

        <DialogContent>
        <div>
             <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }} id="divToDownload">

            <div style={{display:'flex', alignItems:'center'}}>
            <img src={logo} alt="" style={{height:'75px', margin:'auto'}}/>
            </div>
            <br />
             <Typography variant="h7" gutterBottom style={{textAlign:'left',fontFamily:'monospace'}}>
             Reçu No.{receipt.id_retrait} <br/>
             
             </Typography>
             <p style={{textAlign:'left', fontSize: '10px',fontFamily:'monospace'}}>Fait le {dateFormatee}</p>
             
             <Grid container spacing={2} style={{display:'flex', flexDirection:'column'}}>
               <Grid item xs={12} sm={12}>
                 <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                   <strong style={{fontFamily:'monospace'}}>Informations de l'émeteur</strong><br /><br />
                 </Typography>
                 <Typography gutterBottom  style={{fontFamily:'monospace'}}>
                   Numéro d'envoie: <br /><strong>{receipt.airtelmoney}</strong><br /><br />
                   Somme envoyée: <br /><strong>{receipt.tosend} FCFA</strong>
       
                 </Typography>
               </Grid>
               <Grid item container direction="column" xs={12} sm={12}>
                 <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                 <strong  style={{fontFamily:'monospace'}}>Informations du destinataire</strong> <br /><br />
                 </Typography>
                 <Grid container>
                 <Typography gutterBottom  style={{fontFamily:'monospace'}}>
                   Nom du destinataire: <br /><strong>{receipt.nom}</strong><br /><br />
                   Banque: <br /><strong>{receipt.bank}</strong><br /><br />
                   No. de compte/E-wallet: <br /><strong>{receipt.rib}</strong><br /><br />
                   Somme reçue: <br /><strong>R {receipt.toreceive}</strong>
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
            
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fermer</Button>

          <DownloadButton targetDivId="divToDownload" />
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}