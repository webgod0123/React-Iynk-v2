import React from 'react';
import * as Yup from 'yup';
import { withFormik, FormikProps, Form } from 'formik';
import { Link } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';
import Button from '../components/shared/Button';
import Flex from '../components/shared/Flex';
import Image from '../components/shared/Image';
import GoogleIcon from '../assets/images/google.svg';
import AuthInput from '../components/auth/AuthInput'

export interface FormValues {
  email: string;
  password: string;
}

interface OtherProps {
  title: string;
}

const SignInFormJsx = (props: OtherProps & FormikProps<FormValues>) => {
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
      <Flex direction="row" justifyContent="space-between" alignItems="center">
        <Link className="text-color-primary" to="/create-account">
          Create Account
        </Link>
        <Link className="text-color-primary" to="/forgot-password">
          Forgot Password?
        </Link>
      </Flex>
      <Button styles={{ height: '60px' }} type="submit" cssClasses={['btn-white', 'font-normal', 'w-100', 'mt-4']}>
        Sign In
      </Button>
      <Button styles={{ height: '60px' }} type="button" cssClasses={['btn-white', 'font-normal', 'w-100', 'mt-4']}>
        <Flex direction="row" justifyContent="center" alignItems="center">
          <Image src={GoogleIcon} width="40" height="auto" styles={{ marginRight: '20px' }} />
          <span>Sign in with Google</span>
        </Flex>
      </Button>
      <div className="mt-3">
        <Link className="text-color-primary" to="#">
          Privacy Policy
        </Link>
      </div>
      <div className="mt-2">
        <Link className="text-color-primary mt-3" to="#">
          Terms of Service
        </Link>
      </div>
    </Form>
  );
};

interface SignInFormProps {
  initialEmail?: string;
  initialPassword?: string;
  title?: string;
}

const SignInForm = withFormik<SignInFormProps, FormValues>({
  mapPropsToValues: (props) => {
    return {
      email: props.initialEmail || '',
      password: props.initialPassword || '',
    };
  },

  validationSchema: Yup.object().shape({
    email: Yup.string().email('Email not valid').required('Email is required'),
    password: Yup.string().required('Password is required'),
  }),

  handleSubmit({ email, password }: FormValues, { props, setSubmitting, setErrors }) {
    console.log(email, password);
  },
})(SignInFormJsx);

const SignIn = () => (
  <div>
    <NavigationBar userSignedIn={false} />
    <div className="page-content">
      <SignInForm title="Sign In" />
    </div>
  </div>
);

export default SignIn;
