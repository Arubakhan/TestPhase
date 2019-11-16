import React from 'react';
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const Addrecord = () =>{
    return(
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

          <Button className={Addrecord.button}>Add Record</Button>       
      <Button className={Addrecord.button}>Update Record</Button>
          <Button className={Addrecord.button}>Delete Record</Button>
          <Button className={Addrecord.button}>Show Record</Button>
          <Button className={Addrecord.button}>Search Record</Button>
          
        </Toolbar>
      </AppBar>
            <Typography
            variant="display1"
            color="inherit"
            style={{ marginLeft: 550, fontSize: 32, fontFamily: "italic" }}
          >
            Add Record
          </Typography>
        
         </div>
    )
}
export default Addrecord;
