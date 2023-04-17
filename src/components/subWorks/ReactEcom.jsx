import { useAtom } from "jotai";
import React, { useEffect } from "react";
import { SubWork, showSubWork, showSubWorkContent } from "../../App";
import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const GitHub = "https://github.com/KhaledQasim/team29frontend";

const Section = styled.div`
  width: 80vh;
  height: 100vh;
  position: relative;
  display: flex;
  font-size: 80px;
  font-weight: 300;
  justify-content: center;
  flex-direction: column;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Container = styled.div`
  order: 2;
  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const ContainerTop = styled.div`
  order: 1;

  @media only screen and (max-width: 768px) {
    width: 100%;
    height: 100%;
  }
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  margin-top: 32px;
  top: 0;
  left: 0;
  position: absolute;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  @media only screen and (max-width: 768px) {
    position: relative;
    margin-top: 0px;
    font-size: 10px;
    width: 100px;
  }
`;

const TextBox = styled.div`
  /* background-color: #ffffffb4; */
  color: #00ffe1;
  text-decoration: underline;
  cursor: pointer;
  font-size: 40px;
  @media only screen and (max-width: 768px) {
    font-size: 20px;
  }
`;

const ReactEcom = () => {
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
          <ContainerTop>
            <Button
              onClick={() => {
                setSubWorkShow(true);
                setSubWorkShowContent(false);
                setSubWork(null);
              }}
            >
              ← BACK
            </Button>
          </ContainerTop>
          <Container>
            <TextBox
              onClick={() => window.open(GitHub, "_blank", "noreferrer")}
            >
              Link to Code
            </TextBox>

            {/* window.location.hostname+ */}
            <Carousel
              onClickItem={(index, data) =>
                window.open(
                  data.props.children[0].props.src,
                  "_blank",
                  "noreferrer"
                )
              }
              emulateTouch={true}
              showThumbs={false}
              autoPlay={false}
              infiniteLoop={true}
              useKeyboardArrows={true}
              stopOnHover={true}
              animationHandler="slide"
            >
              <div>
                <img src="/img/Works/ReactEcom/ReactEcomHomePage.gif" />
                <p className="legend">Clean Landing Page</p>
              </div>

              <div>
                <img src="/img/Works/ReactEcom/adminAndNotification.png" />
                <p className="legend">
                  Admin Landing Page with User and Order Stats , Also
                  Notification System Indicating Low/No Product Stock Levels.
                </p>
              </div>
              <div>
                <img src="/img/Works/ReactEcom/adminAndNotificationLight.png" />
                <p className="legend">In Light Mode</p>
              </div>

              <div>
                <img src="/img/Works/ReactEcom/ManageProducstAndCvsExport.png" />
                <p className="legend">Manage Products</p>
              </div>
              <div>
                <img src="/img/Works/ReactEcom/ManageProducstAndCvsExportLight.png" />
                <p className="legend">Manage Products In Light Mode</p>
              </div>

              <div>
                <img src="/img/Works/ReactEcom/ManageOrders.png" />
                <p className="legend">Manage Orders</p>
              </div>
              <div>
                <img src="/img/Works/ReactEcom/ManageOrdersLight.png" />
                <p className="legend">Manage Orders In Light Mode</p>
              </div>

              <div>
                <img src="/img/Works/ReactEcom/Calendar.png" />
                <p className="legend">Fully Working Calendar App</p>
              </div>
              <div>
                <img src="/img/Works/ReactEcom/CalendarLight.png" />
                <p className="legend">In Light Mode</p>
              </div>

              <div>
                <img src="/img/Works/ReactEcom/GeoBasedUserAccounts.png" />
                <p className="legend">
                  Geography Based Traffic using User's Account Country of Origin
                  according to their IP of when the account was created.
                </p>
              </div>

              <div>
                <img src="/img/Works/ReactEcom/Collection.png" />
                <p className="legend">Products Collection Page</p>
              </div>
              <div>
                <img src="/img/Works/ReactEcom/Jeans.png" />
                <p className="legend">Products : Jeans</p>
              </div>
              <div>
                <img src="/img/Works/ReactEcom/SingleJean.png" />
                <p className="legend">Singular Jean Product</p>
              </div>
            </Carousel>
          </Container>
        </Section>
      ) : null}
    </>
  );
};

export default ReactEcom;
