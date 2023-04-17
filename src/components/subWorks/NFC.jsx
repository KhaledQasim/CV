import { useAtom } from "jotai";
import React, { Suspense, useEffect } from "react";
import { SubWork, showSubWork, showSubWorkContent } from "../../App";
import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, PerspectiveCamera } from "@react-three/drei";
const Nfc = React.lazy(() => import("./models/Nfc"));
import LoadingFallBack from "./models/LoadingFallBack";
const Section = styled.div`
  flex-direction: column;
  width: 100%;
  height: 100%;
  display: flex;
  font-size: 80px;
  font-weight: 300;
  position: relative;
  justify-content: center;
`;

const Container = styled.div`
  order: 0;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const ContainerModel = styled.div`
  order: 1;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;

  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    font-size: 10px;
  }
`;

const TextBox = styled.div`
  /* background-color: #ffffffb4; */

  color: #ff0040a4;

  font-size: 40px;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const NFC = () => {
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
          <Container>
            <Button
              onClick={() => {
                setSubWorkShow(true);
                setSubWorkShowContent(false);
                setSubWork(null);
              }}
            >
              ← BACK
            </Button>

            <TextBox>
              Used the below MFRC522 module with an Arduino to crack NFC card's
              encryption and clone it.
            </TextBox>
          </Container>
          <ContainerModel>
            <Canvas>
              <Suspense fallback={<LoadingFallBack>3D</LoadingFallBack>}>
                <PerspectiveCamera makeDefault position={[5, 5, 5]} />
                <OrbitControls autoRotate={true} />
                {/* <ambientLight args={["white",1]} intensity={0.4} /> */}
                <ambientLight args={["#ffffff", 0.4]} />
                <directionalLight position={[3, 2, 1]} />
                <Nfc scale={80} />
              </Suspense>
            </Canvas>
          </ContainerModel>
        </Section>
      ) : null}
    </>
  );
};

export default NFC;
