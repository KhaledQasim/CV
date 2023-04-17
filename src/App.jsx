import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import "./App.css";
import Particle from "./components/Particle";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import { atom } from "jotai";
import { useRef } from "react";
import ParticleSkills from "./components/ParticleSkills";
const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  /* background: url("./img/bg.jpeg"); */
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const SubWork = atom(null);
export const showSubWork = atom(true);
export const showSubWorkContent = atom(true);
function App() {
  const ref = useRef(null);

  return (
    <>
      <Particle />
      
      <Container>
        <Navbar />
        <Hero />
        <Who />
        <Works/>
        <Contact />
      </Container>
    </>
  );
}

export default App;
