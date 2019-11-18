import React from "react";

import { MDBContainer } from "mdbreact";
import { Modal, Fade, Backdrop } from "@material-ui/core";
import Editrecord from "../../Pages/Editrecord/Editrecord";
const ModalComponent = props => {
  return (
    <div>
      {console.log("props.opem", props)}
      <MDBContainer fluid>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center"
          }}
          open={props.open}
          onClose={props.handleModal}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500
          }}
        >
          <Fade in={props.open}>
            <div
              style={{
                backgroundColor: "#f7f7f7",
                // border: "2px solid #000",
                // boxShadow: the,
                height: 600,
                width: 1000,
                padding: 16,
                overflow: "scroll"
              }}
            >
              <Editrecord
                item={props.item}
                handleModal={props.handleModal}
                getAllRecords={props.getAllRecords}
              />
            </div>
          </Fade>
        </Modal>
      </MDBContainer>
    </div>
  );
};

export default ModalComponent;
