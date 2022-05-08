import Head from 'next/head';
import { DashboardLayout } from '../components/dashboard-layout';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import FolderIcon from '@mui/icons-material/Folder';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    }),
  );
}

const Demo = styled('div')(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));


const WeeklyFacultyAccomplishment = () => {

  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

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
        style={{marginLeft:'120px',marginBottom:'50px'}}>
      
        Notifications
      </Typography>

    <Box style={{
        display:'flex',
        marginLeft:'120px'}}>
      <FormGroup row>
        <FormControlLabel
          control={
            <Checkbox
              checked={dense}
              onChange={(event) => setDense(event.target.checked)}
            />
          }
          label="Enable dense"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={secondary}
              onChange={(event) => setSecondary(event.target.checked)}
            />
          }
          label="Enable secondary text"
        />
      </FormGroup>
      </Box>
    <Box style={{
      marginBottom:20,
      marginTop:-40,
      marginRight:228,
      display:'flex', 
      justifyContent:'flex-end'}}>
      <Button 
          variant="outlined"
          color="success"
          style={{
            
            width:"170px", 
            height:"30px",    
            borderRadius:'0',
            border: '2px solid',
          }}
          ><text style={{color:'black'}}>Filter by date</text></Button>   
</Box>
      

    <Box style={{
      marginLeft:120,
      }}>
      <Grid 
      container spacing={2}>
        <Grid item xs={20} md={10}>
          <Demo style={{boxShadow:"0 14px 28px rgba(0,0,0,0.25), \n\t\t\t0 10px 10px rgba(0,0,0,0.22)"}}>
            <List dense={dense}>
              {generate(
                <ListItem
                  secondaryAction={
                    <IconButton 
                    style={{color:'#d44444'}}
                    edge="end" 
                    aria-label="delete">
                      <DeleteIcon />
                    </IconButton>
                  }
                >
                  <ListItemText
                    primary="Notification here"
                    secondary={secondary ? 'This is sample of notification of Weekly faculty accomplishment report' : null}
                  />
                </ListItem>,
              )}
            </List>
          </Demo>
        </Grid>
      </Grid>
    </Box>
</Box>


  </>
  )
} ;

WeeklyFacultyAccomplishment.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);




export default WeeklyFacultyAccomplishment;
