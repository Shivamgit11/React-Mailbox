
import axios from "axios";
import { useEffect, useState } from "react";

const useReceivedDataHttp = () => {
  let email = localStorage.getItem("Email").replace(".", "").replace("@", "");

  const [resmails, setMails] = useState([]);

  useEffect(() => {
    setInterval(() => {
      axios
        .get(
          `https://mailbox-c3cf7-default-rtdb.firebaseio.com/${email}/received.json`
        )
        .then((res) => {
          // console.log(res.data);
          setMails(res.data);
        })
        .catch((err) => {
          // console.log(err);
        });
    }, 2000);
  }, [email]);

  
  // let result1 = <h1>you have no mail</h1>
  if (resmails === null) {
    return "";
  }

  const result = Object.values(resmails);
  result.reverse();

  return result;
};

export default useReceivedDataHttp;
