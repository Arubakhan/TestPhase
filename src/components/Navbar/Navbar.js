import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { withRouter } from "react-router-dom";

const Navbar = props => {
  const handleClick = page => {
    let { history } = props;
    page = page.toLowerCase();
    if (page === "addrecord") {
      page = "";
    }
    history.push({
      pathname: `/${page}`
    });
  };
  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <Typography
            variant="display1"
            color="inherit"
            style={{ marginLeft: 32, fontSize: 32, fontFamily: "italic" }}
          >
            Student Management System
          </Typography>

          <div style={{ flex: 1, marginLeft: 32, marginTop: 8 }}>
            <Button
              style={{ color: "white" }}
              onClick={()=> handleClick("addrecord")}
            >
              Add Record
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={()=>handleClick("updaterecord")}
            >
              Update Record
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={()=>handleClick("deleterecord")}
            >
              Delete Record
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={()=>handleClick("showrecord")}
            >
              Show Record
            </Button>
            <Button
              style={{ color: "white" }}
              onClick={()=>handleClick("searchrecord")}
            >
              Search Record
            </Button>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default withRouter(Navbar);
