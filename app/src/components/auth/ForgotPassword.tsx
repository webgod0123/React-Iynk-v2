import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form } from 'formik';
import NavigationBar from '../NavigationBar';
import Button from '../shared/Button';
import AuthInput from './AuthInput';

interface FormValues {
  email: string;
}

interface OtherProps {
  title: string;
}

const ForgotPasswordJsx = (props: OtherProps & FormikProps<FormValues>) => {
  const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, title } = props;

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
      <Button styles={{ height: '60px' }} type="submit" cssClasses={['btn-white', 'font-normal', 'w-100', 'mt-2']}>
        Reset Password
      </Button>
    </Form>
  );
};

interface ForgotPasswordFormProps {
  initialEmail?: string;
  title?: string;
}

const ForgotPasswordForm = withFormik<ForgotPasswordFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || '',
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
  }),

  handleSubmit({ email }: FormValues, { props, setSubmitting, setErrors }) {
    console.log(email);
  },
})(ForgotPasswordJsx);

const ForgotPassword = () => (
  <div>
    <NavigationBar userSignedIn={false} />
    <div className="page-content">
      <ForgotPasswordForm title="Forgot Password" />
    </div>
  </div>
);

export default ForgotPassword;
