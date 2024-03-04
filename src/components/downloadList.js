import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DownloadIcon from "@mui/icons-material/Download";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

// function createData(name, download) {
//   return { name, download };
// }

// const rows = [
//   createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
//   createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
//   createData("Eclair", 262, 16.0, 24, 6.0),
//   createData("Cupcake", 305, 3.7, 67, 4.3),
//   createData("Gingerbread", 356, 16.0, 49, 3.9),
// ];

// const rows = [
//   {
//     name: "CL Application form Admin. 04.03.2020 Admin",
//   },
//   {
//     name: "CL Application form final",
//   },
//   {
//     name: "CL Application form final 04.03.2020",
//   },
//   {
//     name: "EL joining Application form",
//   },
//   {
//     name: "EL joining Application form_Admin",
//   },
//   {
//     name: "Leave Application EL form final",
//   },
//   {
//     name: "Leave Application EL form final 04.03.2020",
//   },
//   {
//     name: "Leave Application EL form final 04.03.2020 Admin",
//   },
//   {
//     name: "LLeave Application form final",
//   },
//   {
//     name: "R-Leave Application Form",
//   },
//   {
//     name: "RL Application Form",
//   },
//   {
//     name: "RL Application Form.docx (Officer)",
//   },
//   {
//     name: "RL Application Form.docx 2019",
//   },
//   {
//     name: "RL Application Form.docx 2023",
//   },
//   {
//     name: "Station Leave Application form final",
//   },
//   {
//     name: "Station Leave Application form final 04.03.2020",
//   },
//   {
//     name: "Station Leave Application form final 04.03.2020 Admin",
//   },
// ];

const rows = [
  "CL Application form Admin. 04.03.2020 Admin",
  "CL Application form final",
  "CL Application form final 04.03.2020",
  "EL joining Application form",
  "EL joining Application form_Admin",
  "Leave Application EL form final",
  "Leave Application EL form final 04.03.2020	",
  "Leave Application EL form final 04.03.2020 Admin	",
  "LLeave Application form final",
  "R-Leave Application Form	",
  "RL Application Form",
  "RL Application Form.docx (Officer)",
  "RL Application Form.docx 2019",
  "RL Application Form.docx 2023",
  "Station Leave Application form final",
  "Station Leave Application form final 04.03.2020",
  "Station Leave Application form final 04.03.2020 Admin",
];

const DownloadList = () => {
  return (
    <TableContainer
      style={{ paddingLeft: 150, paddingRight: 150 }}
      component={Paper}
    >
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">From Name</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              <StyledTableCell align="center" component="th" scope="row">
                {row}
              </StyledTableCell>
              <StyledTableCell align="center">
                <DownloadIcon color="success" />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default DownloadList;
