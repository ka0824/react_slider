import React, { useRef } from "react";
import { BsFillCircleFill } from "react-icons/bs";
import styled from "styled-components";

const Swiper = () => {
  const position = useRef(0);

  const sliderRef = useRef(null);

  const handlePrev = () => {
    if (position.current === 0) {
      position.current = 6;
      sliderRef.current.style.left = position.current * -500 + "px";
      return;
    }

    position.current--;

    sliderRef.current.style.left = position.current * -500 + "px";
  };

  const handleNext = () => {
    console.log(position.current);

    if (position.current === 6) {
      position.current = 0;
      sliderRef.current.style.left = position.current * -500 + "px";
      return;
    }

    position.current++;
    sliderRef.current.style.left = position.current * -500 + "px";
  };

  const handleNav = (e) => {
    position.current = parseInt(e.currentTarget.dataset.position);
    sliderRef.current.style.left = position.current * -500 + "px";
  };

  return (
    <Wrapper>
      <ButtonWrapper>
        <Button onClick={handlePrev}>{"<"}</Button>
        <Button onClick={handleNext}>{">"}</Button>
      </ButtonWrapper>
      <NavWrapper>
        <button onClick={(e) => handleNav(e)} data-position={0}>
          <BsFillCircleFill></BsFillCircleFill>
        </button>
        <button onClick={(e) => handleNav(e)} data-position={1}>
          <BsFillCircleFill></BsFillCircleFill>
        </button>
        <button onClick={(e) => handleNav(e)} data-position={2}>
          <BsFillCircleFill></BsFillCircleFill>
        </button>
        <button onClick={(e) => handleNav(e)} data-position={3}>
          <BsFillCircleFill></BsFillCircleFill>
        </button>
        <button onClick={(e) => handleNav(e)} data-position={4}>
          <BsFillCircleFill></BsFillCircleFill>
        </button>
        <button onClick={(e) => handleNav(e)} data-position={5}>
          <BsFillCircleFill></BsFillCircleFill>
        </button>
        <button onClick={(e) => handleNav(e)} data-position={6}>
          <BsFillCircleFill></BsFillCircleFill>
        </button>
      </NavWrapper>
      <Slider ref={sliderRef}>
        <Item color={"red"}></Item>
        <Item color={"orange"}></Item>
        <Item color={"yellow"}></Item>
        <Item color={"green"}></Item>
        <Item color={"blue"}></Item>
        <Item color={"navy"}></Item>
        <Item color={"purple"}></Item>
      </Slider>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 500px;
  height: 300px;
  border: 1px black solid;
  overflow: hidden;

  padding: 0;
  margin: 0;
`;

const Slider = styled.div`
  display: inline-block;
  width: 500px;
  height: 300px;
  position: relative;
  /* overflow: hidden; */
  display: flex;
  transition: 0.2s;
`;

const Item = styled.div`
  display: inline-block;
  min-width: 500px;
  height: 300px;
  background: ${({ color }) => {
    return color;
  }};
`;

const ButtonWrapper = styled.div`
  position: absolute;
  z-index: 99;
  width: 500px;
  display: flex;
  justify-content: space-between;
  height: 300px;
  align-items: center;
`;

const Button = styled.button`
  border: none;
  margin-left: 10px;
  margin-right: 10px;
  font-size: 2rem;
  background: #808080;
  border-radius: 4px;
  opacity: 0.5;

  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;

const NavWrapper = styled.div`
  position: absolute;
  margin-top: 200px;
  z-index: 99;
  width: 500px;
  height: 100px;
  display: flex;
  align-items: flex-end;
  justify-content: center;

  button {
    margin-bottom: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    background: transparent;

    svg {
      fill: #808080;
      opacity: 0.5;

      :hover {
        fill: black;
        cursor: pointer;
      }
    }
  }
`;

export default Swiper;
