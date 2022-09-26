import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { AppBar, Toolbar } from '@mui/material';
import { isMobile } from 'react-device-detect';
import Logo from '.././Logo';
import bg from '../../cardBG.png'

const MainNavbar = (props) => {
  const [width, setWidth] = useState(window.innerWidth);

  return(
  <AppBar
    elevation={0}
    {...props}
  >
    <Toolbar sx={{ 
      height: 64, 
      background: `url(${bg}) fixed no-repeat center`, 
      paddingTop: '20px', 
      justifyContent: isMobile || width < 1200 ? 'center' : 'none',
      paddingY: isMobile || width < 1200 ? 7 : 0
      }}>
      <RouterLink to="/">
        <Logo />
      </RouterLink>
    </Toolbar>
  </AppBar>
)};

export default MainNavbar;
