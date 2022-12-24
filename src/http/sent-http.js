import axios from "axios";
import { useEffect, useState } from "react";

const useSendDataHttp = () => {
  let email = localStorage.getItem("Email").replace(".", "").replace("@", "");

  const [resmails, setMails] = useState([]);

  useEffect(() => {
    setInterval(() => {
      axios
        .get(
          `https://mail-box01-default-rtdb.firebaseio.com/${email}/sent.json`
        )
        .then((res) => {
          //   console.log(res.data);
          setMails(res.data);
        })
        .catch((err) => {
          //   console.log(err);
        });
    }, 2000);
  }, [email]);

  if (resmails === null) {
    return "";
  }

  const result = Object.values(resmails);
  result.reverse();

  return result;
};

export default useSendDataHttp;
