import Head from 'next/head';
import { AdminDashboardLayout } from '../components/dashboard-admin-layout';
import * as React from 'react';
import {Typography, Box} from '@mui/material';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import TextField from '@mui/material/TextField';
import Slide from '@mui/material/Slide';
import { ImPlus } from "react-icons/im";

import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { width } from '@mui/system';





const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const WeeklyFacultyAccomplishment = () => {

  const [open, setOpen,] = React.useState(false);

  const [open1, setOpen1,] = React.useState(false);
  const [open2, setOpen2,] = React.useState(false);
  const [open3, setOpen3,] = React.useState(false);

  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  const handleClick1 = () => {
    setOpen1(!open1);
  };
  const handleClick2 = () => {
    setOpen2(!open2);
  };
  const handleClick3 = () => {
    setOpen3(!open3);
  };
  



  return(
  <>



    <Head>
      <title>
        Faculty Accomplishment
      </title>
    </Head>

  <Box
  style={{
    margin:'auto',
    marginTop:50,
    width:'100%'

  }}
  >
      <Typography
        sx={{ m: 1 }}
        variant="h4"
        style={{margin:'auto', marginLeft:'150px', marginBottom:50}}>
        Weekly Faculty Report
      </Typography>

          
  <div>
      <Button 
      style={{
        margin:'auto',
        marginLeft:'150px'
        }}
      variant="outlined" 
      
      onClick={handleClickOpen}>
     <ImPlus style={{marginTop:'-2px', marginRight:15}}/>
        Add Semester
      </Button>

      
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <Box style={{margin:'auto'}}>
        <DialogTitle>{"Add Semester"}</DialogTitle>
        </Box>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
          <div>

<FormControl>
<FormLabel id="demo-controlled-radio-buttons-group"></FormLabel>
<RadioGroup
aria-labelledby="demo-controlled-radio-buttons-group"
name="controlled-radio-buttons-group"

>
<FormControlLabel value="female" control={<Radio />} label="1st Semester" />
<FormControlLabel value="male" control={<Radio />} label="2nd Semester" />
</RadioGroup>

</FormControl>
<TextField  

style={{marginTop:15}}
label="Academic Year" 
color="secondary" 
focused />
</div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
        <Box style={{margin:'auto'}}>
          <Button onClick={handleClose}>Submit</Button>
          <Button onClick={handleClose}>Cancel</Button>
          </Box>
        </DialogActions>
      </Dialog>
    </div>

    <Box style={{
      width:'50%',
      margin:'auto',
      marginTop:50,
      boxShadow:"0 14px 28px rgba(0,0,0,0.25), \n\t\t\t0 10px 10px rgba(0,0,0,0.10)"
    }}>
    <List
      sx={{ 
        bgcolor: 'background.paper',
         }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >

      <ListItemButton 
      onClick={handleClick1}>
        <ListItemText primary="1st Semester 2021-2022 #1" />
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="NUMBER # 1" />
          </ListItemButton>
        </List>
      </Collapse>

      </List>

      <List
      sx={{ 
        bgcolor: 'background.paper',
         }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >


      <ListItemButton onClick={handleClick2}>
        <ListItemText primary="1st Semester 2021-2022 #2" />
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="NUMBER # 2" />
          </ListItemButton>
        </List>
      </Collapse>


      </List>


      <List
      sx={{ 
        bgcolor: 'background.paper',
         }}
      component="nav"
      aria-labelledby="nested-list-subheader"
    >

        

      <ListItemButton onClick={handleClick3}>
        <ListItemText primary="1st Semester 2021-2022 #3" />
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>

      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemText primary="NUMBER # 3" />
          </ListItemButton>
        </List>
      </Collapse>

      </List>


</Box>
</Box>
  </>
  )
} ;

WeeklyFacultyAccomplishment.getLayout = (page) => (
  <AdminDashboardLayout>
    {page}
  </AdminDashboardLayout>
);




export default WeeklyFacultyAccomplishment;
