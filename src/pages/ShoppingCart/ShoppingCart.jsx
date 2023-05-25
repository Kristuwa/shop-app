import { ButtonBack, List, Message } from "./ShoppingCart.styled";
import { HiOutlineArrowCircleLeft } from "react-icons/hi";
import { useLocation } from "react-router-dom";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const validateSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  address: Yup.string()
    .min(2, "Too Short!")
    .max(250, "Too Long!")
    .required("Required"),
});

function ShoppingCart({
  list,
  handleDelete,
  handleDecrement,
  handleIncrement,
  addOder,
  loading,
  error,
}) {
  const location = useLocation();

  const backLinkHref = location.state?.from ?? "/";

  const onSubmit = (values, { resetForm }) => {
    addOder(values, list);
    resetForm();
  };

  return (
    <main>
      <ButtonBack to={backLinkHref}>
        <HiOutlineArrowCircleLeft /> Back
      </ButtonBack>
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
          <Form>
            <label htmlFor="name">Name</label>
            <Field id="name" name="name" placeholder="Enter name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <label htmlFor="email">Email</label>
            <Field
              id="email"
              name="email"
              type="email"
              placeholder="Enter email"
            />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <label htmlFor="phone">Phone</label>
            <Field id="phone" name="phone" placeholder="Enter phone number" />
            {errors.phone && touched.phone ? <div>{errors.phone}</div> : null}
            <label htmlFor="address">Address</label>
            <Field id="address" name="address" placeholder="Enter address" />
            {errors.address && touched.address ? (
              <div>{errors.address}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
      {list.length > 0 && !error && !loading && (
        <List>
          {list.map(({ id, name, photo, count, price }) => (
            <li key={id}>
              <img src={photo} alt={name} />
              <p>{name}</p>
              <p>Counter: {count}</p>
              <button type="button" onClick={() => handleDecrement(id)}>
                -
              </button>
              <button type="button" onClick={() => handleIncrement(id)}>
                +
              </button>
              <p>Price: {count * price}</p>
              <button type="button" onClick={() => handleDelete(id)}>
                Delete from cart
              </button>
            </li>
          ))}
        </List>
      )}
      {list.length === 0 && !error && !loading && (
        <p>Your shopping cart is empty</p>
      )}
      {!error && loading && <Message>Loading....</Message>}
      {error && !loading && <Message>{error}</Message>}
    </main>
  );
}

export default ShoppingCart;
