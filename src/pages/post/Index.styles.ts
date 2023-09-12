import styled from "styled-components";

export const Post = styled.section`
  width: 100%;
  height: 80vh;
  position: relative;
  top: 100px;
  padding: 32px;
`

export const Title = styled.h1`
  color: #000000;
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