import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import Particle from "./Particle";
import { Canvas } from "@react-three/fiber";
import { MeshDistortMaterial, OrbitControls, Sphere } from "@react-three/drei";

const Hero = () => {
  const Section = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
      height: 200vh;
    }
  `;

  const Container = styled.div`
    height: 100vh;
    scroll-snap-align: center;
    width: 1400px;
    display: flex;
    justify-content: space-between;
    @media only screen and (max-width: 768px) {
      width: 100%;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
  `;

  const Left = styled.div`
    flex: 2;

    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px;
    @media only screen and (max-width: 768px) {
      flex: 1;
      align-items: center;
    }
  `;

  const Right = styled.div`
    flex: 3;
    position: relative;
    @media only screen and (max-width: 768px) {
      flex: 1;
      width: 100%;
    }
  `;

  const Title = styled.h1`
    color: whitesmoke;
    font-size: 40px;
    @media only screen and (max-width: 768px) {
      text-align: center;
    }
  `;

  const WhatWeDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
  `;

  const Line = styled.img`
    height: 5px;
  `;

  const Subtitle = styled.h2`
    color: #ffffff;
  `;

  const Desc = styled.p`
    font-size: 22px;
    color: #2bebee;
    @media only screen and (max-width: 768px) {
      padding: 20px;
      text-align: center;
    }
  `;

  return (
    <Section id="Hero">
      <Container>
        <Left>
          <Title>
            A fun and interactive CV, showing my passion for learning new
            technologies.
          </Title>
          <WhatWeDo>
            {/* <Line src="./img/line.png" /> */}
            {/* <Subtitle>
              You may control the blob by mouse right click hold and drag it around
            </Subtitle> */}
          </WhatWeDo>
          <Desc>
            Don't get too close to the particles they get shy and will run.
          </Desc>
          {/* <Button>Learn More</Button> */}
        </Left>
        <Right>
          <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.2} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2}>
                <MeshDistortMaterial
                  color="#d62512"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas>

          {/* <Caption>Built With React!</Caption> */}
        </Right>

        {/* <Img src="/img/moon.png" /> */}
      </Container>
    </Section>
  );
};

export default Hero;
