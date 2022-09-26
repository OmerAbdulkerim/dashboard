import {
  Avatar,
  Card,
  CardContent,
  Grid,
  Box,
  Typography
} from '@mui/material';
import { red } from '@mui/material/colors';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';

const BannedMembers = (props) => (
  <Card 
  sx={{background: 'rgba(135, 119, 127, 0.15)', mixBlendMode: 'darken, luminosity', borderRadius: 3}}
  {...props}>
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
            Banned Members
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            3299
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: red[600],
              height: 56,
              width: 56,
              color: 'white'
            }}
          >
            <PeopleIcon />
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
          26,000 Total
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default BannedMembers;
