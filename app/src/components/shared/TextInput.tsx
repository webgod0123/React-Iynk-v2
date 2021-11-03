import React from 'react';

interface TextInputProps {
  text?: string;
  setText?: React.Dispatch<React.SetStateAction<string>>;
  type?: string;
  name?: string;
  cssClasses?: string[];
  styles?: { [key: string]: string };
  value?: string;
  handleChange?: React.Dispatch<any>;
  onBlur?: React.Dispatch<any>;
  disabled?: boolean;
}

const TextInput = ({
  text,
  setText,
  type,
  name,
  cssClasses,
  styles,
  value,
  handleChange,
  onBlur,
  disabled = false
}: TextInputProps) => {
  return (
    <input
      className={cssClasses ? cssClasses.join(' ') : ''}
      type={type}
      name={name}
      value={value}
      onChange={handleChange ? handleChange : (event) => setText(event.target.value)}
      style={styles}
      onBlur={onBlur}
      disabled={disabled}
    />
  );
};

export default TextInput;
