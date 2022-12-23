import { Fragment } from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import Mailfirst from "./ComposeMailt";
import Inbox from "./Inbox";
import ShowsentMail from "./SentMails";
import { Badge, Button } from "react-bootstrap";
import useSentDataHttp from "../../http/received-http";


function ManagedMails() {
  // let countmessage = props;
  let count = 0;
  const result = useSentDataHttp();
  result.map((item) => {
    if (item.read === true) count++;
  });

  return (
    <Fragment>
      <div className="d-grid gap-2">
        <Button variant="primary" size="lg" href="/mail">
          @Shivam-MailBox--"{count}"
        </Button>
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
