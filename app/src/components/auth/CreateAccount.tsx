import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form } from 'formik';
import NavigationBar from '../NavigationBar';
import Button from '../shared/Button';
import AuthInput from './AuthInput';

interface FormValues {
  email: string;
  password: string;
  repassword: string;
}

interface OtherProps {
  title: string;
}

const CreateAccountFormJsx = (props: OtherProps & FormikProps<FormValues>) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, title } = props;

  console.log(props);
  console.log(touched);
  console.log(errors);
  
  const buttonDisabled = values.email && values.password && values.repassword && 
  !Object.keys(errors).includes('email' || 'password' || 'repassword') ? false : true

  const rePassDisabled = values.email && values.password && !Object.keys(errors).includes('email' || 'password')
    ? false : true
  
  return (
    <Form className="auth-content">
      <div className="font-medium auth-title">{title}</div>
      <AuthInput 
        type="text"
        name="email"
        label="Email"
        values={values}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <AuthInput 
        type="password"
        name="password"
        label="Password"
        values={values}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        handleBlur={handleBlur}
      />
      <AuthInput 
        type="password"
        name="repassword"
        label="Repeat Password"
        values={values}
        errors={errors}
        touched={touched}
        handleChange={handleChange}
        handleBlur={handleBlur}
        disabled={rePassDisabled}
      />
      <Button styles={{ height: '60px', opacity: buttonDisabled ? '0.5' : '1' }}
        type="submit" cssClasses={['btn-white', 'font-normal', 'w-100', 'mt-2']}
        disabled={buttonDisabled}
      >
        Create Account
      </Button>
    </Form>
  );
};

interface CreateAccountFormProps {
  initialEmail?: string;
  initialPassword?: string;
  initialRePassword?: string;
  title?: string;
}

const CreateAccountForm = withFormik<CreateAccountFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || '',
      password: props.initialPassword || '',
      repassword: props.initialRePassword || '',
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string()
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d@$!%*?&]{8,}$/,
        'Password Requirements: 1 uppercase, 1 number, at least 8 characters and no spaces'
      )
      .required('Password Requirements: 1 uppercase, 1 number, at least 8 characters and no spaces'),
    repassword: Yup.string()
      .required('Repeat your password')
      .test('password-match', 'Passwords must match', function (value) {
        return this.parent.password === value;
      }),
  }),

  handleSubmit({ email, password, repassword }: FormValues, { props, setSubmitting, setErrors }) {
    console.log(email, password);
  },
})(CreateAccountFormJsx);

const CreateAccount = () => (
  <div>
    <NavigationBar userSignedIn={false} />
    <div className="page-content">
      <CreateAccountForm title="Create Account" />
    </div>
  </div>
);

export default CreateAccount;
