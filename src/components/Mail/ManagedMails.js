import { Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Badge from 'react-bootstrap/Badge';
import Mailfirst from "./ComposeMailt";
import Inbox from "./Inbox";
import ShowsentMail from "./SentMails";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";

import useReceivedDataHttp from "../../http/received-http";
import { useHistory } from "react-router-dom";

function ManagedMails() {
  const history = useHistory();

  const buttonHandler = () => {
    console.log("insidebutton");
    localStorage.removeItem("Email");
    history.replace("/auth");
  };
  // let countmessage = props;
  let count = 0;
  const result = useReceivedDataHttp();
  // console.log(result);

  if (result.length == 0) {
    count = 0;
  } else {
    result.map((item) => {
      if (item.read === true) count++;
    });
  }

  return (
    <Fragment>
      <div>
        <Navbar bg="primary" variant="dark" className="justify-content-top">
          <Container>
            <Navbar.Brand>Mailbox-------<Badge bg="danger">{count}</Badge></Navbar.Brand>
            <Navbar.Collapse className="justify-content-end">
              <Button variant="primary" onClick={buttonHandler}>
                logout
              </Button>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <Tabs
        defaultActiveKey="compose"
        id="fill-tab-example"
        className="mb-3"
        justify
      >
        <Tab eventKey="compose" title="COMPOSE">
          <Mailfirst />
        </Tab>
        <Tab eventKey="Inbox" title="INBOX">
          <Inbox />
        </Tab>
        <Tab eventKey="sent" title="SENT">
          <ShowsentMail />
        </Tab>
      </Tabs>
    </Fragment>
  );
}

export default ManagedMails;
