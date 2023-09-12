import styled from 'styled-components';

export const Main = styled.section`
  width: 100%;
  height: 80vh;
  position: relative;
  top: 100px;
  padding: 32px;
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  margin-top: 62px;
`;

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

export const WrapperContent = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
`

export const Button = styled.button`
  width: 200px;
  height: 50px;
  border-radius: 15px;
  border: none;
  background-color: #000000;
  transition: all 0.3s ease;
  color: #ffffff;
  cursor: pointer;

  &:hover{
    transform: scale(1.1);
    background-color: #757575;
  }
`;