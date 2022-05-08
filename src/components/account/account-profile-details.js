import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  Typography
} from '@mui/material';

export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Adrian',
    lastName: 'Magpayo',
    middleName:'Balite',
    suffix: 'B',
    department: 'Not Assigned Yet',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };
 
  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card style={{boxShadow:"0 14px 28px rgba(0,0,0,0.25), \n\t\t\t0 10px 10px rgba(0,0,0,0.22)"}}>
        <CardHeader
          style={{backgroundColor:'#438029', color:'#fff',}}
          subheader={<Typography sx={{color: 'white',}}>The information can be edited</Typography>}
          title="Profile"
        />
        <Divider />
        <CardContent >
          <Grid
          
            container
            spacing={3}
          >
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Please specify the first name"
                label="First name"
                name="firstName"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Middle Name"
                name="middlename"
                onChange={handleChange}
                required
                value={values.middleName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Last name"
                name="lastName"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Suffix"
                name="suffix"
                onChange={handleChange}
                required
                value={values.suffix}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Department"
                name="department"
                onChange={handleChange}
                required
                value={values.department}
                variant="outlined"
              />
            </Grid>
          

          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            style={{color:'#fff', backgroundColor:'#438029'}}
            variant="contained"
          >
            Update
          </Button>
        </Box>
      </Card>
    </form>
  );
};
