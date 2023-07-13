import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import styles from "./articles.module.scss";
import CustomNavigate from "../NavigationComponent/CustomNavigate";

const GetAllArticles = () => {
  const [articles, setarticles] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/articles/", {
      method: "Get",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((articles) => {
        setarticles(articles);
      })
      .catch((err) => {});
  }, []);

  const deleteArticle = (id) => {
    console.log("hi");
    fetch(`http://127.0.0.1:8000/api/articles/${id}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((articles) => {
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
      Get All articles
      {articles.length === 0 ? (
        <div>
          <h1>No articles to display</h1>
          <h3>Create articles?</h3>
          <Button
            onClick={() => {
              navigate(`/createarticle`);
            }}
          >
            Create articles
          </Button>
        </div>
      ) : (
        articles.map((tip) => {
          return (
            <div key={tip.id}>
              <h1>{tip.id}</h1>
              <h3>{tip.title}</h3>
              <p>{tip.content}</p>
              <Button
                onClick={() => {
                  navigate(`/editanarticle/${tip.id}`);
                }}
              >
                Edit
              </Button>
              <div className={styles.space}></div>

              <Button
                onClick={() => {
                  deleteArticle(tip.id);
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

export default GetAllArticles;
