import { Formik } from "formik";
import * as Yup from "yup";
import { useCallback } from "react";
import {
  ButtonForm,
  FieldContainer,
  FormContainer,
  Input,
} from "./Form.styled";

const validateSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(30, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  address: Yup.string()
    .min(10, "Too Short!")
    .max(250, "Too Long!")
    .required("Required"),
});

export const Form = ({ addOder, list }) => {
  const onSubmit = useCallback(
    (values, { resetForm }) => {
      addOder(values, list);
      resetForm();
    },
    [addOder, list]
  );

  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        phone: "",
        address: "",
      }}
      validationSchema={validateSchema}
      onSubmit={onSubmit}
    >
      {({ errors, touched }) => (
        <FormContainer>
          <FieldContainer>
            <label htmlFor="name">Name</label>
            <Input id="name" name="name" placeholder="Enter name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="email">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="phone">Phone</label>
            <Input id="phone" name="phone" placeholder="Enter phone number" />
            {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
          </FieldContainer>
          <FieldContainer>
            <label htmlFor="address">Address</label>
            <Input id="address" name="address" placeholder="Enter address" />
            {errors.address && touched.address ? (
              <div>{errors.address}</div>
            ) : null}
          </FieldContainer>

          <ButtonForm type="submit">Submit</ButtonForm>
        </FormContainer>
      )}
    </Formik>
  );
};
