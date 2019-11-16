import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Typography } from "@material-ui/core";


const Addrecord = () =>{
    return(
        <div>
            <Navbar />
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
