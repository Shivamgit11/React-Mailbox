import React, { Fragment, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";

import classes from "./Allmails.module.css";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";

const AllEmails = (props) => {
  const { from, subject, id, message, read } = props.item;

  let email = localStorage.getItem("Email").replace(".", "").replace("@", "");
  let checkread = read;
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log("inside seenlike");
    console.log(id);
    fetch(
      `https://mailbox-c3cf7-default-rtdb.firebaseio.com/${email}/received/${id}.json`,
      {
        method: "PATCH",
        body: JSON.stringify({
          read: false,
        }),
      }
    );
    setShow(true);
  };
  const handleClose1 = () => {
    fetch(
      `https://mailbox-c3cf7-default-rtdb.firebaseio.com/${email}/received/${id}.json`,
      {
        method: "DELETE",
      }
    );
    alert("Delete mail handler is working");
    console.log("bhe gel");

    setShow(false);
  };
  // console.log("inside allMails", checkread);

  //////////=====working with modals

  //////////=====working with modals

  let seenCheck = checkread === true ? "* " : " ";
  // console.log(seenCheck);

  return (
    <Fragment>
      <div>
        <Container className="justify-content-md-center" onClick={handleShow}>
          <div className={classes.dv1}>
            {/* <Link to={{ pathname: "/inbox/details", state: props }}> */}
            <Row>
              <Col>from--{from}</Col>
              <Col xs={6}>subject--{subject}</Col>
              {seenCheck}
            </Row>
            {/* </Link> */}
          </div>
        </Container>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>FROM--{from}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Subject-->{subject}</Form.Label>
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>MESAGE--{message}</Form.Label>
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={handleClose1}>
              Delete Mail
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Fragment>
  );
};

export default AllEmails;
