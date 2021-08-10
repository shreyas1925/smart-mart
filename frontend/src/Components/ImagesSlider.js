import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import styled from "styled-components";

const ImagesSlider = () => {
  let settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slideToShow: 1,
    slideToScroll: 1,
    autoplay: true,
  };

  return (
    <Carousel {...settings}>
      <Wrap>
        <img src="../images/banner.jpg" />
      </Wrap>
      <Wrap>
        <img src="../images/banner2.jpg" />
      </Wrap>
      <Wrap>
        <img src="../images/banner3.jpg" />
      </Wrap>
    </Carousel>
  );
};

export default ImagesSlider;

const Carousel = styled(Slider)`
  margin-top: 20px;

  .slick-list {
    overflow: visible;
  }
  ul li button {
    &:before {
      font-size: 10px;
      color: rgb(150, 158, 171);
    }
  }

  button {
    z-index: 1;
  }

  li.slick-active button::before {
    color: white;
  }
`;

const Wrap = styled.main`
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    border-radius: 4px;
    border: 4px solid transparent;
    transition: 0.4s;
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
      rgb(0 0 0 / 73%) 0px 16px 10px -10px;

    &:hover {
      border: 4px solid rgba(249, 249, 249, 0.8);
    }
  }
`;
