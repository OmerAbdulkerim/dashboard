import { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import {
  Box,
  Drawer,
  Hidden,
  List,
} from '@mui/material';
import {
  BarChart as BarChartIcon,
  Lock as LockIcon,
  Settings as SettingsIcon,
  User as UserIcon,
  Users as UsersIcon,
} from 'react-feather';
import AndroidIcon from '@mui/icons-material/Android';
import WarningIcon from '@mui/icons-material/Warning';
import Logo from '../components/Logo'
import NavItem from '../components/navbar/NavItem';

const items = [
  {
    href: '/app/dashboard',
    icon: BarChartIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/commands',
    icon: AndroidIcon,
    title: 'Commands'
  },
  {
    href: '/app/usernames/banned',
    icon: WarningIcon,
    title: 'Banned Usernames'
  },
  {
    href: '/app/logs',
    icon: UsersIcon,
    title: 'Audit Logs'
  },
  {
    href: '/app/account',
    icon: UserIcon,
    title: 'Account'
  },
  {
    href: '/app/settings',
    icon: SettingsIcon,
    title: 'Settings'
  },
  {
    href: '/login',
    icon: LockIcon,
    title: 'Login'
  },
];

const DashboardSidebar = ({ onMobileClose, openMobile }) => {
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
  }, [location.pathname]);

  const content = (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        border: 'none'
      }}
    >
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          p: 2,
          border:'none'
        }}
      >
        <RouterLink to="/">
          <Logo />
        </RouterLink>
      </Box>
      <Box sx={{ p: 2, border:'none'}}>
        <List>
          {items.map((item) => (
            <NavItem
              href={item.href}
              key={item.title}
              title={item.title}
              icon={item.icon}
            />
          ))}
        </List>
      </Box>
    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
          PaperProps={{
            sx: {
              width: isMobile ? '65vw' : '50vw',
              border:'none',
              paddingTop: '20px',
              background: 'linear-gradient(to top, #aa076b, #61045f)'
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden lgDown>
        <Drawer
          anchor="left"
          open
          variant="persistent"
          PaperProps={{
            sx: {
              width: '16vw',
              /*top: 64,
              height: 'calc(100% - 64px)',*/
              background: `linear-gradient(to top, #aa076b, #61045f)`,
              border:'none',
              padding: '16px',
            }
          }}
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

DashboardSidebar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

DashboardSidebar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default DashboardSidebar;
