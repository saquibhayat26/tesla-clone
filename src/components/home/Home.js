import React from "react";
import styled from "styled-components";
import Section from "./../section/Section";

function Home() {
  return (
    <div className="home">
      <Container>
        <Section
          title="Model-S"
          decription="Order Online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftButton="Custom order"
          rightButton="Existing inventory"
        />
        <Section
          title="Model-X"
          decription="Order Online for Touchless Delivery"
          backgroundImg="model-x.jpg"
          leftButton="Custom order"
          rightButton="Existing inventory"
        />
        <Section
          title="Model-Y"
          decription="Order Online for Touchless Delivery"
          backgroundImg="model-y.jpg"
          leftButton="Custom order"
          rightButton="Existing inventory"
        />
        <Section
          title="Model-3"
          decription="Order Online for Touchless Delivery"
          backgroundImg="model-3.jpg"
          leftButton="Custom order"
          rightButton="Existing inventory"
        />
        <Section
          title="Lowest Cost Solar Pannel in America"
          description={"Money-back guarantee"}
          backgroundImg={"solar-panel.jpg"}
          leftButton="Order Now"
          rightButton={"Learn More"}
        />
        <Section
          title="Solar for New Roofs"
          description={
            "Solar Roof Costs Less Than a New Roof Plus Solar Pannels"
          }
          backgroundImg={"solar-roof.jpg"}
          leftButton="Order Now"
          rightButton={"Learn More"}
        />
        <Section
          title="Accessories"
          description={""}
          backgroundImg={"accessories.jpg"}
          leftButton="Shop Now"
        />
      </Container>
    </div>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  overflow-y: scroll;
  overflow-x: hidden;
`;
