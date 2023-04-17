import React, { useEffect, useState } from "react";
import styled from "styled-components";
import ReactWork from "./subWorks/ReactEcom";
import { useAtom } from "jotai";
import { SubWork, showSubWork, showSubWorkContent } from "../App";
import Test from "./subWorks/LaravelGalleryApp";
import LaravelGalleryApp from "./subWorks/LaravelGalleryApp";
import NFC from "./subWorks/NFC";
import SpringBootJWT from "./subWorks/SpringBootJWT";
const data = [
  "NFC Encryption Cracking and Cloning",
  "React E-Commerce and Admin Page",
  "Laravel Gallery App and Admin Page",
  "Spring Boot E-Commerce Backend using JWT Authentication",
];

const Section = styled.div`
  height: 100%;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
 
`;

const Container = styled.div`
  display: flex;

  justify-content: space-between;
  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
`;

const ListItem = styled.li`
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  color: gold;
 
  position: relative;
  
  @media only screen and (max-width: 768px){
    font-size: 24px;
  
    

  }
 
  
`;
const PastProjects = () => {
  useEffect(() => {
    setSubWorkShow(true);
  }, []);
  const [SubWorkShow, setSubWorkShow] = useAtom(showSubWork);
  const [SubWorkShowContent, setSubWorkShowContent] =
    useAtom(showSubWorkContent);
  const [Subwork, setSubWork] = useAtom(SubWork);

  return (
    <Section>
      <Container>
        <List>
          {SubWorkShow
            ? data.map((item) => (
                <ListItem
                  key={item}
                  text={item}
                  onClick={() => {
                    setSubWork(item);
                  }}
                >
                  {item}
                </ListItem>
              ))
            : null}
        </List>
        {Subwork === "React E-Commerce and Admin Page" ? (
          <ReactWork />
        ) : Subwork === "Laravel Gallery App and Admin Page" ? (
          <LaravelGalleryApp />
        ) : Subwork === "NFC Encryption Cracking and Cloning" ? (
          <NFC />
        ) : Subwork ===
          "Spring Boot E-Commerce Backend using JWT Authentication" ? (
          <SpringBootJWT />
        ) : null}
      </Container>
    </Section>
  );
};

export default PastProjects;
