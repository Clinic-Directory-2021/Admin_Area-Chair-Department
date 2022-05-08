import Head from 'next/head';
import { Box, Container, Grid } from '@mui/material';
import { CustomerListResults } from '../components/customer/customer-list-results';
import { CustomerListToolbar } from '../components/customer/customer-list-toolbar';
import { AdminDashboardLayout } from '../components/dashboard-admin-layout';
import { customers } from '../__mocks__/customers';
import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';





import TableHead from '@mui/material/TableHead';


const RecentActivities = () => {

  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const columns = [
    { id: 'name', label: 'Name', minWidth: 100 },

  ];

  const options = ['Department: WMAD','Filter by Date', 'Alphabetical Order'];

  const [value, setValue] = React.useState(options[0]);
  const [inputValue, setInputValue] = React.useState('');









  function createData(name, code, population, size) {
    const density = population / size;
    return { name, code, population, size, density };
  }

  const rows = [
    createData('This is a sample activity'),
    createData('This is a sample activity'),
    createData('This is a sample activity'),
    createData('This is a sample activity'),
    createData('This is a sample activity'),
    createData('This is a sample activity'),
    createData('This is a sample activity'),
    createData('This is a sample activity'),
    createData('This is a sample activity'),
    createData('This is a sample activity'),
    createData('This is a sample activity'),
    createData('This is a sample activity'),
    createData('This is a sample activity'),
    createData('This is a sample activity'),
    createData('This is a sample activity'),
  ];
  
  
  
  return(
  <>
    <Head>
      <title>
        Recent Activities
      </title>
    </Head>

<Box style={{
  display:'flex', 
  flexDirection:'column'}}>
<Box style={{
  margin:'auto',
  marginLeft:'215px',
  marginTop:'40px',
  marginBottom:'20px'
}}>
    <div>


      {/*
      <div>{`value: ${value !== null ? `'${value}'` : 'null'}`}</div>
      <div>{`inputValue: '${inputValue}'`}</div> */}


      <br />
      <Autocomplete
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        inputValue={inputValue}
        onInputChange={(event, newInputValue) => {
          setInputValue(newInputValue);
        }}
        id="controllable-states-demo"
        options={options}
        sx={{width: 300,}}
        renderInput={(params) => <TextField {...params} label="" />}
      />
    </div>
  </Box>
    <Paper sx={{
      margin:'auto',
      width: '70%', 
      overflow: 'hidden',
      boxShadow:"0 14px 28px rgba(0,0,0,0.25), \n\t\t\t0 10px 10px rgba(0,0,0,0.10)" }}>
      
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth,
                    backgroundColor:'#438029', 
                    color:'#fff' }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody >
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
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
  );
}


RecentActivities.getLayout = (page) => (
  <AdminDashboardLayout>
  {page}
</AdminDashboardLayout>
);




export default RecentActivities;
