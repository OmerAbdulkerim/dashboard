import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { experimentalStyled } from '@mui/material';
import DashboardNavbar from '../components/navbar/MobileDashboardNavbar';
import DashboardSidebar from './DashboardSidebar';
import { isMobile } from 'react-device-detect';

const DashboardLayoutRoot = experimentalStyled('div')(
  ({ theme }) => ({
      background: theme.palette.background.dashboardLayout,
    display: 'flex',
    height: '100%',
    overflow: 'hidden',
    width: '100%'
  })
);

const DashboardLayoutWrapper = experimentalStyled('div')(
  ({ theme }) => ({
    display: 'flex',
    flex: '1 1 auto',
    overflow: 'hidden',
    [theme.breakpoints.up('lg')]: {
      paddingLeft: '16vw'
    }
  })
);

const DashboardLayoutContainer = experimentalStyled('div')({
  display: 'flex',
  flex: '1 1 auto',
  overflow: 'hidden'
});

const DashboardLayoutContent = experimentalStyled('div')({
  flex: '1 1 auto',
  height: '100%',
  overflow: 'auto'
});

const DashboardLayout = () => {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);

  return (
    <DashboardLayoutRoot id="rootLayout">
      <DashboardNavbar id="navbarInsideRootLayout" onMobileNavOpen={() => setMobileNavOpen(true)} />
      <DashboardSidebar
        id="sidebarInsiderRoot"
        onMobileClose={() => setMobileNavOpen(false)}
        openMobile={isMobileNavOpen}
      />
      <DashboardLayoutWrapper id="wrapperInsideRoot" sx={{paddingTop: isMobile || width < 1200 ? '10vh' : '5vh'}}>
        <DashboardLayoutContainer id="containerInsideWrapper">
          <DashboardLayoutContent id="contentInsideContainer">
            <Outlet />
          </DashboardLayoutContent>
        </DashboardLayoutContainer>
      </DashboardLayoutWrapper>
    </DashboardLayoutRoot>
  );
};

export default DashboardLayout;
