// import React, { useEffect, useState } from "react";
// import axios from "axios";
import AllEmails from "./Allemails";
// import ManagedMails from "./ManagedMails";
import useReceivedDataHttp from "../../http/received-http";

const ShowEmail = (props) => {
  //   const id = Math.random();

  // console.log("inside show Emails");
  // let email = localStorage.getItem("Email").replace(".", "").replace("@", "");

  // const [resmails, setMails] = useState([]);

  // useEffect(() => {
  //   setInterval(() => {
  //     axios
  //       .get(
  //         `https://mail-box01-default-rtdb.firebaseio.com/${email}/received.json`
  //       )
  //       .then((res) => {
  //         console.log(res.data);
  //         setMails(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }, 2000);
  // }, []);

  // if (resmails === null) {
  //   return <h2>You have no mail</h2>;
  // }
  // let count = 0;
  // const result = Object.values(resmails);
  // result.reverse();
  // result.map((item) => {
  //   if(item.read === true) count++;
  // })
  // console.log("logcount",count);
  // <ManagedMails count={count} />
  const result = useReceivedDataHttp();
  // console.log(result);

  return (
    <>
      {result.map((item) => (
        
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
