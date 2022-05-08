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
        variant="h4"
        style={{marginLeft:'100px', marginTop:'50px'}}>
      
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
        style={{marginLeft:'auto',}}>
        Password:
      </Typography>

      <TextField
        sx={{width:'100%'}}
        color="success" 
        focused />
        <Typography
        sx={{ m: 1 }}
        variant="h6"
        style={{marginLeft:'auto'}}>
        New Password:
      </Typography>

      <TextField
        sx={{width:'100%', marginBottom:2}}
        color="success" 
        focused />
        <Typography
        
        variant="h6"
        style={{marginLeft:'auto'}}>
        Confirm Password:
      </Typography>

      <TextField
        sx={{width:'100%', marginBottom:1}}
        color="success" 
        focused />

        <Link 

          href="/settingsV2" 
          underline="none">
        {'Back'}
        </Link>
        
       

    <Box
    sx={{
      marginLeft:'auto',
      marginRight:'50px',
      marginTop:'35px', 
      backgroundColor:'', 
      height:'auto',
      width:'100px', 
      flexDirection:'row'
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
