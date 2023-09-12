import Logo from '../../assets/endereco.png'
import * as S from './Index.styles'

export const Navbar = () => {
  return (
    <S.Navbar>
      <S.NavbarContainer>
        <S.Image src={Logo} alt="Logo" />
        <S.Title>Buscador de CEP</S.Title>
      </S.NavbarContainer>
    </S.Navbar>
  )
}