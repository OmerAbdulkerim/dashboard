import { useState } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import {
  Avatar,
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
import getInitials from '../../utils/getInitials';

const CustomerListResults = ({ customers, ...rest }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest} style={{background: 'rgba(135, 119, 127, 0.05)', mixBlendMode: 'darken, luminosity', borderRadius: 3, overflowX: 'auto'}}>
        <Box sx={{ minWidth: 1050, background: 'rgba(135, 119, 127, 0.1)', mixBlendMode: 'darken, luminosity', borderRadius: 3}}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                  User
                </TableCell>
                <TableCell>
                  Action
                </TableCell>
                <TableCell>
                  Time and Date
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {customers.slice(page * limit, page * limit + limit).map((customer) => (
                <TableRow
                  hover
                  key={customer.id}
                >
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={customer.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(customer.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {customer.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    {customer.action}
                  </TableCell>
                  <TableCell>
                    {moment(customer.createdAt).format('DD/MM/YYYY')}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      <TablePagination
        component="div"
        count={customers.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
        sx={{background: 'rgba(135, 119, 127, 0.1)', mixBlendMode: 'darken, luminosity', borderRadius: 3, minWidth: 1050}}
      />
    </Card>
  );
};

CustomerListResults.propTypes = {
  customers: PropTypes.array.isRequired
};

export default CustomerListResults;
