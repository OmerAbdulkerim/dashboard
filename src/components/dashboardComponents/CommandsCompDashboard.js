import {
  Box,
  Button,
  Card,
  CardHeader,
  Chip,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import commands from '../../_mock_data_/commands';

const CurrentCommands = (props) => {
  const navigate = useNavigate('/app/commands');
  const navigateTo = () => navigate('/app/commands');

  return (
  <Card {...props} sx={{background: 'rgba(135, 119, 127, 0.15)', mixBlendMode: 'darken, luminosity', borderRadius: 3, overflowX: 'auto'}}>
    <CardHeader title="Commands"/>
    <Divider style={{backgroundColor:'white', borderBottomWidth: 3}} />
      <Box sx={{ minWcommandth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>
                Name
              </TableCell>
              <TableCell>
                Permissions
              </TableCell>
              <TableCell>
                Description
              </TableCell>
              <TableCell>
                Status
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {commands.map((command) => (
              <TableRow
                hover
                key={command.name}
              >
                <TableCell>
                  {command.name}
                </TableCell>
                <TableCell>
                <Chip
                    color="primary"
                    label={`${command.permissions}`}
                    size="small"
                    style={{backgroundColor:'#d60068'}}
                  />
                </TableCell>
                <TableCell>
                  {command.description}
                      </TableCell>
                <TableCell>
                  <Chip
                    color="primary"
                    label={`${command.status}`}
                    size="small"
                    style={{backgroundColor: command.status ? '#3ffc58':'#d60068'}}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'flex-end',
        p: 2
      }}
    >
      <Button
        color="primary"
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
        style={{color: 'white'}}
        onClick={navigateTo}
      >
        Edit Commands
      </Button>
    </Box>
  </Card>
)};

export default CurrentCommands;