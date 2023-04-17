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

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;
  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  const handleClickScroll = (id) => {
    const element = document.getElementById(id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section>
      <Container>
        <Links>
          <Logo src="/img/logo.png" />
          <List>
            <ListItem onClick={() => handleClickScroll("Hero")}>Home</ListItem>
            <ListItem onClick={() => handleClickScroll("Who")}>About Me</ListItem>
            <ListItem onClick={() => handleClickScroll("Work")}>Work</ListItem>
            <ListItem onClick={() => handleClickScroll("Contact")}>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          

          <Button
            onClick={() =>
              (location.href =
                "mailto:khaled.qasim183@gmail.com?subject=CV Website")
            }
          >
            Hire Now
          </Button>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
