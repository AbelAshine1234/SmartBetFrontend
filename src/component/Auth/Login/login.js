import React, { useRef } from "react";
import styles from "./login.module.scss";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const userName=useRef()
  
  const userPassword=useRef()
  const onSubmit=(event)=>{
    event.preventDefault();
    const user={
      "username":userName.current.value,
      "password":userPassword.current.value
    }
       
    fetch(`http://127.0.0.1:8000/api/token/`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      },
   })
      .then((res) => res.json())
      .then((user) => {
        if (user.hasOwnProperty("refresh")) {
          navigate("/dashboard"); 

          localStorage.setItem("token",user["access"])
        } else {
          alert("Not valid user")
        }      })
      .catch((err) => {
    
      });
      
  
  }
  return (
    <div className={styles.login}>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>User Name</Form.Label>
          <Form.Control ref={userName} type="TEXT" placeholder="Enter userName" />       
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control ref={userPassword} type="password" placeholder="Password" />
        </Form.Group>
        
        <Button variant="primary" type="submit" onClick={onSubmit}>
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default Login;
