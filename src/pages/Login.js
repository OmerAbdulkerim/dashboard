import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  Box,
  Container,
  Grid,
  TextField,
  Typography
} from '@mui/material';
import styled from 'styled-components'
const Button = styled.button``;

const Login = () => {
  const navigate = useNavigate();

  return (
    <>
      <Helmet>
        <title>Login | CluBot Dashboard</title>
      </Helmet>
      <Box
        sx={{
          background: `linear-gradient(0deg, rgba(38,34,60,1) 0%, rgba(28,30,41,1) 100%)`,
          display: 'flex',
          flexDirection: 'column',
          height: '100%',
          justifyContent: 'center'
        }}
      >
        <Container maxWidth="sm"
        sx={{background:'rgba(135, 119, 127, 0.1)', mixBlendMode: 'darken, luminosity', paddingY: 7, borderRadius: 7}}
        >
          <Formik
            initialValues={{
              email: 'test@test.io',
              password: 'Password123'
            }}
            validationSchema={Yup.object().shape({
              email: Yup.string().email('Must be a valid email').max(255).required('Email is required'),
              password: Yup.string().max(255).required('Password is required')
            })}
            onSubmit={() => {
              navigate('/app/dashboard', { replace: true });
            }}
          >
            {({
              errors,
              handleBlur,
              handleChange,
              handleSubmit,
              isSubmitting,
              touched,
              values
            }) => (
              <form onSubmit={handleSubmit}>
                <Box sx={{ mb: 3 }}>
                  <Typography
                    color="white"
                    variant="h2"
                  >
                    Sign in
                  </Typography>
                  <Typography
                    color="textSecondary"
                    gutterBottom
                    variant="body2"
                  >
                    Unlock CluBot's full potential
                  </Typography>
                </Box>
                <Grid
                  container
                  spacing={3}
                >     
                  <Grid
                    item
                    xs={12}
                  >
                    <Button
                      onClick={handleSubmit}
                      style={{background: 'rgba(204, 0, 112, 0.2)',
                      borderRadius: 3,
                      color: '#ff50b8',
                      border: '2px solid #ff50b8',
                      width: '100%',
                      height: 48,
                      padding: '0 30px',}}
                    >
                      <span style={{fontWeight: 'bold'}}>Login with Discord</span>
                    </Button>
                  </Grid>
                </Grid>
                <Box
                  sx={{
                    pb: 1,
                    pt: 3
                  }}
                >
                  <Typography
                    align="center"
                    color="textSecondary"
                    variant="body1"
                  >
                    or login with email address
                  </Typography>
                </Box>
                <TextField
                  error={Boolean(touched.email && errors.email)}
                  fullWidth
                  id="outlined-basic"
                  helperText={touched.email && errors.email}
                  label="Email Address"
                  margin="normal"
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  type="email"
                  value={values.email}
                  variant="outlined"
                />
                <TextField
                  error={Boolean(touched.password && errors.password)}
                  fullWidth
                  helperText={touched.password && errors.password}
                  label="Password"
                  margin="normal"
                  name="password"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  color="primary"
                  type="password"
                  value={values.password}
                  variant="outlined"
                  style={{color:'white'}}
                />
                <Box sx={{ py: 2 }}>
                  <Button
                    disabled={isSubmitting}
                    type="submit"
                    style={{background: 'rgba(204, 0, 112, 0.2)',
                      borderRadius: 3,
                      color: '#ff50b8',
                      border: '2px solid #ff50b8',
                      width: '100%',
                      height: 48,
                      padding: '0 30px',}}
                    >
                      <span style={{fontWeight: 'bold'}}>Sign in now</span>
                  </Button>
                </Box>
              </form>
            )}
          </Formik>
        </Container>
      </Box>
    </>
  );
};

export default Login;