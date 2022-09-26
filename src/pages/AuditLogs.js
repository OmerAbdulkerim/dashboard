import { Helmet } from 'react-helmet';
import { Box, Container } from '@mui/material';
import AuditLogsListResult from '../components/listComponents/AuditLogsListResult';
import SearchToolbar from '../components/SearchToolbar';
import customers from '../_mock_data_/logs';
import bg from '../cardBG.png';

const AuditLogs = () => (
  <>
    <Helmet>
      <title>Audit Logs | Clubot</title>
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
        <SearchToolbar searchbar='false' addbtn='false'/>
        <Box sx={{ pt: 3}}>
          <AuditLogsListResult customers={customers} />
        </Box>
      </Container>
    </Box>
  </>
);

export default AuditLogs;
