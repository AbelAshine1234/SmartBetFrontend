import React, { useEffect } from "react";
import CustomNavigate from "../NavigationComponent/CustomNavigate";
import { useParams } from "react-router-dom";
import { useRef, useState } from "react";
import { Form, Button, InputGroup } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

const EditArticle = (props) => {
  const param = useParams();
  const [article, setArticle] = useState();
  const contentRef = useRef();
  const titleRef = useRef();
  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/articles/${param.id}/`, {
      method: "Get",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((t) => {
        // console.log(t["content"])
        setArticle(t);
      })
      .catch((err) => {});
  }, []);
  const changetitle = (title) => {
    const data={
        "title":title
    }
    fetch(`http://127.0.0.1:8000/api/articles/title/${param.id}/`, {
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
    fetch(`http://127.0.0.1:8000/api/articles/content/${param.id}/`, {
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
          <Accordion.Header>{article && article.title} </Accordion.Header>
          <Accordion.Body>{article && article.content}</Accordion.Body>
        </Accordion.Item>
      </Accordion>

      <Form.Control
        ref={titleRef}
        size="lg"
        type="text"
        placeholder={article === undefined ? "" : article.title}
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
          placeholder={article === undefined ? "" : article.content}
        />
      </InputGroup>
      <br />
      <Button  onClick={()=>{
        changecontent(contentRef.current.value);
      }} variant="primary">Change Content</Button>
    </div>
  );
};

export default EditArticle;
