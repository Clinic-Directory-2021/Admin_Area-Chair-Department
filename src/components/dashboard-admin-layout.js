import { useState } from 'react';
import { Box, Button } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AdminDashboardNavbar } from './dashboard-admin-navbar';
import { AdminDashboardSidebar } from './dashboard-admin-sidebar';

const DashboardLayoutRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flex: '1 1 auto',
  maxWidth: '100%',
  paddingTop: 64,
  [theme.breakpoints.up('lg')]: {
    paddingLeft: 280
  }
}));

export const AdminDashboardLayout = (props) => {
  const { children } = props;
  const [isSidebarOpen, setSidebarOpen] = useState(true);


  return (
    <>
      <DashboardLayoutRoot>
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            flexDirection: 'column',
            width: '100%'
          }}
        >
          {children}
        </Box>
      </DashboardLayoutRoot>
      <AdminDashboardNavbar onSidebarOpen={() => setSidebarOpen(true)} />
        

        <AdminDashboardSidebar
        onClose={() => setSidebarOpen(false)}
        open={isSidebarOpen}
      />
    </>
  );
};
