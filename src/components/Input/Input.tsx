import * as S from './Input.styles'


export const Input = ({ placeholder, onChange, maxLength }: any) => {
  return (
    <S.Field>
      <S.WrapperInput>
        <S.Input placeholder={placeholder} onChange={onChange} maxLength={maxLength} />
      </S.WrapperInput>
    </S.Field>
  )
}