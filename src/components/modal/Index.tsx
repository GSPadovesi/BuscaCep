import { useCallback, useEffect } from 'react';
import { ModalProps } from './Index.types'
import * as S from './Index.styles'

export const Modal = ({ isOpen, setIsOpen, cep }: ModalProps) => {

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto'
    return () => {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);


  const closeModal = useCallback(() => {
    setIsOpen(false);
  }, [setIsOpen]);


  return (
    <>
      {!!isOpen &&
        <S.Modal>
          <S.CloseButton onClick={closeModal}>X</S.CloseButton>
          <h1>Olá, mundo</h1>
        </S.Modal>
      }
    </>
  )
}