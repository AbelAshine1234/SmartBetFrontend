import React from 'react'
import styles from "./tips.module.scss"
import { Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import CustomNavigate from "../NavigationComponent/CustomNavigate";



const Tip = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.button_container}>
      <CustomNavigate/>
      <h1>Tips</h1>
      <Button onClick={()=>{
        navigate(`/getalltips`)
      }} style={{width:420, backgroundClip:'white'}}>Get ALL TIPS</Button>
      <Button 
      onClick={()=>{
        navigate("/createtip")
      }}
      style={{width:420, backgroundClip:'white'}}>Create Tip</Button>
      {/* <Button 
       onClick={()=>{
        navigate("/getatip")
      }}
      style={{width:420, backgroundClip:'white'}}>Get a tip</Button>
      <Button style={{width:420, backgroundClip:'white'}}>Get ALL TIPS</Button> */}

    </div>
  )
}

export default Tip
