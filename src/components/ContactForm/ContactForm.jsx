import { Formik, Form, Field, ErrorMessage } from "formik";
import { useId } from "react";
import css from "./ContactForm.module.css";
import * as Yup from "yup";

const FeedbackSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
  number: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("Required"),
});

function ContactForm({ saveContact }) {
  const nameId = useId();
  const phoneId = useId();

  function handleSubmit(values, actions) {
    const update = {
      id: Date.now(),
      ...values,
    };
    saveContact(update);
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={{
        name: "",
        number: "",
      }}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      <Form className={css.form}>
        <label name="name" htmlFor={nameId} className={css.label}>
          Name
        </label>
        <Field name="name" id={nameId} type="text" className={css.input} />
        <ErrorMessage name="name" component="span" className={css.error} />
        <label name="number" htmlFor={phoneId} className={css.label}>
          Phone
        </label>
        <Field name="number" id={phoneId} type="phone" className={css.input} />
        <ErrorMessage name="number" component="span" className={css.error} />

        <button className={css.button} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}

export default ContactForm;