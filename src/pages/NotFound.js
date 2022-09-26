import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Typography
} from '@mui/material';
import ErrorIcon from '../icons/error.svg';
import bg from '../cardBG.png'

const Error = () => (
  <>
    <Helmet>
      <title>404 | Not Found</title>
    </Helmet>
    <Box
      sx={{
        background: `url(${bg}) fixed no-repeat center`,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'center'
      }}
    >
      <Container maxWidth="md">
        <Typography
          align="center"
          color="textPrimary"
          variant="h1"
        >
          PAGE NOT FOUND
        </Typography>
        <Typography
          align="center"
          color="textPrimary"
          variant="subtitle2"
        >
          Oops! Looks like you tried accessing something that doesn't exist. Use the navigation to return back!
        </Typography>
        <Box sx={{ textAlign: 'center' }}>
          <img
            alt="Under development"
            src={ErrorIcon}
            style={{
              marginTop: 50,
              display: 'inline-block',
              maxWidth: '100%',
              width: 560
            }}
          />
        </Box>
      </Container>
    </Box>
  </>
);

export default Error;
