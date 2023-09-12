import * as S from './Input.styles'


export const Input = ({ placeholder, onChange, maxLength, onBlur, notNumberMax }: any) => {
  return (
    <S.Field>
      <S.WrapperInput>
        <S.Input placeholder={placeholder} onChange={onChange} maxLength={maxLength} onBlur={onBlur} notNumberMax={notNumberMax} />
      </S.WrapperInput>
    </S.Field>
  )
}