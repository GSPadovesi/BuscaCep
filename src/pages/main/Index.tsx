import { useState } from 'react'
import { Input } from '../../components/Input/Input'
import { useNavigate } from 'react-router-dom';
import * as S from './Index.styles'

export const Main = () => {

  const [valor, setValor] = useState('');
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValor(event.target.value)
  }

  console.log(valor)

  return (
    <S.Main>
      <S.MainContainer>
        <S.Title>Buscador de Cep</S.Title>
        <S.WrapperContent>
          <Input placeholder="Digite o CEP" onChange={handleChange} maxLength={8} />
          <S.Button onClick={() => navigate(`/post/${valor}`)}>Buscar</S.Button>
        </S.WrapperContent>
      </S.MainContainer>
    </S.Main>
  )
}

