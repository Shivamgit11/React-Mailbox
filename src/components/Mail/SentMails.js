import React, { Fragment, useEffect, useState } from "react";
import axios from "axios";

import SentMailss from "./SentMailsDesign";
import { useSelector } from "react-redux";
import useSendDataHttp from "../../http/sent-http";

const ShowsentMail = (props) => { 
  const result2 = useSendDataHttp(); 
  
  // console.log(result2);
  //   const id = Math.random();

  // console.log("inside show Emails");
  // let email = localStorage.getItem("Email").replace(".", "").replace("@", "");

  // const [resmails, setMails] = useState([]);
  let sendMails11 = useSelector((state) => state.email.sentEmails);
  console.log(sendMails11);
  console.log(result2);
  if(result2.length === 0) {
    return <h1>If you have no mail</h1>
  }
  // console.log(sendMails11);

  //   setTimeout(() => {
  // setInterval(() => {
  // useEffect(() => {
  //   setInterval(() => {
  //     axios
  //       .get(
  //         `https://mail-box01-default-rtdb.firebaseio.com/${email}/sent.json`
  //       )
  //       .then((res) => {
  //         console.log(res.data);

  //         setMails(res.data);
  //         console.log(setMails);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, 2000);
  // }, []);
  // }, 2000);
  //   }, 2000);

  // if (resmails === null) {
  //   return <h2>You have no mail</h2>;
  // }

  // const result = Object.values(resmails);
  // result.reverse();

  return (
    <Fragment>
      {result2.map((item) => (
        <SentMailss
          item={{
            to: item.to,
            id: item.id,
            subject: item.subject,
            message: item.message,
          }}
        />
      ))}
    </Fragment>
  );
};

export default ShowsentMail;
