import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import { orange } from '@mui/material/colors';
import InsertChartIcon from '@mui/icons-material/InsertChartOutlined';

const Tickets = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
    style={{backgroundColor:'#1e1f24'}}
  >
    <CardContent>
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="h6"
          >
            OPEN TICKETS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            45
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: orange[600],
              height: 56,
              width: 56
            }}
          >
            <InsertChartIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <Typography
          color="textSecondary"
          variant="caption"
        >
          10 General | 10 Website | 10 NFT | 15 Wallet Linking
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default Tickets;
