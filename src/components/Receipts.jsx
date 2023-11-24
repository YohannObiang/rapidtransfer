import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';

import DropReceipt from './DropReceipt'

const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'ISO\u00a0Code', minWidth: 100 },
  {
    id: 'population',
    label: 'Population',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Size\u00a0(km\u00b2)',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Density',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}


export default function StickyHeadTable({retraits}) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [receipt, setReceipt] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Paper sx={{ width: '100%', overflow: 'hidden' }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              
                <TableCell
                >
                  No.
                </TableCell>
                <TableCell
                >
                  Date & heure
                </TableCell>
                <TableCell
                >
                  Somme envoyee
                </TableCell>
                <TableCell
                >
                  Numero d'envoi
                </TableCell>
                <TableCell
                >
                  Somme recue
                </TableCell>
                <TableCell
                >
                  No. de Compte/E-wallet
                </TableCell>
                <TableCell
                >
                  Nom
                </TableCell>
                <TableCell
                >
                  Banque
                </TableCell>
                
           
            </TableRow>
          </TableHead>
          <TableBody>
            {retraits.map((row) => {
                let dateString = String(row.date);

                // Convertir la chaîne en objet Date
                let dateObject = new Date(dateString);
                
                // Extraire les composants de la date
                let jour = dateObject.getUTCDate().toString().padStart(2, '0');
                let mois = (dateObject.getUTCMonth() + 1).toString().padStart(2, '0'); // Les mois commencent à 0, donc on ajoute 1
                let annee = dateObject.getUTCFullYear();
                let heures = (dateObject.getUTCHours()+2).toString().padStart(2, '0');
                let minutes = dateObject.getUTCMinutes().toString().padStart(2, '0');
                let secondes = dateObject.getUTCSeconds().toString().padStart(2, '0');
                
                // Construire la chaîne de date au format souhaité
                let dateFormatee = `${jour}-${mois}-${annee} à ${heures}:${minutes}:${secondes}`;
                return (
                        <DropReceipt
                        row={row}
                        handleClickOpen={handleClickOpen}
                        dateFormatee={dateFormatee}
                        handleClose={handleClose}
                        open={open}
                        setReceipt={setReceipt}
                        retraits={retraits}
                        receipt={receipt}
                        />
                  
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
     
    </Paper>
  );
}
