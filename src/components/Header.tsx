import React, { useState, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Image from "next/image";
import slide1 from "../../public/Images/slide1.jpeg";
import slide2 from "../../public/Images/slide12.jpeg";
import slide3 from "../../public/Images/slide3.jpeg";
import slide4 from "../../public/Images/slide4.jpeg";
import card1 from "../../public/Images/card1.png";
import card2 from "../../public/Images/card2.png";
import card3 from "../../public/Images/card3.png";
import card4 from "../../public/Images/card4.png";
import Navbar from "./Navbar";
import Play from "../../public/Images/play.png";
import Pause from "../../public/Images/pause.png";
import Ellipse from "../../public/Images/Ellipse.png"

const Header = () => {
  const slideBackgroundColors = ["#360058", "#156f29", "#c60087", "#782f02"];
  const slideBackgroundImages = [card1, card2, card3, card4];
  const slideWidths = ["400px", "430px", "400px", "400px"];
  const slideHeights = ["450px", "450px", "450px", "450px"];
  const slides = [slide1, slide2, slide3, slide4];
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const slideText1 = {
    heading: "Heading1",
    ownerImg : Ellipse,
    owner: "ddedejehdeb",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque",
  };

  const slideText2 = {
    heading: "Heading2",
    ownerImg : Ellipse,
    owner: "ddedejehdeb",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque",
  };

  const slideText3 = {
    heading: "Heading3",
    ownerImg : Ellipse,
    owner: "ddedejehdeb",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem",
  };

  const slideText4 = {
    heading: "Heading4",
    ownerImg : Ellipse,
    owner: "ddedejehdeb",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque",
  };

  const slideText = [slideText1, slideText2, slideText3, slideText4];

  useEffect(() => {
    let interval = null;

    if (!isPaused) {
      interval = setInterval(() => {
        setCurrentSlide((prevSlide) =>
          prevSlide === slides.length - 1 ? 0 : prevSlide + 1
        );
      }, 3000);
    }

    return () => clearInterval(interval);
  }, [slides.length, isPaused]);

  const handleSlideChange = (index: number) => {
    setCurrentSlide(index);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  return (
    <div style={{ margin: "0 auto", height: "100vh", position: "relative" }}>
      <Image
        src={slideBackgroundImages[currentSlide]}
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={100}
      />

      <div style={{ position: "relative", zIndex: 1 }}>
        <Navbar />
        <Carousel
          showArrows={true}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={false}
          selectedItem={currentSlide}
          onChange={handleSlideChange}
        >
          {slides.map((slide, index) => (
            <div
              key={index}
              style={{
                width: "1200px",
                marginLeft: "90px",
                marginTop: "-25px",
                height: "500px",
                paddingTop: "30px",
                marginBottom: "70px",
                display: "flex",
                flexDirection: "row",
              }}
            >
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  style={{
                    width: slideWidths[index],
                    height: slideHeights[index],
                  }}
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                />
              </div>
              <div
                style={{
                  width: "50%",
                  display: "flex",
                  alignItems: "center",
                  flexDirection: "column",
                  justifyContent: "center",
                  paddingLeft: "30px",
                }}
              >
                <div className="t-right">
                  <ul style={{textAlign: "left"}}>
                    <li>{slideText[index].heading}</li>
                    {/* <li style={{ display: "flex", alignItems: "center" }}>
                      <Image src={slideText[index].ownerImg} alt="Owner Image" width={2} height={2} />
                      <span style={{ marginLeft: "5px" }}>{slideText[index].owner}</span>
                    </li> */}
                    <li><span style={{ marginLeft: "5px" }}>{`by       ${slideText[index].owner}`}</span></li>
                    <li>
                      {slideText[index].description}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
        <button 
        onClick={togglePause} 
        style={{marginLeft: "103vh", marginTop: "-2vh"}}
        >
          {isPaused ? <img src={Play.src} alt="play" style={{width: "40px"}}/> : <img src={Pause.src} alt="pause" style={{width: "40px"}}/>}
        </button>
      </div>
    </div>
  );
};

export default Header;