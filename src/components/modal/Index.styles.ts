import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100vw;
  height: 100vh;
  z-index: 999;
  margin: 0;
`;

export const ModalContent = styled.div`
	position: relative;
  background-color: #fff;
  border-radius: 10px;
  padding: 30px;
  margin: auto;
  width: 300px;
  height: 400px;
  /* max-width: calc(100vw - 40px);
  max-height: calc(100vh - 40px); */
  z-index: 1000;

  @media (min-width: 768px) {
    width: 500px;
    height: 500px;
  }

  @media(min-width: 1440px){
    width: 600px;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 25px;
  transition: transform 0.2s ease-in-out;

  &:before{
    content: '';
    position: absolute;
    left: 0;
    transform: rotate(45deg);
    width: 30px;
    height: 5px;
    background-color: #757575;
    border: none;
    border-radius: 20px;
  }

  &:after{
    content: '';
    position: absolute;
    left: 0;
    transform: rotate(-45deg);
    width: 30px;
    height: 5px;
    background-color: #757575; 
    border: none;
    border-radius: 20px;

  }

  &:hover {
    transform: scale(1.2);
    opacity: 0.8;
  }
`

export const ModalContainerTitle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #757575; 
  position: relative;
`

export const Title = styled.h1`
  color: #757575;
  font-size: 16px;
  font-weight: 700;
  font-family: Arial, Helvetica, sans-serif;
  
  @media (min-width: 768px) {
    font-size: 24px;
  }

  @media (min-width: 1024px) {
    font-size: 32px;
  }
`