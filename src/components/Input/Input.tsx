import * as S from './Input.styles'
import { InputProps } from './Input.types'


export const Input = ({ placeholder, maxLength, onBlur, onChange }: InputProps) => {
  return (
    <S.Field>
      <S.WrapperInput>
        <S.Input placeholder={placeholder} onChange={onChange} maxLength={maxLength} onBlur={onBlur} />
      </S.WrapperInput>
    </S.Field>
  )
}