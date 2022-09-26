import { useState } from 'react';
import PropTypes from 'prop-types';
import {
  Box,
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography
} from '@mui/material';

const BannedUsernamesList = ({ commands, ...rest }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest} style={{background: 'rgba(135, 119, 127, 0.15)', mixBlendMode: 'darken, luminosity', borderRadius: 3}}>
        <Box sx={{ minWidth: 1050, background: 'rgba(135, 119, 127, 0.05)', mixBlendMode: 'darken, luminosity', borderRadius: 3}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  Username
                </TableCell>
                <TableCell>
                Status
              </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {commands.slice(page * limit, page * limit + limit).map((command) => (
                <TableRow
                  hover={true}
                  key={command.id}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {command.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {command.status}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      <TablePagination
        component="div"
        count={commands.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
        sx={{background: 'rgba(135, 119, 127, 0.1)', mixBlendMode: 'darken, luminosity', borderRadius: 3}}
      />
    </Card>
  );
};

BannedUsernamesList.propTypes = {
  usernames: PropTypes.array.isRequired
};

export default BannedUsernamesList;
