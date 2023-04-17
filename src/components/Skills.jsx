import React, { Suspense } from "react";
import styled from "styled-components";
const ParticleSkills = React.lazy(() => import("./ParticleSkills"));
import LoadingFallBack from "./subWorks/models/LoadingFallBack";
const Section = styled.div`
  display: flex;
  height: 100vh;
  scroll-snap-align: center;
  position: relative;
  font-size: 80px;
  font-weight: 300;
  @media only screen and (max-width: 768px) {
    height: 75vh;
  }
`;

const Container = styled.div`
  margin-top: 25%;
  display: flex;
  position: absolute;

  @media only screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 60px;
  font-weight: bold;

  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;
  color: #d409ef9e;
  @media only screen and (max-width: 768px) {
    font-size: 30px;
  }
`;
const Skills = () => {
  return (
    <Section id="SkillsParticlesSection">
      <Suspense fallback={<LoadingFallBack>Normal</LoadingFallBack>}>
        <ParticleSkills />
      </Suspense>
      <Container>
        <List>
          <ListItem>React</ListItem>
          <ListItem>Spring Boot</ListItem>
          <ListItem>Java</ListItem>
          <ListItem>Laravel</ListItem>
          <ListItem>MySQL</ListItem>
          <ListItem>Linux Scripting</ListItem>
          <ListItem>GitHub</ListItem>
        </List>
      </Container>
    </Section>
  );
};

export default Skills;
