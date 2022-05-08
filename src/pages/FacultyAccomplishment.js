import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { customers } from '../__mocks__/customers';
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import {Typography} from '@mui/material';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';




const columns = [

  { id: 'name', label: 'Faculty Name', minWidth: 170 },
  { id: 'code', label: 'Week 1', minWidth: 100 },
  {
    id: 'population',
    label: 'Week 2',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Week 3',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Week 4',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
 
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263),
  createData('China', 'CN', 1403500365, 9596961),
  createData('Italy', 'IT', 60483973, 301340),
  createData('United States', 'US', 327167434, 9833520),
  createData('Canada', 'CA', 37602103, 9984670),
  createData('Australia', 'AU', 25475400, 7692024),
  createData('Germany', 'DE', 83019200, 357578),
  createData('Ireland', 'IE', 4857000, 70273),
  createData('Mexico', 'MX', 126577691, 1972550),
  createData('Japan', 'JP', 126317000, 377973),
  createData('France', 'FR', 67022000, 640679),
  createData('United Kingdom', 'GB', 67545757, 242495),
  createData('Russia', 'RU', 146793744, 17098246),
  createData('Nigeria', 'NG', 200962417, 923768),
  createData('Brazil', 'BR', 210147125, 8515767),
];


const FacultyAccomplishment = () => {


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  return(
 
  <>
  

  
    <Head>
      <title>
        Faculty Accomplishment
      </title>
    </Head>



    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    > <Typography
        sx={{ m: 1 }}
        variant="h4"
        style={{marginLeft:'80px'}}>
      
        Faculty Accomplishments
      </Typography>

      <Box
      style={{
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'flex-end',
        marginTop:40,
        marginRight:85,
        marginBottom:-50
      }}>
          <Button 
          variant="outlined"
          color="success"
          style={{
            width:"170px", 
            height:"30px",    
            borderRadius:'0',
            border: '2px solid',
          }}
          ><text style={{color:'black'}}>Edit Week</text></Button>
      &nbsp;&nbsp;&nbsp;
      <Button 
          variant="outlined"
          color="success"
          style={{
            width:"170px", 
            height:"30px",    
            borderRadius:'0',
            border: '2px solid',
          }}
          ><text style={{color:'black'}}>View Report</text></Button>

&nbsp;&nbsp;&nbsp;
      <Button 
          variant="outlined"
          color="success"
          style={{
            width:"170px", 
            height:"30px",    
            borderRadius:'0',
            border: '2px solid',
          }}
          ><text style={{color:'black'}}>Download Report</text></Button>
          &nbsp;&nbsp;&nbsp;
      <Button 
          variant="outlined"
          color="success"
          style={{
            width:"170px", 
            height:"30px",    
            borderRadius:'0',
            border: '2px solid',
          }}
          ><text style={{color:'black'}}>Select Week</text></Button>
          &nbsp;&nbsp;&nbsp;
      <Button 
          variant="outlined"
          color="success"
          style={{
            width:"170px", 
            height:"30px",    
            borderRadius:'0',
            border: '2px solid',
          }}
          ><text style={{color:'black'}}>Change Semester</text></Button>


          </Box>


<Paper sx={{ width: '90%', overflow: 'hidden'}}
       style={{marginTop:'65px', marginLeft:'80px',
       boxShadow:"0 14px 28px rgba(0,0,0,0.25), \n\t\t\t0 10px 10px rgba(0,0,0,0.22)"}}>
      <TableContainer sx={{ maxHeight: 500}}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth, color: '#fff', backgroundColor: '#438029', }}
                  
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} 
                        align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
       
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
    </Box>
  </>
  )
};

FacultyAccomplishment.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);




export default FacultyAccomplishment;
