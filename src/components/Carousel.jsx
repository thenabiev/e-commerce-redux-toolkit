import React from 'react'
import { Carousel, Container } from 'react-bootstrap';
import item1 from '../assets/item1.png';
import item2 from '../assets/item2.png';
import item3 from '../assets/item3.png';



const CarouselComponent = () => {
  return (
    <Container>
     <Carousel className='carousel rounded'>
      <Carousel.Item className='img-box'>
        <img
          className="d-block"
          src={item1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Ceramic Table Vase</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='img-box'>
        <img
          className="d-block"
          src={item2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Scissor</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className='img-box'>
        <img
          className="d-block"
          src={item3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Bookends</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Container>
  )
}

export default CarouselComponent
