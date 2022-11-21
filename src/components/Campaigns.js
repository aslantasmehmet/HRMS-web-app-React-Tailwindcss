import React from "react";
import Carousel from "react-bootstrap/Carousel";

export default function campaigns() {
  return (
    <div className="mx-32 my-8">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img-kariyer.mncdn.com/WebSite/uploads/Banners/Aday/2022/10/halfgravity_20221012-155717.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img-kariyer.mncdn.com/WebSite/uploads/Banners/Aday/2022/10/halfgravity_20221012-155810.png"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://img-kariyer.mncdn.com/WebSite/uploads/Banners/Aday/2022/10/halfgravity_20221012-155830.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
