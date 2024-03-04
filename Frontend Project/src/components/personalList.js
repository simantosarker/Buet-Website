import * as React from "react";
import Table from "@mui/material/Table";
import { styled } from "@mui/material/styles";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import ReplyIcon from "@mui/icons-material/Reply";
import { Link } from "react-router-dom";

import PersonalModal from "./personalModel";
import Rows from "./user";
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const rows = Rows;
const PersonalList = () => {
  return (
    <TableContainer
      component={Paper}
      style={{ paddingLeft: 150, paddingRight: 150 }}
    >
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Area</StyledTableCell>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Designation</StyledTableCell>
            <StyledTableCell align="center">Contact</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <Link
                to={`/civilwing/${row.area}`}
                style={{ textDecoration: "none", color: "black" }}
              >
                <TableCell align="center" component="th" scope="row">
                  {row.area}

                  <ReplyIcon color="info" />
                </TableCell>
              </Link>
              <TableCell align="center">{row.name}</TableCell>
              <TableCell align="center">{row.designation}</TableCell>
              <TableCell align="center">{row.contact}</TableCell>
              <TableCell align="center">
                <PersonalModal
                  area={row.area}
                  name={row.name}
                  designation={row.designation}
                  contact={row.contact}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default PersonalList;
