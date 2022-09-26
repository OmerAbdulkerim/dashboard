import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  InputAdornment,
  SvgIcon,
} from '@mui/material';
import { Search as SearchIcon } from 'react-feather';

const SearchToolbar = (props) => {
  const {searchbar, addbtn} = props;
  const addbtnType = addbtn === 'false' ? 'none' : '';
  const searchStyle = searchbar === 'false' ? {mt: 3, display: 'none'} : {mt: 3}; 

  return (
  <Box {...props}>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
      }}
    >
      <Button sx={{ mx: 1, color: 'white'}}>
        Export
      </Button>
    </Box>
    <Box sx={{searchStyle}}>
      <Card sx={{background: 'rgba(135, 119, 127, 0.2)', mixBlendMode: 'darken, luminosity', borderRadius: 3, width:'100%'}}>
        <CardContent sx={{width:'100%', justifyContent:'space-between'}}>
          <Box sx={{backgroundColor:'#white'}}>
            <TextField
              fullWidth
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon
                      fontSize="small"
                      color="action"
                    >
                      <SearchIcon color="white"/>
                    </SvgIcon>
                  </InputAdornment>
                )
              }}
              placeholder="Search Logs"
              variant="outlined"
              sx={{
                '& label.Mui-focused': {
                    color: 'white',
                },
                '& .MuiOutlinedInput-root': {
                    ' &.Mui-focused fieldset': {
                      borderColor: 'white',
                    }
                }
            }}
            />
          </Box>
        <Button
            color="primary"
            variant="contained"
            style={{backgroundColor: '#ef008e', display:addbtnType, marginTop:'0.7rem', marginRight:'0.5rem'}}
            >
            Add Usernames
        </Button>
        <Button
            color="primary"
            variant="contained"
            style={{backgroundColor: '#ef008e', display:addbtnType, marginTop:'0.7rem'}}
            >
            Remove Usernames
        </Button>
        </CardContent>
      </Card>
    </Box>
  </Box>
)};

export default SearchToolbar;
