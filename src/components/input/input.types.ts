export type InputProps = {
  type: React.HTMLInputTypeAttribute;
  value: string | number | readonly string[] | undefined;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  label?: string;
  isReadOnly?: boolean;
  placeholder?: string;
  className?: string;
};
