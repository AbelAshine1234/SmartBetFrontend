import React, { useEffect } from "react";
import CustomNavigate from "../NavigationComponent/CustomNavigate";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const EditTip = (props) => {
  const param = useParams();
  const [tip, setTip] = useState();
  const contentRef = useRef();
  const titleRef = useRef();
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/tips/${param.id}/`, {
      method: "Get",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((t) => {
        // console.log(t["content"])
        setTip(t);
      })
      .catch((err) => {});
  }, []);
  const changetitle = (title) => {
    const data={
        "title":title
    }
    fetch(`http://127.0.0.1:8000/api/tips/title/${param.id}/`, {
        method: "PUT",
        headers: {  
          "Content-type": "application/json; charset=UTF-8",
        },
        body:JSON.stringify(data)
        
      })
        .then((res) => res.json())
        .then((t) => {
           window.location.reload(false)
        })
        .catch((err) => {});
  };
  const changecontent=(content)=>{
    const data={
        "content":content
    }
    fetch(`http://127.0.0.1:8000/api/tips/content/${param.id}/`, {
        method: "PUT",
        headers: {  
          "Content-type": "application/json; charset=UTF-8",
        },
        body:JSON.stringify(data)
        
      })
        .then((res) => res.json())
        .then((t) => {
           window.location.reload(false)
        })
        .catch((err) => {});
  };
  return (
    <div>
      <CustomNavigate />
      <div style={{ margin: 100 }}></div>
      <Accordion defaultActiveKey="0" flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>{tip && tip.title} </Accordion.Header>
          <Accordion.Body>{tip && tip.content}</Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Form.Control
        ref={titleRef}
        size="lg"
        type="text"
        placeholder={tip === undefined ? "" : tip.title}
      />
      <Button onClick={()=>{
            changetitle(titleRef.current.value)
      }}>Change Title</Button>
      <br />

      <InputGroup>
        <Form.Control
          ref={contentRef}
          style={{ height: 500 }}
          as="textarea"
          aria-label="With textarea"
          placeholder={tip === undefined ? "" : tip.content}
        />
      </InputGroup>
      <br />
      <Button  onClick={()=>{
        changecontent(contentRef.current.value);
      }} variant="primary">Change Content</Button>
    </div>
  );
};

export default EditTip;
