import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import MoneyIcon from '@material-ui/icons/Money';
import { blue } from '@mui/material/colors';

const Channels = (props) => (
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
            CHANNELS
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            150
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: blue[600],
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
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
          109 Text | 23 Voice | 18 Categories
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default Channels;
