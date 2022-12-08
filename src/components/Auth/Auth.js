import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useRef, useState } from "react";
import { useDispatch } from "react-redux";

import { authActions } from "../store/Auth-redux";
import { Fragment } from "react-bootstrap/dist/react-bootstrap";


function Auth() {
  console.log("insideAuth");
  const [isLogin, setIsLogin] = useState(true);
  const [isLoading, setisLoading] = useState();
  const emailInputref = useRef();
  const passwordInputref = useRef();

  const [loginState, setlogingState] = useState(false);
  const dispatch = useDispatch();

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailInputref.current.value;
    const enteredPassword = passwordInputref.current.value;

    //validatin
    setisLoading(true);
    let url;
    if (isLogin) {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyC5Fi6ch-zF-2r1Aw9q6T9JIWuKCzCoHfk";
    } else {
      url =
        "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyC5Fi6ch-zF-2r1Aw9q6T9JIWuKCzCoHfk";
    }
    fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken: true,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        setisLoading(false);
        if (res.ok) {
          //...
          return res.json();
        } else {
          //...
          return res.json().then((data) => {
            // show an error modal
            let eroorMessage = "Authentication failed";
            // if (data && data.error && data.error.message) {
            //   eroorMessage = data.error.message;
            // }

            throw new Error(eroorMessage);
          });
        }
      })
      .then((data) => {
        console.log(data);
        dispatch(authActions.login(data.idToken));
        setlogingState(true);
      })
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <Fragment>
      {loginState && <h6>coming soon</h6>}
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <Form onsubmit={submitHandler}>
        <Form.Group className="mb-3 mt-5" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            ref={emailInputref}
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            ref={passwordInputref}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>confirm Password</Form.Label>
          <Form.Control type="password" placeholder="Password" required />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="primary" type="submit" onClick={switchAuthModeHandler}>
        Signup
      </Button>
        {!isLoading && <Button>{isLogin ? "Login" : "Create Account"}</Button>}
        {isLoading && <p>Sending Request....</p>}
      </Form>
    </Fragment>
  );
}

export default Auth;
