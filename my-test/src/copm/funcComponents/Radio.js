import React from "react";
import { Field, ErrorMessage } from "formik";
import TextError from "../../components/textError";
import "../CssForm.css";

function Radio(props) {
  const { label, name, options, ...rest } = props;
  return (
    <div>
      <label>{label}</label>
      <Field name={name} {...rest}>
        {({ field }) => {
          return options.map((op) => {
            return (
              <React.Fragment key={op.key}>
                <span>
                  <input
                    className="radio__block"
                    type="radio"
                    id={op.value}
                    {...field}
                    value={op.value}
                    checked={field.value === op.value}
                  />
                  <label htmlFor={op.value}>{op.key}</label>
                </span>
              </React.Fragment>
            );
          });
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </div>
  );
}

export default Radio;
