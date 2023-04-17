import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { SubWork, showSubWork, showSubWorkContent } from "../../App";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const GitHub = "https://github.com/KhaledQasim/Oreo";
const Site = "https://orekuwait.online/gallery";

const Section = styled.div`
  width: 80vh;
  height: 100vh;
  position: relative;
  display: flex;
  font-size: 80px;
  font-weight: 300;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  order: 3;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const ContainerText = styled.div`
  order: 2;
  display: flex;
  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const ContainerTop = styled.div`
  order: 1;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  margin-top: 32px;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    position: relative;
    margin-top: 0px;
    font-size: 10px;
    width: 100px;
  }
`;

const TextBoxLeft = styled.div`
  /* background-color: #ffffffb4; */
  color: #00ffe1;
  text-decoration: underline;
  cursor: pointer;
  font-size: 40px;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const TextBox = styled.div`
  /* background-color: #ffffffb4; */
  color: #00ffe1;
  text-decoration: underline;
  cursor: pointer;
  font-size: 40px;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const LaravelGalleryApp = () => {
  useEffect(() => {
    setSubWorkShow(false);
    setSubWorkShowContent(true);
  }, []);
  const [Subwork, setSubWork] = useAtom(SubWork);
  const [SubWorkShow, setSubWorkShow] = useAtom(showSubWork);
  const [SubWorkShowContent, setSubWorkShowContent] =
    useAtom(showSubWorkContent);
  return (
    <>
      {SubWorkShowContent ? (
        <Section>
          <ContainerTop>
            <Button
              onClick={() => {
                setSubWorkShow(true);
                setSubWorkShowContent(false);
                setSubWork(null);
              }}
            >
              ← BACK
            </Button>
          </ContainerTop>
          <ContainerText>
            <TextBoxLeft
              onClick={() => window.open(Site, "_blank", "noreferrer")}
            >
              Link to Site
            </TextBoxLeft>
            <TextBox
              onClick={() => window.open(GitHub, "_blank", "noreferrer")}
            >
              Link to Code
            </TextBox>
          </ContainerText>
          <Container>
            {/* window.location.hostname+ */}
            <Carousel
              onClickItem={(index, data) =>
                window.open(
                  data.props.children[0].props.src,
                  "_blank",
                  "noreferrer"
                )
              }
              emulateTouch={true}
              showThumbs={false}
              autoPlay={false}
              infiniteLoop={true}
              useKeyboardArrows={true}
              stopOnHover={true}
              animationHandler="slide"
            >
              <div>
                <img src="/img/Works/LaravelGallery/Admin.gif" />
                <p className="legend">Easy To Use Admin Page</p>
              </div>

              <div>
                <img src="/img/Works/LaravelGallery/laravelGalleryFront.gif" />
                <p className="legend">Responsive Gallery App UI</p>
              </div>
            </Carousel>
          </Container>
        </Section>
      ) : null}
    </>
  );
};

export default LaravelGalleryApp;
