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

const BannedUsernamesList = ({ usernames, ...rest }) => {
  const [limit, setLimit] = useState(5);
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
              </TableRow>
            </TableHead>
            <TableBody>
              {usernames.slice(page * limit, page * limit + limit).map((_username) => (
                <TableRow
                  hover={true}
                  key={_username}
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
                        {_username}
                      </Typography>
                    </Box>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      <TablePagination
        component="div"
        count={usernames.length}
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
