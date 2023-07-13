import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Button} from 'react-bootstrap';
import styles from "./analysis.module.scss"
import CustomNavigate from "../NavigationComponent/CustomNavigate";

const Analysis = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.button_container}>
      <CustomNavigate/>
      <h1>Articles</h1>
      <Button onClick={()=>{
        navigate(`/getallanalysis`)
      }} style={{width:420, backgroundClip:'white'}}>Get ALL Analysis</Button>
      <Button 
      onClick={()=>{
        navigate("/createanalysis")
      }}
      style={{width:420, backgroundClip:'white'}}>Create an analysis</Button>
      

    </div>
  )
}

export default Analysis
