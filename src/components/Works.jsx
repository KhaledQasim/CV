import React, { useState } from "react";
import styled from "styled-components";
// import Development from "./Development";
// import ProductDesign from "./ProductDesign";
// import WebDesign from "./WebDesign";
import PastProjects from "./PastProjects";
import Skills from "./Skills";
import CV from "./CV";
import { useAtom } from "jotai";
import { SubWork, showSubWork, showSubWorkContent } from "../App";

const data = ["Past Projects", "Valuable Skills", "CV Document"];

const Button = styled.button`
  position: absolute;

  bottom: 50%;

  left: 15%;
  background-color: #da4ea2;
  justify-content: center;
  color: white;
  font-weight: 500;
  width: 500px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;

  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 90px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  @media only screen and (min-width: 769px) and (max-width: 1198px) {
    
    color: #b308f79e;
    -webkit-text-stroke: 0px;
    ::after{
      display: none;
    }
  }
  @media only screen and (max-width: 768px) {
    font-size: 30px;
    color: #b308f79e;
    -webkit-text-stroke: 0px;
    ::after{
      display: none;
    }
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: #f7e3089e;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }
  &:hover {
    ::after {
      animation: moveText 0.5s linear both;
      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [Subwork, setSubWork] = useAtom(SubWork);
  const [SubWorkShow, setSubWorkShow] = useAtom(showSubWork);
  const [SubWorkShowContent, setSubWorkShowContent] =
    useAtom(showSubWorkContent);
  const [work, setWork] = useState("");
  return (
    <Section id="Work">
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem
                key={item}
                text={item}
                onClick={() => {
                  setWork(item);
                  if (work === "Past Projects" || item === "Past Projects") {
                    setSubWorkShow(true);
                    setSubWorkShowContent(false);
                    setSubWork(null);
                  }
                }}
              >
                {item}
              </ListItem>
            ))}
          </List>
        </Left>
        <Right>
          {work === "Past Projects" ? (
            <PastProjects />
          ) : work === "Valuable Skills" ? (
            <Skills />
          ) : work === "CV Document" ? (
            <CV />
          ) : null}
        </Right>
      </Container>
    </Section>
  );
};

export default Works;
