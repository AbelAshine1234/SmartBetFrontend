import React from "react";
import { useNavigate } from "react-router-dom";
import { Button, Container, Row, Col } from "react-bootstrap";
import styles from "./dashboard.module.scss";

const DashBoard = () => {
  const navigate = useNavigate();

  const thingsToLook = ["tips", "articles", "analysis", "users"];

  const linkto = (thing) => {
    navigate(`/${thing}`);
  };

  return (
    <Container fluid>
      <Row className={styles.dashboard}>
        <Col>
          <h1>Welcome</h1>
        </Col>
      </Row>
      <Row className={styles.lists}>
        {thingsToLook.map((thing) => (
          <Col key={thing} xs={6} md={3} className="mb-3">
            <Button variant="primary" onClick={() => linkto(thing)}>
              {thing}
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default DashBoard;