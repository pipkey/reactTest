import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../components/textError";

function CheckBox(props) {
  const { label, name, checked, ...rest } = props;

  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <Field
        name={name}
        type="checkbox"
        id={name}
        checked={checked}
        {...rest}
      />
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default CheckBox;

// {
  /* <Field name={name} {...rest}>
{({ field }) => {
  return options.map((op) => {
    return (
      <React.Fragment key={op.key}>
        <input
          type="checkbox"
          id={op.value}
          {...field}
          value={op.value}
          checked={field.value.includes(op.value)}
        />
        <label htmlFor={op.value}>{op.key}</label>
      </React.Fragment>
    );
  });
}}
</Field> */

