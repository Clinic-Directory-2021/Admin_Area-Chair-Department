import { useEffect } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { Box, Button, Divider, Drawer,useMediaQuery } from '@mui/material';
import { Lock as LockIcon } from '../icons/lock';
import { User as UserIcon } from '../icons/user';
import { NavItem } from './nav-item';
import { HiArchive } from "react-icons/hi";
import { RiMedal2Fill } from "react-icons/ri";
import { AiFillStar } from "react-icons/ai";
import { BsPeopleFill } from "react-icons/bs";

const items = [
  {
    href: '/account',
    icon: (<UserIcon fontSize="small" />),
    title: 'Profile'
  },
  {
    href: '/ListofAccomplishment',
    icon: (<RiMedal2Fill fontSize="small" />),
    title: 'List of Accomplishment'
  },
  {
    href: '/FacultyAccomplishment',
    icon: (<AiFillStar fontSize="small" />),
    title: 'Faculty Accomplishment'
  },
  {
    href: '/Department',
    icon: (<BsPeopleFill fontSize="small" />),
    title: 'Department'
  },
  {
    href: '/settingsV2',
    icon: (<LockIcon fontSize="small" />),
    title: 'Settings'
  },
  {
    href: '/Archives',
    icon: (<HiArchive fontSize="small"/>),
    title: 'Archive'
  }, 
];

export const DashboardSidebar = (props) => {
  const { open, onClose } = props;
  const router = useRouter();
  const lgUp = useMediaQuery((theme) => theme.breakpoints.up('lg'), {
    defaultMatches: true,
    noSsr: false
  });

  useEffect(
    () => {
      if (!router.isReady) {
        return;
      }

      if (open) {
        onClose?.();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.asPath]
  );

  const content = (
    <>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
        }}
      >
        <div>
        </div>
        <Divider
          sx={{
            borderColor: 'neutral.900',
            my: 1
          }}
        />
        <Box sx={{ flexGrow: 1 }}>
          {items.map((item) => (
            <NavItem
              key={item.title}
              icon={item.icon}
              href={item.href}
              title={item.title}
            />
          ))}
        </Box>
        <Divider sx={{ borderColor: '#2D3748' }} />
      </Box>
    </>
  );
  if (lgUp) {
    return (
      <Drawer
        anchor="left"
        open
        PaperProps={{
          sx: {
            backgroundColor: 'neutral.900',
            color: '#FFFFFF',
            width: 280
          }
        }}
        variant="permanent"
      >
        {content}
      </Drawer>
    );
  }

  return (
    <Drawer
      anchor="left"
      onClose={onClose}
      open={open}
      PaperProps={{
        sx: {
          backgroundColor: 'neutral.900',
          color: '#FFFFFF',
          width: 280
        }
      }}
      sx={{ zIndex: (theme) => theme.zIndex.appBar + 100 }}
      variant="temporary"
    >
      {content}
    </Drawer>
  );
};

DashboardSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool
};
