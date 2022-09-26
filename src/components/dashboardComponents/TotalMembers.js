import {
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  Typography
} from '@mui/material';
import { green } from '@mui/material/colors';
import PeopleIcon from '@mui/icons-material/PeopleOutlined';
//linear-gradient(10deg, #ED7B84 , #9055FF)

const TotalMembers = (props) => (
  <Card {...props} 
  sx={{
    background: 'rgba(135, 119, 127, 0.15)', 
    mixBlendMode: 'darken, luminosity', 
    borderRadius: 3,
    backdropFilter: 'blur(10px)'}}>
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
            Total Members
          </Typography>
          <Typography
            color="textPrimary"
            variant="h3"
          >
            23299
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: green[600],
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
          20000 Verified
        </Typography>
      </Box>
    </CardContent>
  </Card>
);

export default TotalMembers;
