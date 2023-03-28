import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  function handleClick() {
    setInterval(navigate("/"), 3000);
    alert("sucessfully logged In and redirecting to Home");
  }

  return (
    <Form className="formdetail" onSubmit={handleClick}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          name="email"
          id="emailaddress"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          id="Userpassword"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default Login;
