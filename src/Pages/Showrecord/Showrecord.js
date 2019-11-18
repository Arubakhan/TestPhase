import React from "react";
import Navbar from "../../components/Navbar/Navbar";

import { MDBContainer } from "mdbreact";
import {
  TableRow,
  TableHead,
  TableCell,
  TableBody,
  Table,
  Fab,
  CircularProgress,
  Modal,
  TextField,
  Backdrop,
  Fade,
  Button,
  Paper,
  Typography
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";
import Delete from "@material-ui/icons/Delete";
import "./style.css";
import ModalComponent from "../../components/Modal/Modal";
import { withRouter } from "react-router-dom";

class ShowRecord extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      records: [],
      open: false,
      item: null,
      openDelete: false,
      searchValue: "",
      notFound: ""
    };
  }
  componentDidMount() {
    this.getAllRecords();
  }
  handleModal = item => {
    let { history } = this.props;
    if (item._id !== undefined) {
      history.push("/updaterecord/" + item._id);
    } else {
      history.replace("/showrecord");
    }
    console.log("opeeneeeee", this.state.open);
    this.setState(
      {
        item: item,
        open: !this.state.open
      },
      () => console.log("opeeneeeee", this.state.open)
    );
  };
  handleDeleteModal = item => {
    let { history } = this.props;
    if (item._id !== undefined) {
      history.push("/deleterecord/" + item._id);
    } else {
      history.replace("/deleterecord");
    }
    this.setState({
      item: item,
      openDelete: !this.state.openDelete
    });
  };
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

  handleDelete = () => {
    let { match } = this.props;
    console.log("matchh", match.params.id);
    fetch(`http://localhost:3000/api/records/${this.state.item._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        console.log("res of delete", res);
        alert("Record Deleted successfully");

        this.getAllRecords();
        this.handleDeleteModal({});
      })
      .catch(error => {
        alert(JSON.stringify(error));
      });
  };
  handleSearch = e => {
    let currentList = [];
    currentList = this.state.records;

    // Variable to hold the filtered list before putting into state
    let newList = [];
    this.setState({
      searchValue: e.target.value
    });
    // If the search bar isn't empty
    if (e.target.value !== "") {
      // Assign the original list to currentList

      // Use .filter() to determine which items should be displayed
      // based on the search terms
      newList = currentList.filter(item => {
        // change current item to lowercase
        const lc = item.firstName.toLowerCase();
        // change search term to lowercase
        const filter = e.target.value.toLowerCase();
        // check to see if the current list item includes the search term
        // If it does, it will be added to newList. Using lowercase eliminates
        // issues with capitalization in search terms and search content
        return lc.includes(filter);
      });
    } else {
      // If the search bar is empty, set newList to original task list
      // newList = currentList;
      this.setState({
        notFound: ""
      });
      // console.log('neww list',currentList)
    }
    // Set the filtered state based on what our rules added to newList
    if (newList.length > 0) {
      this.setState({
        records: newList,
        notFound: ""
      });
    } else {
      if (e.target.value !== "") {
        this.setState({
          notFound: "No Record Found"
        });
      }
      this.getAllRecords();
    }
  };
  render() {
    return (
      <div>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          open={this.state.openDelete}
          onClose={this.handleDeleteModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={this.state.openDelete}>
            <div
              style={{
                backgroundColor: "#f7f7f7",
                // border: "2px solid #000",
                // boxShadow: the,
                height: 200,
                width: 400,
                padding: 16
              }}
            >
              <MDBContainer>
                <div
                  style={{
                    padding: 32,
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column"
                  }}
                >
                  <Typography
                    variant="display1"
                    color="inherit"
                    style={{
                      fontSize: 16,
                      fontFamily: "italic"
                    }}
                  >
                    Are you sure you want to delete this Record?
                  </Typography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      marginTop: 16,
                      justifyContent: "flex-start",
                      alignItems: "flex-start"
                    }}
                  >
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={this.handleDeleteModal}
                      style={{ margin: 16, marginLeft: 0 }}
                    >
                      Cancel
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={this.handleDelete}
                      style={{ margin: 16, marginRight: 0 }}
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              </MDBContainer>
            </div>
          </Fade>
        </Modal>
        <Navbar />
        <ModalComponent
          open={this.state.open}
          handleModal={this.handleModal}
          getAllRecords={this.getAllRecords}
          item={this.state.item}
        />
        <MDBContainer fluid>
          <Paper
            style={{
              marginTop: 32,
              padding: 32
            }}
          >
            <MDBContainer fluid>
              {this.props.page !== undefined ? (
                this.props.page === "search" ? (
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      flexDirection: "column"
                    }}
                  >
                    <TextField
                      id="search"
                      style={{ width: "100%" }}
                      label="Search"
                      margin="normal"
                      onChange={this.handleSearch}
                      value={this.state.searchValue}
                    />
                    {this.state.notFound !== "" ? (
                      <Typography
                        variant="display1"
                        color="inherit"
                        style={{
                          fontSize: 16,
                          fontFamily: "italic",
                          color: "red"
                        }}
                      >
                        {this.state.notFound}
                      </Typography>
                    ) : null}
                  </div>
                ) : null
              ) : null}
              {this.state.records.length > 0 ? (
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
                      {this.props.page !== undefined  && this.props.page !=="search"?(
                        <TableCell>Action</TableCell>
                      ) : (
                        <TableCell></TableCell>
                      )}
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
                        <TableCell>{item.program}</TableCell>
                        <TableCell>{item.gender}</TableCell>
                        <TableCell>{item.phone}</TableCell>
                        <TableCell>{item.email}</TableCell>
                        <TableCell>
                          <div className="icons">
                            {this.props.page !== undefined ? (
                              this.props.page === "edit" ? (
                                <Fab
                                  size="small"
                                  color="primary"
                                  aria-label="edit"
                                  onClick={() => this.handleModal(item)}
                                >
                                  <EditIcon />
                                </Fab>
                              ) : this.props.page === "delete" ? (
                                <Fab
                                  size="small"
                                  color="secondary"
                                  aria-label="delete"
                                  onClick={() => this.handleDeleteModal(item)}
                                >
                                  <Delete />
                                </Fab>
                              // ) : this.props.page === "search" ? (
                              //   <div
                              //     style={{
                              //       display: "flex",
                              //       flexDirection: "row"
                              //     }}
                              //   >
                              //     <Fab
                              //       size="small"
                              //       color="primary"
                              //       aria-label="edit"
                              //       onClick={() => this.handleModal(item)}
                              //     >
                              //       <EditIcon />
                              //     </Fab>
                              //     <Fab
                              //       size="small"
                              //       color="secondary"
                              //       aria-label="delete"
                              //       onClick={() => this.handleDeleteModal(item)}
                              //     >
                              //       <Delete />
                              //     </Fab>
                              //   </div>
                              ) : null
                            ) : null}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              ) : (
                <div
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    display: "flex"
                  }}
                >
                  <CircularProgress />
                </div>
              )}
            </MDBContainer>
          </Paper>
        </MDBContainer>
      </div>
    );
  }
}
export default withRouter(ShowRecord);
