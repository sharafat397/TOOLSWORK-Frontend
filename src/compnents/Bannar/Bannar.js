import React from "react";
import { Badge, Carousel } from "react-bootstrap";
import './Bannar.css'
const Bannar = () => {
  return (
    <div>
      <Carousel className="bg-light">
      <Carousel.Item interval={1000}>
          <div className="Caro_background">
            <div className="Caro_Title">
                <h1>Grand Mughal Restaurant</h1>
            </div>
            <div className="d-flex">
              <div className="Caro_Details">
              <h1> Restaurant CMP Plaza</h1> 
              <h1>Closed soon ⋅<Badge bg="success"> 11PM</Badge>
                    </h1>
              </div>
              <div>
              <img
                  className="Caro_img"
                  src="https://scontent.fcgp31-1.fna.fbcdn.net/v/t1.6435-9/30261275_595232470828055_5506039350669869056_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=WgIeWA3FsJ8AX9310-F&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfBLreU9XWhSDbBNzv3CudFqQU_WI84DESWWxvSirlyuSw&oe=63D66CD9"
                  alt="First slide"
                  width="400"
                  height="300"
              />
              </div>
            </div>
          </div>
        </Carousel.Item>


        <Carousel.Item interval={1000}>
          <div className="Caro_background">
            <div className="Caro_Title">
                <h1>The Pavilion</h1>
            </div>
            <div className="d-flex">
              <div className="Caro_Details">
              <h1> Restaurant
                    787 Avenue Center, CDA Ave Closes soon ⋅<Badge bg="success"> 3:30PM</Badge>
                    </h1>
              </div>
              <div>
              <img
                  className="Caro_img"
                  src="https://lh3.googleusercontent.com/p/AF1QipOY8zpq6uRm6YYmVY2Qfjw9QOTag5mp_p-gmwVk=s1600-w600"
                  alt="First slide"
                  width="400"
                  height="300"
              />
              </div>
            </div>
          </div>
        </Carousel.Item>

        <Carousel.Item interval={1000}>
          <div className="Caro_background">
            <div className="Caro_Title">
                <h1>Pitstop Restaurant</h1>
            </div>
            <div className="d-flex">
              <div className="Caro_Details">
              <h1>  CDA Avenue, Ispahani Circle, Lalkhan Bazar Cir, Chattogram 4000</h1>
                    <h1> Closes soon ⋅<Badge bg="success"> 10:00PM</Badge>
                    </h1>
              </div>
              <div>
              <img
                  className="Caro_img"
                  src="https://scontent.fcgp31-1.fna.fbcdn.net/v/t39.30808-6/255144301_4819096558133766_5521832428002748360_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=aEVjhffRvX0AX_p_oZD&_nc_ht=scontent.fcgp31-1.fna&oh=00_AfCJxW2i_xDseNVuI53-SHadnIiqfL1HxIeAjc5yeiXkYQ&oe=63B3ECC3"
                  alt="First slide"
                  width="400"
                  height="300"
              />
              </div>
            </div>
          </div>
        </Carousel.Item>

        
        
      </Carousel>
    </div>
  );
};

export default Bannar;
