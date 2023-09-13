import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './Index.styles'

export const Post = () => {
  const { id } = useParams();
  const [post, setPost] = useState<any>([]);

  const getPost = async () => {
    try {
      const response = await axios.get(`https://viacep.com.br/ws/${id}/json/`);
      const data = response.data;
      setPost(data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getPost()
  }, [])

  console.log(post.cep)

  return (
    <S.Post>
      <S.Title>CEP: {post.cep}</S.Title>
    </S.Post>
  )
}