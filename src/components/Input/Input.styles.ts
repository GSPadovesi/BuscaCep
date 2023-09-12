import styled from "styled-components";

export const Field = styled.div`
  display: block;
  width: 300px;
  height: auto;
  
  @media(min-width: 768px){
    width: 400px;
  }
`

export const WrapperInput = styled.div`
  display: flex;
  position: relative;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 36px;
  border-radius: 20px;
  padding: 0 42px 0 16px;
  border: 2px solid #000000;

  &:focus{
    outline: none;
  }
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 16px;
  border: none;
  background-color: transparent;

  >img{
    transition: transform 0.3s ease;

    &:hover{
      transform: scale(1.2);
    }
  }
`;