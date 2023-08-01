import { Box, Button, Card, Checkbox, Chip, Stack, Table, TableBody, TableCell, TableHead, TableRow, Typography } from '@mui/material';
import { Scrollbar } from 'ui-component/Scrollbar';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';

export const BusinessesTable = (props) => {
  const {
    //   count = 0,
    //   items = [],
    //   onDeselectAll,
    //   onDeselectOne,
    //   onPageChange = () => {},
    //   onRowsPerPageChange,
    //   onSelectAll,
    //   onSelectOne,
    //   page = 0,
    //   rowsPerPage = 0,
    //   selected = []
    business_data = []
  } = props;

  // const selectedSome = (selected.length > 0) && (selected.length < items.length);
  // const selectedAll = (items.length > 0) && (selected.length === items.length);
  //

  function renderStatusBadge(status) {
    switch (status) {
      case 'success':
        return <Chip label={status} color={'success'} />;
      case 'failed':
        return <Chip label={status} color={'error'} />;
      default:
        return <Chip label={status} color={'info'} />;
    }
  }

  return (
    <Card>
      <Scrollbar>
        <Box sx={{ minWidth: 800 }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell padding="checkbox">
                  <Checkbox checked={false} />
                </TableCell>
                <TableCell>Id</TableCell>
                <TableCell>User</TableCell>
                <TableCell>Amount</TableCell>
                <TableCell>Business</TableCell>
                <TableCell>Status</TableCell>
                <TableCell>Date</TableCell>
                <TableCell>Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {business_data.map((business) => {
                // const isSelected = selected.includes(business.id);
                // const createdAt = format(business.createdAt, 'dd/MM/yyyy');

                return (
                  <TableRow
                    hover
                    key={business.id}
                    // selected={isSelected}
                  >
                    <TableCell padding="checkbox">
                      <Checkbox
                        checked={false}
                        // onChange={(event) => {
                        //   if (event.target.checked) {
                        //     onSelectOne?.(business.id);
                        //   } else {
                        //     onDeselectOne?.(business.id);
                        //   }
                        // }}
                      />
                    </TableCell>
                    <TableCell>
                      <Stack alignItems="center" direction="row" spacing={2}>
                        <Typography variant="subtitle2">{business.id}</Typography>
                      </Stack>
                    </TableCell>
                    <TableCell>{business.user}</TableCell>
                    <TableCell>{business.amount}</TableCell>
                    <TableCell>{business.business}</TableCell>
                    <TableCell>{renderStatusBadge(business.status ?? '')}</TableCell>
                    <TableCell>{business.date}</TableCell>
                    <TableCell>
                      {business.status == 'failed' ? (
                        <Button startIcon={<ReportProblemIcon />} variant={'contained'} color={'error'}>
                          Report
                        </Button>
                      ) : (
                        <Button disabled>No Action</Button>
                      )}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Box>
      </Scrollbar>
      {/* <TablePagination
        component="div"
        count={count}
        onPageChange={onPageChange}
        onRowsPerPageChange={onRowsPerPageChange}
        page={page}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
      /> */}
    </Card>
  );
};
