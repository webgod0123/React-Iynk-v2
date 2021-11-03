import React from 'react';
import TextInput from '../shared/TextInput';

export interface AuthInputProps {
  cssClasses?: string[];
  touched?: any;
  errors?: any;
  handleChange?: React.Dispatch<any>;
  handleBlur?: React.Dispatch<any>;
  styles?: { [key: string]: string };
  values?: any;
  type?: string;
  name?: string;
  label?: string;
  disabled?: boolean;
}

const AuthInput = ({
  cssClasses,
  touched,
  errors,
  handleBlur,
  handleChange,
  values,
  type,
  name,
  label,
  disabled = false
}: AuthInputProps) => {
  return (
    <div className="auth-form-group">
      <label htmlFor="email" className="font-normal auth-label">
        {label}
      </label>
      <TextInput
        cssClasses={[
          'auth-input',
          'w-100',
          touched[name] && (errors[name] ? 'validation-err' : 'validation-ok'),
        ]}
        value={values[name]}
        type={type}
        name={name}
        handleChange={handleChange}
        onBlur={handleBlur}
        disabled={disabled}
      />
      <div className={touched[name] && errors[name] ? 'validation-error active' : 'validation-error'}>
        {errors[name]}
      </div>
    </div>
  )
}

export default AuthInput;
