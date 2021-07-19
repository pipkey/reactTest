import React from "react";
import Input from "./funcComponents/Input";
import Radio from "./funcComponents/Radio";
import CheckBox from "./funcComponents/CheckBox";

function FormControl(props) {
  const { control, ...rest } = props;

  switch (control) {
    case "input":
      return <Input {...rest} />;
    case "radio":
      return <Radio {...rest} />;
    case "checkbox":
      return <CheckBox {...rest} />;
    default:
      return null;
  }
}

export default FormControl;
