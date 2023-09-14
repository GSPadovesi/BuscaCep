export interface InputProps {
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxLength: number;
  onBlur: (e: React.FocusEvent<HTMLInputElement>) => void;
  value: string;
}