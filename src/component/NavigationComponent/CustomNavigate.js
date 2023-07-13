import React from 'react'
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const CustomNavigate = () => {
    const navigate=useNavigate();
  return (
    <div>
      <Button onClick={()=>{
        navigate("/dashboard");
      }}> Home</Button>
      <Button onClick={()=>{
        navigate(-1);
      }}> Go Back</Button>
    </div>
  )
}

export default CustomNavigate
