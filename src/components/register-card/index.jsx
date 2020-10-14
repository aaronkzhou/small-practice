import React, { useEffect } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { useAuth } from "../helper";

const RegisterCard = ({ setTitle }) => {
  useEffect(() => {
    setTitle("Register card");
  });

  const { username } = useAuth();

  return (
    <div>
      <h1>{`welcome ${username}`}</h1>
      <Formik
        initialValues={{
          credit_card: "",
          cvc: "",
          expiry_date: "",
        }}
        onSubmit={async (values) => {
          console.log("values:", values);
        }}>
        <Form className='form-wrapper'>
          <Field
            id='credit_card'
            name='credit_card'
            placeholder='Credit card number'
            className='field'
            validate={validateCC}
          />
          <span className='error-message' id='cc-error'>
            <ErrorMessage name='credit_card' />
          </span>
          <Field
            id='cvc'
            name='cvc'
            placeholder='CVC'
            className='field'
            validate={validateCVC}
          />
          <span className='error-message' id='cvc-error'>
            <ErrorMessage name='cvc' />
          </span>
          <Field
            id='expiry_date'
            name='expiry_date'
            placeholder='Expiry date'
            className='field'
            validate={validateExpiry}
          />
          <span className='error-message' id='expiry-error'>
            <ErrorMessage name='expiry_date' />
          </span>
          <button type='submit' className='button'>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};

function validateCC(value) {
  let errorMessage;
  if (
    !/^(?:4[0-9]{12}(?:[0-9]{3})?|[25][1-7][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/i.test(
      value
    )
  ) {
    errorMessage = "Invalid Credit card";
  }
  return errorMessage;
}

function validateCVC(value) {
  let errorMessage;
  if (!/^[0-9]{3,4}$/i.test(value)) {
    errorMessage = "Invalid CVC";
  }
  return errorMessage;
}

function validateExpiry(value) {
  let errorMessage;
  if (!/^[0-9]{3,4}$/i.test(value)) {
    errorMessage = "Invalid Expiry date";
  }
  return errorMessage;
}

export default RegisterCard;
