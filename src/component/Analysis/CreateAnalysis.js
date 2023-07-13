import React, { useRef, useState } from "react";
import { InputGroup, Form, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import CustomNavigate from "../NavigationComponent/CustomNavigate";

const CreateAnalysis = () => {
  const [tip, setTip] = useState();
  const contentRef = useRef();
  const titleRef = useRef();
  const oncreated = (event) => {
    event.preventDefault();
    const analysis = {
      title: titleRef.current.value,
      content: contentRef.current.value,
    };

    fetch(`http://127.0.0.1:8000/api/analysis/`, {
      method: "POST",
      body: JSON.stringify(analysis),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((tip) => {
        setTip(tip);
      })
      .catch((err) => {
        console.log(err);
        alert("error");
      });
  };
  return (
    <>
    <CustomNavigate/>
      <h1>Create an analysis</h1>
      {tip === undefined ? (
        <p></p>
      ) : (
        <div>
          <h1>Created</h1>
          <p>{tip.title}</p>
          <p>{tip.content}</p>
        </div>
      )}
      <Form.Control ref={titleRef} size="lg" type="text" placeholder="title" />
      <br />
      <InputGroup>
        <Form.Control
          ref={contentRef}
          style={{height:500}}
          as="textarea"
          aria-label="With textarea"
          placeholder="content"
        />
      </InputGroup>
      <br />
      <Button variant="primary" onClick={oncreated}>
        Create
      </Button>
    </>
  );
};
export default CreateAnalysis;
