import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useDispatch, useSelector } from "react-redux";
import * as logActions from "../store/actions";
import moment from "moment";
import { Box, Typography } from "@mui/material";
import Header from "../component/Header";

const columns = [
  {
    id: "time",
    label: "TIME",
    minWidth: 150,
  },
  {
    id: "connection",
    label: "CONNECTION",
    minWidth: 100,
  },
  {
    id: "description",
    label: "DESCRIPTION",
    minWidth: 200,
  },
  // { id: "name", label: "Name", minWidth: 170 },
  // { id: "code", label: "ISO\u00a0Code", minWidth: 100 },
  // {
  //   id: "population",
  //   label: "Population",
  //   minWidth: 170,
  //   align: "right",
  //   format: (value) => value.toLocaleString("en-US"),
  // },
  // {
  //   id: "size",
  //   label: "Size\u00a0(km\u00b2)",
  //   minWidth: 170,
  //   align: "right",
  //   format: (value) => value.toLocaleString("en-US"),
  // },
  // {
  //   id: "density",
  //   label: "Density",
  //   minWidth: 170,
  //   align: "right",
  //   format: (value) => value.toFixed(2),
  // },
];

function createData(times, code, description) {
  let connection = code > 100 ? "Error" : "Connect";
  let time = moment(times).format("YYYY-MM-DD hh:mm");
  return { time, connection, description };
}

export default function LogPage() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [rows, setRows] = React.useState([]);
  const dispatch = useDispatch();
  const logs = useSelector(({ logs }) => logs.log);
  React.useEffect(() => {
    dispatch(logActions.getLogs());
  }, []);
  React.useEffect(() => {
    let tempData = [];
    logs.length > 0 &&
      logs.map((item, index) => {
        tempData.push(createData(item.time, item.code, item.description));
      });
    setRows(tempData);
  }, [logs]);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <div>
      <Header />
      <Box sx={{ m: 4 }}>
        <Paper sx={{ width: "100%", overflow: "hidden" }}>
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.length > 0 ? (
                  rows
                    .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                    .map((row) => {
                      return (
                        <TableRow
                          hover
                          role="checkbox"
                          tabIndex={-1}
                          key={row.code}
                        >
                          {columns.map((column) => {
                            const value = row[column.id];
                            return (
                              <TableCell
                                key={column.id}
                                sx={{
                                  color:
                                    row["connection"] == "Error"
                                      ? "red"
                                      : "black",
                                }}
                                align={column.align}
                              >
                                {column.format && typeof value === "number"
                                  ? column.format(value)
                                  : value}
                              </TableCell>
                            );
                          })}
                        </TableRow>
                      );
                    })
                ) : (
                  <Box
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "30vh",
                    }}
                  >
                    <Typography variant="h4">No data</Typography>
                  </Box>
                )}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      </Box>
    </div>
  );
}
