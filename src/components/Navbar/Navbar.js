import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';

const Navbar = props => {
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

          <Button className={Navbar.button}>Add Record</Button>       
      <Button className={Navbar.button}>Update Record</Button>
          <Button className={Navbar.button}>Delete Record</Button>
          <Button className={Navbar.button}>Show Record</Button>
          <Button className={Navbar.button}>Search Record</Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Navbar;
