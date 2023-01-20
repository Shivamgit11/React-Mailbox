// import React, { useEffect, useState } from "react";
// import axios from "axios";
import AllEmails from "./Allemails";
// import ManagedMails from "./ManagedMails";
import useReceivedDataHttp from "../../http/received-http";

const ShowEmail = (props) => {
  const receivedmails11 = useReceivedDataHttp();
  if (receivedmails11.length === 0) {
    return <h1>YOu have no mail-- || Wait of load</h1>;
  }
  // console.log(result);

  return (
    <>
      {receivedmails11.map((item) => (
        <AllEmails
          item={{
            from: item.from,
            id: item.id,
            subject: item.subject,
            message: item.message,
            read: item.read,
          }}
        />
      ))}
    </>
  );
};

export default ShowEmail;
