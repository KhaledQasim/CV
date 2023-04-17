import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { SubWork, showSubWork, showSubWorkContent } from "../../App";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const GitHub = "https://github.com/KhaledQasim/Team29Backend";

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

const ContainerTop = styled.div`
  order: 1;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const ContainerInfo = styled.div`
  order: 2;
  display: flex;
  justify-content: center;
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

const TextBoxInfo = styled.div`
  /* background-color: #ffffffb4; */
  color: #00ffe1;


  font-size: 35px;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const SpringBootJWT = () => {
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

          <ContainerInfo>
            <TextBoxInfo>Only the register/login APIs are shown below, the code also does API authorization according to role of (admin||user).</TextBoxInfo>
          </ContainerInfo>

          <Container>
            <TextBox
              onClick={() => window.open(GitHub, "_blank", "noreferrer")}
            >
              Link To Code
            </TextBox>
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
              useKeyboardArrows="true"
              stopOnHover={true}
              animationHandler="slide"
            >
              <div>
                <img src="/img/Works/SpringBootJwt/PostRegister.png" />
                <p className="legend">
                  Register a new user, returns JWT token if successful.
                </p>
              </div>

              <div>
                <img src="/img/Works/SpringBootJwt/JwtInfo.png" />
                <p className="legend">
                  JWT token information, including the user's role.
                </p>
              </div>

              <div>
                <img src="/img/Works/SpringBootJwt/DatabaseWithUser.png" />
                <p className="legend">
                  User information in the connected MySQL database.
                </p>
              </div>

              <div>
                <img src="/img/Works/SpringBootJwt/RegisterTakenEmail.png" />
                <p className="legend">
                  Register API has validation, when sending the same register
                  request it will return a 409 error as the email is already in
                  use.
                </p>
              </div>

              <div>
                <img src="/img/Works/SpringBootJwt/RegisterNoDetails.png" />
                <p className="legend">
                  Will also require all the fields to be filled in.
                </p>
              </div>

              <div>
                <img src="/img/Works/SpringBootJwt/OkLogin.png" />
                <p className="legend">
                  Login API returns JWT token if the correct details of a
                  already registered user are provided.
                </p>
              </div>
            </Carousel>
          </Container>
        </Section>
      ) : null}
    </>
  );
};

export default SpringBootJWT;
