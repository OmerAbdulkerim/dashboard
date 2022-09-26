import { Helmet } from 'react-helmet';
import { Box, Container, Grid } from '@mui/material';
import CommandsToolbar from '../components/commandComponents/CommandsToolbar';
import Command from '../components/commandComponents/Command';
import commands from '../_mock_data_/commands';

const Commands = (props) => {
return (
<>
    <Helmet>
      <title>Commands | CluBot</title>
    </Helmet>
    <Box
      sx={{
        color: 'white',
        minHeight: '100%',
        py: 3,
        marginTop: '1.5vh'
      }}
    >
      <Container maxWidth={false}>
        <CommandsToolbar/>
        <Grid
          container
          spacing={3}
        >
          {commands.map((command) => {
              return(
                <Grid
                  item
                  xl={6}
                  lg={6}
                  md={6}
                  sm={6}
                  xs={12}
                  key={commands.indexOf(command)}
                >
                  <Command key={commands.indexOf(command)} {...command}/>
                </Grid>
              )  
          })}
        </Grid>
      </Container>
    </Box>
  </>
)};

export default Commands;
