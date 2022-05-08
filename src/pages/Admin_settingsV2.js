import Head from 'next/head';
import { Box, Container, Typography } from '@mui/material';
import { AdminDashboardLayout } from '../components/dashboard-admin-layout';
import { SettingsNotifications } from '../components/settings/settings-notifications';
import { SettingsPassword } from '../components/settings/settings-password';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Link from '@mui/material/Link';




const Settings = () => (
  <>
    <Head>
      <title>
        Settings | Material Kit
      </title>
    </Head>
      <Typography
        sx={{ m: 1 }}
        style={{marginLeft:'100px', marginTop:'50px'}}
        variant="h4"
        >
      
        Edit Account
      </Typography>
    <Box
      style={{
        padding:50,
        marginTop: '20px',
        marginLeft: '100px',
        width: '70%',
        height: 500,
        backgroundColor: '#fff',
        borderRadius:'10px',
        boxShadow:"0 14px 28px rgba(0,0,0,0.25), \n\t\t\t0 10px 10px rgba(0,0,0,0.22)"
      }}
      component="main"
      autoComplete="off"
    >

    <Typography
        sx={{ m: 1 }}
        variant="h6"
        style={{marginLeft:'auto'}}>
        Username:
      </Typography>
    <TextField
      
        sx={{width:'100%', marginBottom:3}}
        color="success" 
        focused />

      <Typography
        sx={{ m: 1 }}
        variant="h6"
        style={{marginLeft:'auto'}}>
        Email Address:
      </Typography>


    <TextField 
        sx={{width:'100%',marginBottom:3}}
        color="success" 
        focused />

    <Link 
          href="/EditPassword" 
          underline="none">
      {'Edit your password here'}
    </Link>

    <Box
  
    sx={{
      marginLeft:'auto',
      marginRight:'50px',
      marginTop:'80px', 
      backgroundColor:'', 
      height:'auto',
      width:'100px', 
      
      }}>
  
      



    <Button 
    style={{color:'#fff', backgroundColor:'#438029',width:'150px',height:'50px',}}
    variant="contained"
    >Update</Button>
    </Box>


    </Box>
  </>
);

Settings.getLayout = (page) => (
  <AdminDashboardLayout>
    {page}
  </AdminDashboardLayout>
);

export default Settings;
