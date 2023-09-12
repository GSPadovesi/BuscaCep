import { useParams } from 'react-router-dom'
import * as S from './Index.styles'

export const Post = () => {

  const { id } = useParams();

  console.log(id)

  return (
    <S.Post>
      <h1>Olá, mundo</h1>
    </S.Post>
  )
}