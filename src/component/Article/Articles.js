import React from 'react'
import styles from "./articles.module.scss"
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CustomNavigate from "../NavigationComponent/CustomNavigate";



const Article = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.button_container}>
      <CustomNavigate/>
      <h1>Articles</h1>
      <Button onClick={()=>{
        navigate(`/getallarticles`)
      }} style={{width:420, backgroundClip:'white'}}>Get ALL ARTICLES</Button>
      <Button 
      onClick={()=>{
        navigate("/createanrticle")
      }}
      style={{width:420, backgroundClip:'white'}}>Create an article</Button>
      {/* <Button 
       onClick={()=>{
        navigate("/getatip")
      }}
      style={{width:420, backgroundClip:'white'}}>Get a tip</Button>
      <Button style={{width:420, backgroundClip:'white'}}>Get ALL TIPS</Button> */}

    </div>
  )
}

export default Article
