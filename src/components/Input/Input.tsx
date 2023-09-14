import * as S from './Input.styles'
import { InputProps } from './Input.types'


export const Input = ({ placeholder, maxLength, onBlur, onChange, value }: InputProps) => {
  return (
    <S.Field>
      <S.WrapperInput>
        <S.Input placeholder={placeholder} onChange={onChange} maxLength={maxLength} onBlur={onBlur} value={value} />
      </S.WrapperInput>
    </S.Field>
  )
}