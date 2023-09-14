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


export const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 25px;
  width: 30px;
  height: 30px;
`