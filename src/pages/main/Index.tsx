import { useState } from 'react'
import { Input } from '../../components/Input/Input'
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import * as S from './Index.styles'



export const Main = () => {

  const [valor, setValor] = useState('');
  const [cep, setCep] = useState('');
  const isValid = cep.length < 8 || cep.length > 9;
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValor(event.target.value)
  }

  const checkCep = (e: any) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep)
  }

  const insertMaskInCep = (cep: string) => {
    return cep.replace(/^(\d{5})(\d{3})/, '$1-$2').replace('-', '');
  }

  const confirmCep = (cepValue: any) => {
    const cepRegex = cepValue.replace(/^(\d{5})(\d{3})/, '$1-$2');
    setCep(cepRegex)
    if (isValid) {
      toast.error('CEP inválido')
    } else {
      navigate(`/post/${cepRegex}`)
    }
  }


  return (
    <S.Main>
      <S.MainContainer>
        <S.Title>Buscador de Cep</S.Title>
        <S.WrapperContent>
          <Input placeholder={insertMaskInCep('00000-000')} onChange={handleChange} onBlur={checkCep} maxLength={9} />
          <S.Button onClick={() => confirmCep(valor)}>Buscar</S.Button>
        </S.WrapperContent>
      </S.MainContainer>
      {<Toaster />}
    </S.Main >
  )
}

