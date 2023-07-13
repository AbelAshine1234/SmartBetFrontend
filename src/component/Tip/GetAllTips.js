import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./tips.module.scss";
import CustomNavigate from "../NavigationComponent/CustomNavigate";

const GetAllTips = () => {
  const [tips, setTips] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/tips/", {
      method: "Get",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((tips) => {
        setTips(tips);
      })
      .catch((err) => {});
  }, []);

  const deleteTip = (id) => {
    console.log("hi");
    fetch(`http://127.0.0.1:8000/api/tips/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((tips) => {
        alert("deleted");
        window.location.reload(false);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <CustomNavigate />
      <div className={styles.space}></div>
      Get All Tips
      {tips.length === 0 ? (
        <div>
          <h1>No tips to display</h1>
          <h3>Create tips?</h3>
          <Button
            onClick={() => {
              navigate(`/createtip`);
            }}
          >
            Create tips
          </Button>
        </div>
      ) : (
        tips.map((tip) => {
          return (
            <div key={tip.id}>
              <h1>{tip.id}</h1>
              <h3>{tip.title}</h3>
              <p>{tip.content}</p>
              <Button
                onClick={() => {
                  navigate(`/editatip/${tip.id}`);
                }}
              >
                Edit
              </Button>
              <div className={styles.space}></div>

              <Button
                onClick={() => {
                  deleteTip(tip.id);
                }}
              >
                Delete
              </Button>
            </div>
          );
        })
      )}
    </div>
  );
};

export default GetAllTips;
