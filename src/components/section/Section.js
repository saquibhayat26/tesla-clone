import React from "react";
import styled from "styled-components";
import { Fade } from "react-awesome-reveal";

function Section({
  title,
  description,
  backgroundImg,
  leftButton,
  rightButton,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Fade bottom>
        <Buttons>
          <ButtonGroup>
            <LeftButton>{leftButton}</LeftButton>
            {rightButton && <RightButton>{rightButton}</RightButton>}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Buttons>
      </Fade>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  display: flex;
  flex-direction: column;
  justify-content: space-between; //vertical alignments
  align-items: center; //horizontal alignments
  scroll-snap-align: start;
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
  oveflow-x: hidden;
  cursor: pointer;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;
