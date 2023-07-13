import React, { useRef } from 'react'
import CustomNavigate from "../NavigationComponent/CustomNavigate"
import { Form,Button } from 'react-bootstrap'

const GetATip = () => {
  const titleRef = useRef();
  const searchATip=()=>{
    alert("hi")
  }
  return (
    <div>
      <CustomNavigate/>

      Search an Individual tip

      <Form.Control ref={titleRef} size="lg" type="text" placeholder="title" />
      <Button variant="primary" onClick={searchATip}>
        Search
      </Button>

    </div>
  )
}

export default GetATip
