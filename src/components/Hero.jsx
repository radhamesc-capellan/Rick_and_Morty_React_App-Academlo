import React from 'react'
import { Card } from 'react-bootstrap'
import heroImg from '../assets/img/banner.jpg'

const Hero = () => {
  return (
    <Card className="text-center">
      
      <Card.Img style={{ height:300}} src={heroImg}  alt=''/>
      
    </Card>
  )
}

export default Hero