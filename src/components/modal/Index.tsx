import { useCallback, useEffect, useState } from 'react';
import { ModalProps } from './Index.types'
import axios from 'axios';
import Error from '../../assets/error.png'
import * as S from './Index.styles'

export const Modal = ({ isOpen, setIsOpen, cep }: ModalProps) => {

  const [data, setData] = useState<any>([]);

  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);

  const getPost = async () => {
    try {
      const post = await axios.get(`https://viacep.com.br/ws/${cep}/json/`)
      const response = post.data;
      setData(response)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  console.log(data);

  return (
    <>
      {!!isOpen &&
        <S.Modal>
          <S.ModalContent>
            <S.ModalContainerTitle>
              <S.Title>CEP: {!data.cep ? 'Esse cep não é valido' : data.cep}</S.Title>
              <S.CloseButton onClick={closeModal}></S.CloseButton>
            </S.ModalContainerTitle>
            {!!data.cep ?
              < S.ModalContainerContent >
                <S.WrapperContent>
                  <S.Title>Logradouro:</S.Title>
                  <S.Paragraph>{data.logradouro} {data.complemento}</S.Paragraph>
                </S.WrapperContent>
                <S.WrapperContent>
                  <S.Title>Bairro:</S.Title>
                  <S.Paragraph>{data.bairro}</S.Paragraph>
                </S.WrapperContent>
                <S.WrapperContent>
                  <S.Title>Localidade/uf:</S.Title>
                  <S.Paragraph>{data.localidade} / {data.uf}</S.Paragraph>
                </S.WrapperContent>
                <S.WrapperContent>
                  <S.Title>IBGE:</S.Title>
                  <S.Paragraph>{data.ibge}</S.Paragraph>
                </S.WrapperContent>
              </S.ModalContainerContent>
              :
              <S.ModalContainerContent>
                <S.Image src={Error} />
              </S.ModalContainerContent>
            }
          </S.ModalContent>
        </S.Modal >
      }
    </>
  )
}