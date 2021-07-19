import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./aplic.css";
import TextError from "./textError";

const initialValues = {
  ipAdress: "",
  mask: "",
  channel: "",
  adress: "",
  social: {
    twitter: "",
    facebook: "",
  },
  phone: ["", ""],
};

const onSubmit = (values) => console.log(values);

const validationSchema = Yup.object({
  ipAdress: Yup.string().required("Required"),
  mask: Yup.string().email("Invalid email format").required("Required"),
  //   channel: Yup.string().required("Required"),
  //   adress: Yup.string().required("Required"),
});

export default function Applic() {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <div className="form-control">
          <label htmlFor="name"> IP adress: * </label>
          <Field type="text" id="ipAdress" name="ipAdress" />
          <ErrorMessage name="ipAdress" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="mask"> Subnet Mask: * </label>
          <Field type="text" id="mask" name="mask" />
          <ErrorMessage name="mask" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="channel"> Default Gateway </label>
          <Field type="text" id="channel" name="channel" />
          <ErrorMessage name="channel" component={TextError} />
        </div>
        <div>
          <label>Adress </label>
          <Field type="text" name="adress" id="adress" />
          <ErrorMessage name="adress" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="facebook"> FaceBook profile </label>
          <Field type="text" id="facebook" name="social.facebook" />
          <ErrorMessage name="social.facebook" component={TextError} />
        </div>
        <div className="form-control">
          <label htmlFor="twitter"> Twitter profile </label>
          <Field type="text" id="twitter" name="social.twitter" />
          <ErrorMessage name="social.twitter" component={TextError} />
        </div>

        <div className="form-control">
          <label htmlFor="primaryPh"> Primary phone number </label>
          <Field type="text" id="primaryPh" name="phone[0]" />
        </div>

        <div className="form-control">
          <label htmlFor="secondaryPh"> Secondary phone number </label>
          <Field type="text" id="secondaryPh" name="phone[1]" />
        </div>

        <button type="submit">Save</button>
        <button type="reset">Cancel</button>
      </Form>
    </Formik>
  );
}
