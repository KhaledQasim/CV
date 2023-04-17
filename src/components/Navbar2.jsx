import React from "react";
import styled from "styled-components";

const Section = styled.div`
  scroll-snap-align: center;
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.nav`
  width: 1400px;
  display: flex;
  height: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;
const Navbar2 = () => {
  return (
    <Section>
      <Container>
        <div>s</div>
        <div>s</div>
        <div>s</div>
      </Container>
    </Section>
  );
};

export default Navbar2;
