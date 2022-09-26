import { Helmet } from 'react-helmet';
import { Box, Container } from '@mui/material';
import BannedUsernamesList from '../components/listComponents/BannedUsernamesList';
import SearchToolbar from '../components/SearchToolbar';
import usernames from '../_mock_data_/usernames';
import bg from '../cardBG.png';

const BannedUsernames = () => (
  <>
    <Helmet>
      <title>Banned Usernames | Clubot</title>
    </Helmet>
    <Box
      sx={{
        background: `url(${bg}) no-repeat fixed center`,
        minHeight: '100%',
        py: 3,
        marginTop: '1vh'
      }}
    >
      <Container maxWidth={false}>
        <SearchToolbar />
        <Box sx={{ pt: 3}}>
          <BannedUsernamesList usernames={usernames} />
        </Box>
      </Container>
    </Box>
  </>
);

export default BannedUsernames;
