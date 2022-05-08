import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from '@emotion/styled';
import { AppBar, Avatar, Badge, Box, IconButton, Popper, Toolbar, Tooltip, Typography, } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Bell as BellIcon } from '../icons/bell';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import {useRouter} from 'next/router'







const DashboardNavbarRoot = styled(AppBar)(({ theme }) => ({
  backgroundColor:'#438029',
  boxShadow: theme.shadows[3]
}));


export const AdminDashboardNavbar = (props) => {
  const { onSidebarOpen, ...other } = props;
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));
  const router = useRouter();



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logOut = () => {
    router.push("/");
    setOpen(false);
  };
  const notif= () => {
    router.push("/Admin_Notifications");
    setOpen(false);
  };

  
  return (
    <>

    <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle 
          style={{marginTop: 20}}
          id="responsive-dialog-title">
          {"Are you sure you want to logout?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
           
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={logOut} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>

      <DashboardNavbarRoot
        sx={{
          left: {
            lg: 280
          },
          width: {
            lg: 'calc(100% - 280px)'
          }
        }}
        {...other}>
        <Toolbar
          disableGutters
          sx={{
            minHeight: 64,
            left: 0,
            px: 2
          }}
        >
          <IconButton
            onClick={onSidebarOpen}
            sx={{
              display: {
                color:"#469E20",
                xs: 'inline-flex',
                lg: 'none'
              }
            }}
          >
            <MenuIcon fontSize="medium" />
          </IconButton>
          
          <Box sx={{ flexGrow: 1 }} />


          <Button onClick={notif} autoFocus>
          <Tooltip title="Notifications">
        
            <IconButton style={{color:'white'}}>
              <Badge
                badgeContent={4}
                color="warning"
                variant="dot"
              >
                <BellIcon fontSize="small" />
              </Badge>
            </IconButton>
          </Tooltip>
       </Button>
     
          <Button>
          <Typography
          onClick={handleClickOpen}
          style={{color:'#fff'}}
          variant="h6"
          >
          Logout
          </Typography>
          </Button>
        </Toolbar>
        
      </DashboardNavbarRoot>
    </>
  );
};

AdminDashboardNavbar.propTypes = {
  onSidebarOpen: PropTypes.func
};
