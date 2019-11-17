import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import {
  Typography,
  TextField,
  Paper,
  InputLabel,
  MenuItem,
  Button,
  Select
} from "@material-ui/core";
import { MDBContainer, MDBRow, MDBCol } from "mdbreact";
import { makeStyles } from "@material-ui/core/styles";

import { Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap"
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 300
  },
  fullLength: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 670
  },
  title: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  centered: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row"
  }
}));

const Addrecord = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [openProgram, setOpenProgram] = React.useState(false);
  const [openGender, setOpenGender] = React.useState(false);

  const Add = (values, resetForm, setSubmitting) => {
    fetch("http://localhost:3000/api/records", {
      method: "POST",
      body: JSON.stringify({
        cnic: values.cnic,
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        dob: values.dob,
        address: values.address,
        program: values.program,
        gender: values.gender,
        phone: values.phone,

        city: values.city
      }),

      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(res => res.json())
      .then(res => {
        alert("Student added successfully");
        resetForm();
        setSubmitting(false);
      })
      .catch(error => {
        alert(JSON.stringify(error));
      });
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleCloseGender = () => {
    setOpenGender(false);
  };

  const handleOpenGender = () => {
    setOpenGender(true);
  };
  const handleCloseProgram = () => {
    setOpenProgram(false);
  };

  const handleOpenProgram = () => {
    setOpenProgram(true);
  };
  return (
    <div>
      <Navbar />
      <MDBContainer>
        <Paper style={{ marginTop: 64, marginBottom: 64, paddingBottom: 32 }}>
          <div className={classes.centered}>
            <Typography
              variant="display1"
              color="inherit"
              style={{
                marginTop: 16,
                fontSize: 24,
                fontFamily: "italic"
              }}
            >
              Add Record
            </Typography>
          </div>
          <Formik
            initialValues={{
              cnic: "",
              firstName: "",
              lastName: "",
              email: "",
              dob: "",
              address: "",
              program: "",
              gender: "",
              phone: "",
              city: ""
            }}
            validationSchema={Yup.object({
              cnic: Yup.string()
                .matches(
                  /^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/,
                  "Provide a valid CNIC"
                )

                .required("Required"),
              firstName: Yup.string()
                .matches(/^[A-Za-z]+$/, "Please provide a valid name")
                .min(3, "Must be 3 letters or more")
                .max(30, "Must be 30 letters or less")
                .required("Required"),
              lastName: Yup.string()
                .matches(/^[A-Za-z]+$/, "Please provide a valid name")

                .min(3)
                .max(30)
                .required("Required"),
              address: Yup.string()

                .min(3)
                .max(100)
                .required("Required"),
              city: Yup.string()
                // .matches(/^[a-z]$/, "Please provide a valid city")

                .min(3)
                .max(30)
                .required("Required"),
              program: Yup.string()
                // .matches(/^[a-z]$/, "Please provide a valid program")

                .min(3)
                .max(30)
                .required("Required"),
              gender: Yup.string()
                .matches(/^male$|^female$/, "not valid")

                .required("Required"),
              phone: Yup.string()
                .matches(/^[0-9*]{11}$/, "Not a valid phone number")

                .required("Required"),
              email: Yup.string()
                .min(3)
                .max(30)
                .email()
                .required("Required"),
              dob: Yup.date().required("Required")
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log("vaavavavava", values);
              Add(values, resetForm, setSubmitting);
            }}
          >
            {formik => (
              <MDBContainer>
                <form onSubmit={formik.handleSubmit}>
                  <div style={{ marginBlockEnd: 32 }}>
                    <MDBRow>
                      <MDBCol md="2"></MDBCol>
                      <MDBCol md="8">
                        <div>
                          <TextField
                            id="cnic"
                            className={classes.fullLength}
                            label="CNIC"
                            margin="normal"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.cnic}
                            helperText={
                              <ErrorMessage name="cnic">
                                {msg => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            }
                          />
                        </div>
                      </MDBCol>
                      <MDBCol md="2"></MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="2"></MDBCol>
                      <MDBCol md="4">
                        <div>
                          <TextField
                            id="firstName"
                            className={classes.textField}
                            label="First Name"
                            margin="normal"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
                            helperText={
                              <ErrorMessage name="firstName">
                                {msg => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            }
                          />
                        </div>
                      </MDBCol>
                      <MDBCol md="4">
                        <div>
                          <TextField
                            id="lastName"
                            className={classes.textField}
                            label="Last Name"
                            margin="normal"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.lastName}
                            helperText={
                              <ErrorMessage name="lastName">
                                {msg => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            }
                          />
                        </div>
                      </MDBCol>
                      <MDBCol md="2"></MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="2"></MDBCol>
                      <MDBCol md="8">
                        <div>
                          <TextField
                            id="dob"
                            label="Date of Birth"
                            type="date"
                            defaultValue={new Date()}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.dob}
                            className={classes.fullLength}
                            InputLabelProps={{
                              shrink: true
                            }}
                            helperText={
                              <ErrorMessage name="dob">
                                {msg => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            }
                          />
                        </div>
                      </MDBCol>
                      <MDBCol md="2"></MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="2"></MDBCol>
                      <MDBCol md="8">
                        <div>
                          <TextField
                            id="address"
                            className={classes.fullLength}
                            label="Address"
                            margin="normal"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.address}
                            // InputLabelProps={{
                            //   shrink: true
                            // }}
                            helperText={
                              <ErrorMessage name="address">
                                {msg => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            }
                          />
                        </div>
                      </MDBCol>
                      <MDBCol md="2"></MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="2"></MDBCol>
                      <MDBCol md="8">
                        <div>
                          <InputLabel
                            id="city"
                            shrink={false}
                            style={{ marginLeft: 8 }}
                          >
                            City
                          </InputLabel>
                          <Select
                            name="city"
                            open={open}
                            onClose={handleClose}
                            onOpen={handleOpen}
                            onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            value={formik.values.city}
                            className={classes.fullLength}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={"Lahore"}>Lahore</MenuItem>
                            <MenuItem value={"Islamabad"}>Islamabad</MenuItem>
                            <MenuItem value={"Karachi"}>Karachi</MenuItem>
                          </Select>
                          <ErrorMessage name="city">
                            {msg => (
                              <div
                                style={{
                                  color: "red",
                                  marginLeft: 8,
                                  fontSize: 13,
                                  fontWeight: "normal"
                                }}
                              >
                                {msg}
                              </div>
                            )}
                          </ErrorMessage>
                        </div>
                      </MDBCol>
                      <MDBCol md="2"></MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="2"></MDBCol>
                      <MDBCol md="8">
                        <div>
                          <InputLabel
                            id="program"
                            shrink={false}
                            style={{ marginLeft: 8, marginTop: 32 }}
                          >
                            Degree Program
                          </InputLabel>
                          <Select
                            // labelId="program"
                            name="program"
                            open={openProgram}
                            onClose={handleCloseProgram}
                            onOpen={handleOpenProgram}
                            onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            value={formik.values.program}
                            className={classes.fullLength}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={"BSE"}>BSE</MenuItem>
                            <MenuItem value={"BCS"}>BCS</MenuItem>
                            <MenuItem value={"BEE"}>BEE</MenuItem>
                          </Select>
                          <ErrorMessage name="program">
                            {msg => (
                              <div
                                style={{
                                  color: "red",
                                  marginLeft: 8,
                                  fontSize: 13,
                                  fontWeight: "normal"
                                }}
                              >
                                {msg}
                              </div>
                            )}
                          </ErrorMessage>
                        </div>
                      </MDBCol>
                      <MDBCol md="2"></MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="2"></MDBCol>
                      <MDBCol md="8">
                        <div>
                          <InputLabel
                            id="gender"
                            shrink={false}
                            style={{ marginLeft: 8, marginTop: 32 }}
                          >
                            Gender
                          </InputLabel>
                          <Select
                            // labelId="program"
                            name="gender"
                            open={openGender}
                            onClose={handleCloseGender}
                            onOpen={handleOpenGender}
                            onChange={formik.handleChange}
                            // onBlur={formik.handleBlur}
                            value={formik.values.gender}
                            className={classes.fullLength}
                          >
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            <MenuItem value={"male"}>Male</MenuItem>
                            <MenuItem value={"female"}>Female</MenuItem>
                          </Select>
                          <ErrorMessage name="gender">
                            {msg => (
                              <div
                                style={{
                                  color: "red",
                                  marginLeft: 8,
                                  fontSize: 13,
                                  fontWeight: "normal"
                                }}
                              >
                                {msg}
                              </div>
                            )}
                          </ErrorMessage>
                        </div>
                      </MDBCol>
                      <MDBCol md="2"></MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="2"></MDBCol>
                      <MDBCol md="8">
                        <div style={{ marginTop: 32 }}>
                          <TextField
                            id="email"
                            className={classes.fullLength}
                            label="Email"
                            margin="normal"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            // InputLabelProps={{
                            //   shrink: true
                            // }}
                            helperText={
                              <ErrorMessage name="email">
                                {msg => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            }
                          />
                        </div>
                      </MDBCol>
                      <MDBCol md="2"></MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="2"></MDBCol>
                      <MDBCol md="8">
                        <div>
                          <TextField
                            id="phone"
                            className={classes.fullLength}
                            label="Phone"
                            margin="normal"
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.phone}
                            // InputLabelProps={{
                            //   shrink: true
                            // }}
                            helperText={
                              <ErrorMessage name="phone">
                                {msg => (
                                  <div style={{ color: "red" }}>{msg}</div>
                                )}
                              </ErrorMessage>
                            }
                          />
                        </div>
                      </MDBCol>
                      <MDBCol md="2"></MDBCol>
                    </MDBRow>
                  </div>
                  <MDBRow>
                    <MDBCol md="2"></MDBCol>
                    <MDBCol md="8">
                      <div className={classes.centered}>
                        <Button
                          variant="contained"
                          color="primary"
                          onClick={formik.handleReset}
                        >
                          Reset Form
                        </Button>
                        <Button
                          variant="contained"
                          color="primary"
                          disabled={formik.setSubmitting}
                          onClick={formik.handleSubmit}
                        >
                          Add Student
                        </Button>
                      </div>
                    </MDBCol>
                    <MDBCol md="2"></MDBCol>
                  </MDBRow>
                </form>
              </MDBContainer>
            )}
          </Formik>
        </Paper>
      </MDBContainer>
    </div>
  );
};
export default Addrecord;
