import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import { MDBContainer } from "mdbreact";
import {
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Table,
  Paper
} from "@material-ui/core";

export default class ShowRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: []
    };
  }
  componentDidMount() {
    this.getAllRecords();
  }
  getAllRecords = () => {
    fetch("http://localhost:3000/api/records", {
      method: "GET",

      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log("ressss", res);

        this.setState({
          records: res
        });
      })
      .catch(error => {
        alert(JSON.stringify(error));
      });
  };
  render() {
    // const classes = useStyles();

    return (
      <div>
        <Navbar />

        <MDBContainer fluid>
          <Paper style={{ marginTop: 32, padding: 32 }}>
            <MDBContainer fluid>
              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>CNIC</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>DOB</TableCell>
                    <TableCell>Address</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Program</TableCell>
                    <TableCell>Gender</TableCell>
                    <TableCell>Mobile</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Action</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {this.state.records.map(item => (
                    <TableRow key={item.id}>
                      <TableCell>{item.cnic}</TableCell>
                      <TableCell>
                        {item.firstName} {item.lastName}
                      </TableCell>
                      <TableCell>{item.dob.substring(0, 10)}</TableCell>
                      <TableCell>{item.address}</TableCell>
                      <TableCell>{item.city}</TableCell>
                      <TableCell>{item.program}}</TableCell>
                      <TableCell>{item.gender}</TableCell>
                      <TableCell>{item.phone}</TableCell>
                      <TableCell>{item.email}</TableCell>
                      <TableCell>Action</TableCell>
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
}
