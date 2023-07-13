import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./analysis.module.scss";
import CustomNavigate from "../NavigationComponent/CustomNavigate";

const GetAllAnalysis = () => {
  const [analysis, setAnalysis] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/analysis/", {
      method: "Get",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((analysis) => {
        setAnalysis(analysis);
      })
      .catch((err) => {});
  }, []);

  const deleteArticle = (id) => {
    console.log("hi");
    fetch(`http://127.0.0.1:8000/api/analysis/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((analysis) => {
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
      Get All analysis
      {analysis.length === 0 ? (
        <div>
          <h1>No analysis to display</h1>
          <h3>Create analysis?</h3>
          <Button
            onClick={() => {
              navigate(`/createanalysis`);
            }}
          >
            Create analysis
          </Button>
        </div>
      ) : (
        
        analysis.map((an) => {
          return (
            <div key={an.id}>
            {console.log(an)}

              <h1>{an.id}</h1>
              <h3>{an.title}</h3>
              <p>{an.content}</p>
              <Button
                onClick={() => {
                  navigate(`/editanalysis/${an.id}`);
                }}
              >
                Edit
              </Button>
              <div className={styles.space}></div>

              <Button
                onClick={() => {
                  deleteArticle(an.id);
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

export default GetAllAnalysis;
