import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { MDBContainer } from "mdbreact";

const useStyles = makeStyles({
  root: {
    width: "100%",
    overflowX: "auto"
  },
  table: {
    minWidth: 650
  }
});

function createData(
  CNIC,
  Name,
  DOB,
  Address,
  City,
  DegreeProgram,
  Sex,
  Email,
  Mobile
) {
  return { CNIC, Name, DOB, Address, City, DegreeProgram, Sex, Email, Mobile };
}
const rows = [
  createData("Frozen yoghurt", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
  createData("Cupcake", 305, 3.7, 67, 4.3),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9),
  createData("Gingerbread", 356, 16.0, 49, 3.9)
];

export default function SimpleTable() {
  const classes = useStyles();

  return (
    <div>
      <Navbar />

      <MDBContainer fluid>
        <Paper style={{ marginTop: 32, padding: 32 }}>
          <MDBContainer fluid>
            <Table className={classes.table} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>CNIC</TableCell>
                  <TableCell>Name</TableCell>
                  <TableCell>DOB</TableCell>
                  <TableCell>Address</TableCell>
                  <TableCell>City</TableCell>
                  <TableCell>Program</TableCell>
                  <TableCell>Sex</TableCell>
                  <TableCell>Mobile</TableCell>
                  <TableCell>Email</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map(row => (
                  <TableRow key={row.name}>
                    {row.name}
                    jdnkajsdnkj
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </MDBContainer>
        </Paper>
      </MDBContainer>
    </div>
  );
}
