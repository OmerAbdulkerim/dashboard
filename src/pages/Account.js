import { Helmet } from 'react-helmet';
import { Box, Container } from '@mui/material';
import AccountComp from '../components/account/AccountComp';
import bg from '../cardBG.png';

const Account = () => (
  <>
    <Helmet>
      <title>Account | Clubot</title>
    </Helmet>
    <Box
      sx={{
        background: `url(${bg}) no-repeat fixed center`,
        minHeight: '100%',
        py: 3
      }}
    >
      <Container maxWidth={false}>
        <AccountComp/>
      </Container>
    </Box>
  </>
);

export default Account;
