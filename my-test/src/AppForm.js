import React, { useState } from "react";
import { ErrorMessage, Field, useFormik } from "formik";
import "./App.css";
import * as Yup from "yup";
import TextError from "./components/textError";

const initialValues = {
  adress: {
    ip: "",
    mask: "",
    way: "",
  },
  DNS: {
    prefDNS: "",
    altDNS: "",
  },
};

const validateShema = Yup.object({
  ip: Yup.string().required("Required"),
  mask: Yup.string().required("Required"),
});

const onSubmit = (values) => console.log(JSON.stringify(values, null, 2));

const AppForm = () => {
  let [a, setA] = useState("1");

  const formik = useFormik({
    initialValues,
    validateShema,
    onSubmit,
  });

  const RadioOne = (e) => {
    setA(e.target.id);
  };

  return (
    <div>
      <h2>Ethernet Settings</h2>
      <div className="radio">
        <span>
          <input
            type="radio"
            id="1"
            name="one"
            checked={a === "1"}
            onChange={RadioOne}
          />
          Obtain an IP adress automatically (DHCP / BootP)
        </span>

        <span>
          <input type="radio" id="2" name="one" onChange={RadioOne} />
          Use the following IP adress :
        </span>
      </div>

      <div className="radio">
        <span>
          <input
            type="radio"
            id="1"
            name="one"
            checked={a === "1"}
            onChange={RadioOne}
          />
          Obtain an IP adress automatically (DHCP / BootP)
        </span>

        <span>
          <input type="radio" id="2" name="one" onChange={RadioOne} />
          Use the following IP adress :
        </span>
      </div>
      <form onSubmit={formik.handleSubmit}>
        
          <label>IP adress: *</label>
          <Field type="text" id="adress.ip" name="adress.ip"/>
          <ErrorMessage name="adress.ip" component={TextError}/>
        
       
        <span>
          Subnet Mask: *
          <input
            name="mask"
            onChange={formik.handleChange}
            value={formik.values.mask}
            disabled={a === "1"}
          />
        </span>
        {formik.errors.mask ? <div>{formik.errors.mask}</div> : null}
        <span>
          Default Gateway
          <input
            name="way"
            onChange={formik.handleChange}
            value={formik.values.way}
            disabled={a === "1"}
          />
        </span>
        <span>
          Preffered DNS server: *
          <input
            name="way"
            onChange={formik.handleChange}
            value={formik.values.way}
            disabled={a === "1"}
          />
        </span>
        <span>
          Alternative DNS server:
          <input
            name="way"
            onChange={formik.handleChange}
            value={formik.values.way}
            disabled={a === "1"}
          />
        </span>

        <button type="submit">SAVE</button>
      </form>
    </div>
  );
};

export default AppForm;
