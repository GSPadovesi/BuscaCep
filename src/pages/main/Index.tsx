import { useState, useEffect } from 'react'
import { Input } from '../../components/Input/Input'
import { Modal } from '../../components/modal/Index'
import { useNavigate } from 'react-router-dom';
import { toast, Toaster } from 'react-hot-toast';
import * as S from './Index.styles'

export const Main = () => {

  const [valor, setValor] = useState('');
  const [cep, setCep] = useState('');
  const [modal, setModal] = useState(false);
  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValor(event.target.value)
  }

  const checkCep = (e: any) => {
    const cep = e.target.value.replace(/\D/g, '');
    console.log(cep)
  }

  const insertMaskInCep = (cep: string) => {
    return cep.replace(/^(\d{5})(\d{3})/, '$1-$2');
  }

  const confirmCep = (cepValue: any) => {
    const cepRegex = cepValue.replace(/\d{5}-?\d{3}/gi).replace('-', '');
    if (cepRegex.length < 8 || cepRegex.length > 9) {
      toast.error('CEP inválido')
    } else {
      setCep(cepValue)
      setModal(true)
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
      {modal && <Modal cep={cep} isOpen={!!Modal} setIsOpen={setModal} />}
    </S.Main >
  )
}

