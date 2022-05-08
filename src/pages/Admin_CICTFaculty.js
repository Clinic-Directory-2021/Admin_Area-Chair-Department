import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { AdminDashboardLayout } from '../components/dashboard-admin-layout';
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
import Avatar from '@mui/material/Avatar';
import { BsFillPencilFill } from "react-icons/bs";




const columns = [
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'code', label: 'Designation', minWidth: 100 },
  {
    id: 'population',
    label: 'Department',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
 
];

function createData(name, code, population, size, ID) {
  const density = population / size;
  return { name, code, population, size, density, ID };
}

const rows = [
  createData('India', 'IN', 1324171354, 3287263, 0),
  createData('China', 'CN', 1403500365, 9596961, 1),
  createData('Italy', 'IT', 60483973, 301340, 2),
  createData('United States', 'US', 327167434, 9833520, 3),
  createData('Canada', 'CA', 37602103, 9984670 , 4),
  createData('Australia', 'AU', 25475400, 7692024, 5),
  createData('Germany', 'DE', 83019200, 357578, 6),
  createData('Ireland', 'IE', 4857000, 70273, 7),
  createData('Mexico', 'MX', 126577691, 1972550, 8),
  createData('Japan', 'JP', 126317000, 377973, 9),
  createData('France', 'FR', 67022000, 640679, 10),
  createData('United Kingdom', 'GB', 67545757, 242495, 11),
  createData('Russia', 'RU', 146793744, 17098246, 12),
  createData('Nigeria', 'NG', 200962417, 923768, 13),
  createData('Brazil', 'BR', 210147125, 8515767, 14),
];


const Department = () => {
  const [data, setData] = React.useState('')

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const SetData = (data) =>{
    rows
    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
    .map((row) =>{
      if(row.ID == data){
        setData(row.name)
      }
    })

  }
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
        CICT Faculty
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
        style={{marginLeft:'50px', marginTop:'-20px', marginBottom:'30px'}}>
      
        CICT Faculty
      </Typography>


<Box
sx={{display: 'flex',flexDirection: 'row', width:'100%'}}
>
<Paper sx={{ width: '70%', overflow: 'hidden'}}
       style={{marginTop:'10px', marginLeft:'50px',
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
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code} onClick={()=> SetData(row.ID)}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} 
                        align={column.align}
                        >
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
    
    <Box
    style={{
    marginTop:10,
    marginLeft:10,
    marginRight:10,
    width: '30%',
    height: 500,
    backgroundColor: '#fff',
    display:'flex',
    flexDirection:'column',
    boxShadow:"0 14px 28px rgba(0,0,0,0.25), \n\t\t\t0 10px 10px rgba(0,0,0,0.22)"
    }}
    >

   

    <Box sx={{m: 1, paddingTop:1, margin:'20px'}}>

      <Typography
        variant="h6"
        style={{marginBottom:'2px'}}>
        Name:
      </Typography>
      
      <TextField
      sx={{width:'100%', marginBottom:2}}
        color="success" 
        value={data}
        focused
        InputProps={{ endAdornment: ( <BsFillPencilFill/> ),}}


      />
      
      <Typography
        variant="h6"
        style={{marginBottom:'2px'}}>
        Designation:
      </Typography>
      <TextField
        sx={{width:'100%', marginBottom:2 }}
        color="success" 
        focused
        InputProps={{ endAdornment: ( <BsFillPencilFill/> ),}} 

        />
        
      <Typography
        variant="h6"
        style={{marginBottom:'2px'}}>
        Department:
      </Typography>
      <TextField
        sx={{width:'100%', marginBottom:2}}
        color="success" 
        focused
        InputProps={{ endAdornment: ( <BsFillPencilFill/> ),}} 

        />

      <Typography
        variant="h6"
        style={{marginBottom:'2px'}}>
        Status:
      </Typography>
      <TextField
        sx={{width:'100%', marginBottom:3}}
        color="success" 
        focused
        InputProps={{ endAdornment: ( <BsFillPencilFill/> ),}} 

        />
    <Box style={{display:'flex', justifyContent:'flex-end'}}>
    <Button 
    style={{color:'#fff', backgroundColor:'#438029',width:'150px',height:'50px'}}
    variant="contained"
    >Update</Button>
    </Box>

      
        
      <br></br>
    </Box>
    </Box>
    
    </Box>
    
  </Box>
    
    
  </>
  )
};

Department.getLayout = (page) => (
  <AdminDashboardLayout>
    {page}
  </AdminDashboardLayout>
);




export default Department;
