import React from "react";
import { Viewer, Worker } from "@react-pdf-viewer/core";

import { defaultLayoutPlugin } from "@react-pdf-viewer/default-layout";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";
import styled from "styled-components";

import "@react-pdf-viewer/toolbar/lib/styles/index.css";

const Section = styled.div`
  display: flex;
  scroll-snap-align: center;
  color: black;
  font-size: 14px;
  font-weight: 300;
  height: 100vh;
 
`;

const Container = styled.div`
  /* height: 90vh; */


 

  
  width: 100%;
  height: 100%;
  @media only screen and (max-width: 768px) {
    flex-direction: column;
    
    width: 100%;
    height: 75vh;
   
   
  }
`;

const CV = () => {
  const DefaultPlugin = defaultLayoutPlugin();
  return (
    <Section>
      <Container className="pdf-container">
        <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.5.141/build/pdf.worker.min.js">
          <Viewer fileUrl="./CV.pdf" plugins={[DefaultPlugin]} />
        </Worker>
      </Container>
    </Section>
  );
};

export default CV;
