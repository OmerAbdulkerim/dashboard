import { Helmet } from 'react-helmet';
import {
  Box,
  Container,
  Grid
} from '@mui/material';
import TotalMembers from '../components/dashboardComponents/TotalMembers';
import BannedMembers from '../components/dashboardComponents/BannedMembers';
import ChannelsChart from '../components/dashboardComponents/ChannelsChart';
import TicketsChart from '../components/dashboardComponents/TicketsChart';
import CurrentCommands from '../components/dashboardComponents/CommandsCompDashboard';

const Dashboard = () => (
  <>
    <Helmet>
      <title>Dashboard | CluBot</title>
    </Helmet>
    <Box
      sx={{
        color: 'white',
        minHeight: '100%',
        py: 3,
        marginTop: '2vh'
      }}
    >
      <Container maxWidth={false}>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={12}
          >
            <TotalMembers/>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            sm={6}
            xs={12}
          >
            <BannedMembers/>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            xs={12}
          >
            <ChannelsChart/>
          </Grid>
          <Grid
            item
            xl={6}
            lg={6}
            md={6}
            xs={12}
          >
            <TicketsChart/>
          </Grid>
          <Grid
            item
            lg={12}
            md={12}
            xl={12}
            xs={12}
          >
            <CurrentCommands/>
          </Grid>
        </Grid>
      </Container>
    </Box>
  </>
);

export default Dashboard;