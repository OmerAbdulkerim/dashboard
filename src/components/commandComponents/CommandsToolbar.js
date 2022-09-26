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
  
  const CommandsToolbar = (props) => {
  
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
      <Box>
        <Card sx={{
            width:'100%', 
            marginBottom: 5,
            }}>
          <CardContent sx={{width:'100%', justifyContent:'space-between'}}>
            <Box>
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
                placeholder="Search Commands"
                variant="outlined"
                sx={{
                  marginTop: '1vh',
                    '& .MuiOutlinedInput-root': {
                        ' &.Mui-focused fieldset': {
                          borderColor: 'white',
                        }
                    }
                }}
              />
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )};
  
  export default CommandsToolbar;
  