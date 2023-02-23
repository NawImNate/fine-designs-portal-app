import React from "react";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ marginTop: "15vh" }}
    >
      <div
        className="p-4 rounded bg-white shadow login-form"
        style={{ maxWidth: "500px" }}
      >
        <Form>
          <h3 className="mb-4">Sign In</h3>
          <Form.Group controlId="loginEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="neville@hogwarts.edu" />
          </Form.Group>
          <Form.Group controlId="loginPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="********" />
          </Form.Group>
          <Button
            variant="primary"
            type="submit"
            className="w-100 mt-3 login-btn"
          >
            Login
          </Button>
          <div className="d-flex justify-content-center mt-3">
            <hr className="w-25 my-0" />
            <span className="px-2">
              Can't login? | <Link to="/api/users">Register</Link>
            </span>
            <hr className="w-25 my-0" />
          </div>
        </Form>
      </div>
    </div>
  );
};

export default Login;
