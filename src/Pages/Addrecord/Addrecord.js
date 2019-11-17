import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Typography, TextField, Paper } from "@material-ui/core";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBInput
} from "mdbreact";
import { makeStyles } from "@material-ui/core/styles";

import { Formik, Field, Form, ErrorMessage } from "formik";
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
    justifyContent: "center",
    alignItems: "center"
  }
}));

const Addrecord = () => {
  const classes = useStyles();

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
            initialValues={{ firstName: "", lastName: "", email: "" }}
            validationSchema={Yup.object({
              // firstName: Yup.string()
              //   .min(15, "Must be 15 characters or less")
              //   .required("Required"),
              // lastName: Yup.string()
              //   .min(20, "Must be 20 characters or less")
              //   .required("Required"),
              // email: Yup.string()
              //   .email("Invalid email addresss`")
              //   .required("Required"),
              cnic: Yup.string()
                .matches(/^[0-9+]{5}-[0-9+]{7}-[0-9]{1}$/, "procide valid cnic")

                .required("Required"),
              firstName: Yup.string()
                .min(3, "Must be 3 letters or more")
                .max(30, "Must be 30 letters or less")
                .required("Required"),
              lastName: Yup.string()
                .min(3)
                .max(30)
                .required("Required"),
              address: Yup.string()
                .min(3)
                .max(100)
                .required("Required"),
              city: Yup.string()
                .min(3)
                .max(30)
                .required("Required"),
              program: Yup.string()
                .min(3)
                .max(30)
                .required("Required"),
              gender: Yup.string()
                .matches(/^male$|^female$/, "not valid")

                .required("Required"),
              phone: Yup.string()
                .matches(/^[0-9*]{11}$/, "not valid phone number")

                .required("Required"),
              email: Yup.string()
                .min(3)
                .max(30)
                .email()
                .required("Required"),
              dob: Yup.date().required("Required")
            })}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {formik => (
              <MDBContainer>
                <form>
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
                            onChange={() => formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.firstName}
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
                            onChange={event => console.log(event.target.value)}
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
                            id="standard-basic"
                            className={classes.fullLength}
                            label="CNIC"
                            margin="normal"
                            onChange={event => console.log(event.target.value)}
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
                            id="standard-basic"
                            className={classes.fullLength}
                            label="CNIC"
                            margin="normal"
                            onChange={event => console.log(event.target.value)}
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
                            id="standard-basic"
                            className={classes.fullLength}
                            label="CNIC"
                            margin="normal"
                            onChange={event => console.log(event.target.value)}
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
                            id="standard-basic"
                            className={classes.fullLength}
                            label="CNIC"
                            margin="normal"
                            onChange={event => console.log(event.target.value)}
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
                            id="standard-basic"
                            className={classes.fullLength}
                            label="CNIC"
                            margin="normal"
                            onChange={event => console.log(event.target.value)}
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
                            id="standard-basic"
                            className={classes.fullLength}
                            label="CNIC"
                            margin="normal"
                            onChange={event => console.log(event.target.value)}
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
                            id="standard-basic"
                            className={classes.fullLength}
                            label="CNIC"
                            margin="normal"
                            onChange={event => console.log(event.target.value)}
                          />
                        </div>
                      </MDBCol>
                      <MDBCol md="2"></MDBCol>
                    </MDBRow>
                  </div>
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
