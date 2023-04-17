import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  @media only screen and (max-width: 768px) {
    margin-top: 600px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
  opacity: ${props => props.disabled ? 0.4 : 1};
`;

const Right = styled.div`
  flex: 1;
  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Message = styled.span`
  cursor: ${props => props.point ? "pointer" : "default"};
`;


const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);
  const [ButtonDisabled, setButtonDisabled] = useState(false);
  
  const handleSubmit = (e) => {
    setSuccess(null);
    setButtonDisabled(true);
    e.preventDefault();
    emailjs
      .sendForm(
        "service_9rvv2cv",
        "template_fn9tdg2",
        ref.current,
        "c3ANeXo_hHLZ3f96S"
      )
      .then(
        (result) => {
          console.log(result.text);
          // setSuccess("Your message has been sent. We'll get back to you soon :)");
          setSuccess(1);
          setTimeout(() => {setButtonDisabled(false)}, 1000);
          
        },
        (error) => {
          console.log(error.text);
          // setSuccess("An error occurred. Please send me an email manually instead at khaled.qasim183@gmail.com");
          setSuccess(0);
          setTimeout(() => {setButtonDisabled(false)}, 1000);
        }
      );
  };
  return (
    <Section id="Contact">
      <Container>
        <Left>
          <Form ref={ref} onSubmit={handleSubmit}>
            <Title>Contact Me</Title>
            <Input placeholder="Name" name="name" required />
            <Input placeholder="Email" name="email" required />
            <TextArea
              required
              placeholder="Write your message"
              name="message"
              rows={10}
            />
            <Button  disabled={ButtonDisabled} type="submit">Send</Button>
            {(success === 1)
              ?
              <Message style={{color: "#6aff14", marginTop: "10px"}}>Your message has been sent. I will get back to you soon!</Message>
              : 
              (success === 0) ? <Message point style={{color: "#ff1414", marginTop: "10px"}} onClick={()=> location.href="mailto:khaled.qasim183@gmail.com?subject=CV Website"}>An error occurred. Please send me an email by clicking here!</Message> 
              : 
              null
              }
          </Form>
        </Left>
        <Right>
          <Map />
        </Right>
      </Container>
    </Section>
  );
};

export default Contact;