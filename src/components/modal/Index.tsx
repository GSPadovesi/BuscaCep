import { useCallback, useEffect, useState } from 'react';
import { ModalProps } from './Index.types'
import * as S from './Index.styles'
import axios from 'axios';

export const Modal = ({ isOpen, setIsOpen, cep }: ModalProps) => {

  const [data, setData] = useState([]);

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

  return (
    <>
      {!!isOpen &&
        <S.Modal>
          <S.ModalContent>
            <S.ModalContainerTitle>
              <S.Title>CEP: {data.cep}</S.Title>
              <S.CloseButton onClick={closeModal}></S.CloseButton>
            </S.ModalContainerTitle>
          </S.ModalContent>
        </S.Modal>
      }
    </>
  )
}