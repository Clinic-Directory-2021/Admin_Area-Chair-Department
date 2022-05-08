import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
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
import Snackbar from '@mui/material/Snackbar';
import Slide from '@mui/material/Slide';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { AiFillDelete } from "react-icons/ai";
import { MdRestorePage } from "react-icons/md";



const columns = [

  { id: 'name', label: 'Date/Time', minWidth: 170 },
  { id: 'code', label: 'Subject', minWidth: 100 },
  {
    id: 'population',
    label: 'Section',
    minWidth: 100,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'size',
    label: 'No. of Attendees',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'density',
    label: 'Link of  MS Teams Recordings',
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


const Customers = () => {


  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  
  
  
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
      title: 'Burger',
    },
    {
      img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
      title: 'Coffee',
    },
    {
      img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
      title: 'Hats',
    },
    {
      img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
      title: 'Basketball',
    },
    {
      img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
      title: 'Tomato basil',
    },
    {
      img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
      title: 'Sea star',
    },
    {
      img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
      title: 'Bike',
    },
  ];

  

  return(
  <>


    <Head>
      <title>
        Archives
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
      
      Archives
      </Typography>

      
      <Box
      style={{
        display:'flex', 
        flexDirection:'row', 
        justifyContent:'flex-end',
        marginRight:85,
        marginBottom:-50
      }}>
          <Button 
          variant="outlined"
          color="success"
          style={{
            width:"175px", 
            height:"30px",    
            borderRadius:'0',
            border: '2px solid',
          }}
          ><text style={{color:'black'}}>1st Button</text></Button>
      &nbsp;&nbsp;&nbsp;
      <Button 
          variant="outlined"
          color="success"
          style={{
            width:"175px", 
            height:"30px",    
            borderRadius:'0',
            border: '2px solid',
          }}
          ><text style={{color:'black'}}>2nd Button</text></Button>


          </Box>






<Paper sx={{ width: '90%', overflow: 'hidden'}}
       style={{
         marginTop:'65px', 
         marginLeft:'80px',
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
    

    <Box
    sx={{display: 'flex',flexDirection: 'row', width:'100%'}}>
    <Box
      style={{
        padding:50,
        marginTop: '20px',
        marginLeft: '85px',
        width: '50%',
        height: 350,
        backgroundColor: '#fff',
        borderRadius:'10px',
        boxShadow:"0px 0 14px 8px rgba(0,0,0,0.25), \n\t\t\t0 10px 10px rgba(0,0,0,0.22)"

      }}
      component="main"
      autoComplete="off"
    >

      <Box style={{
        display:'flex', 
        flexDirection:'column',
        }}>
      <text>Date/Time:</text>
      &nbsp;
      <text>Subject:</text>
      &nbsp;
      <text>Section:</text>
      &nbsp;
      <text>List of Attendees:</text>
      &nbsp;
      <text>Link of MS Teams Recordings:</text>
      </Box>

    
      </Box>

  <Box
  style={{
    margin: 20,
    width: '39%',
    height: 500,
    boxShadow:"0 14px 28px rgba(0,0,0,0.25), \n\t\t\t0 10px 10px rgba(0,0,0,0.22)"
    }}
  >  
  <ImageList sx={{ width: '100%' , height: '100%' }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </Box>  
    </Box>

    
    <Box
    style={{marginTop:'-120px',marginLeft:'80px',marginBottom:'200px',}}>
    <Button 
    variant="contained" 
    style={{marginLeft:'10px', width:'10%', backgroundColor:'#d44444'}}
    >Delete
    &nbsp;
    <AiFillDelete />
    </Button>

    <Button
    variant="contained" 
    style={{marginLeft:'10px', width:'10%', backgroundColor: '#c4b84b'}}
    >Archive
    &nbsp;
    <MdRestorePage />
    </Button>

    </Box>
  </>
  
  )
};

Customers.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);




export default Customers;
