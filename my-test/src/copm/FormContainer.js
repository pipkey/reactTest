import React from "react";
import { Formik, Form } from "formik";
import FormControl from "./FormControl";
import "./CssForm.css";

function FormContainer() {
  const radioOptionsOne = [
    {
      key: "Obtain an IP address automatically (DHCP / BootP)",
      value: "option1",
    },
    { key: "Use the following address:", value: "option2" },
  ];
  const radioOptionsTwo = [
    { key: "Obtain DNS server address automatically", value: "option3" },
    { key: "Use the following DS server address:", value: "option4" },
  ];
  const radioOptionsRep = [
    {
      key: "Obtain an IP address automatically (DHCP / BootP)",
      value: "option5",
    },
    { key: "Use the following address:", value: "option6" },
  ];

  const radioOptionsTwoRep = [
    { key: "Obtain DNS server address automatically", value: "option7" },
    { key: "Use the following DS server address:", value: "option8" },
  ];

  const initialValues = {

    //FIRST RADIO
    radioOption: "option1",
    // FIRST FORM
    ipAdress: "",
    mask: "",
    getWay: "",
    // SECOND RADIO
    radioOptionOne: "option3",
    // SECOND FORM
    prefDNS: "",
    altDNS: "",
    //CHECK BOX AREAS
    chekwifi: false,
    wirName: "",
    checkSeq: false,
    seqKey: "",
    // REPEATE FORM
    radio1: "option5",
    // ===
    ip1: "",
    mask1: "",
    way1: "",
    // ====
    radio2: "option7",
    // ===
    pref1: "",
    alt1: "",
  };

  const onSubmit = (values) => console.log("Form data", values);

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validate={(values) => {
          const errors = {};
          if (
            !values.ipAdress
            &&
            // values.etcSet[0].radio === "option2"
            values.radioOption === "option2"
          ) {
            errors.ipAdress = "Required";
          }
          if (!values.mask && values.radioOption === "option2") {
            errors.mask = "Required";
          }
          if (!values.prefDNS && values.radioOptionOne === "option4") {
            errors.prefDNS = "Required";
          }
          if (!values.wirName && values.chekwifi === true) {
            errors.wirName = "Required";
          }
          if (!values.seqKey && values.checkSeq === true) {
            errors.seqKey = "Required";
          }
          if (!values.ip1 && values.radio1 === "option6") {
            errors.ip1 = "Required";
          }
          if (!values.mask1 && values.radio1 === "option6") {
            errors.mask1 = "Required";
          }
          if (!values.pref1 && values.radio2 === "option8") {
            errors.pref1 = "Required";
          }

          return errors;
        }}
        onSubmit={onSubmit}
      >
        {(formik) => (
          <Form className="wrapper">
            <div className="display">
              <div className="left__side">
                <h2>Ethernet Settings</h2>
                <div className="radio__block">
                  <FormControl
                    control="radio"
                    name="radioOption"
                    options={radioOptionsOne}
                  />
                </div>
                <div className="input__block">
                  <FormControl
                    control="input"
                    type="text"
                    label="IP Adress *"
                    name="ipAdress"
                     disabled={formik.values.radioOption === "option1"}
                  />

                  <FormControl
                    control="input"
                    type="text"
                    label="Subnet Mask *"
                    name="mask"
                    disabled={formik.values.radioOption === "option1"}
                  />
                  <FormControl
                    control="input"
                    type="text"
                    label="Default Gateway"
                    name="getWay"
                    disabled={formik.values.radioOption === "option1"}
                  />
                </div>
                <div className="radio__block">
                  <FormControl
                    control="radio"
                    name="radioOptionOne"
                    options={radioOptionsTwo}
                  />
                </div>
                <div className="input__block">
                  <FormControl
                    control="input"
                    type="text"
                    label="Preferred DNS server *"
                    name="prefDNS"
                    disabled={formik.values.radioOptionOne === "option3"}
                  />
                  <FormControl
                    control="input"
                    type="text"
                    label="Alternative DNS server"
                    name="altDNS"
                    disabled={formik.values.radioOptionOne === "option3"}
                  />
                </div>
              </div>
              <div className="right__side">
                <h2>Wirelles Settings</h2>
                <div className="radio__block">
                  <FormControl
                    control="checkbox"
                    name="chekwifi"
                    label="Enable wifi"
                    checked={formik.values.chekwifi}
                  />
                </div>
                <div className="input__block">
                  <FormControl
                    control="input"
                    type="text"
                    label="Wirelles Network Name* "
                    name="wirName"
                    disabled={formik.values.chekwifi === false}
                  />
                </div>
                <div className="radio__block">
                  <FormControl
                    control="checkbox"
                    name="checkSeq"
                    label="Enable Wirelles security"
                    checked={formik.values.checkSeq}
                    disabled={formik.values.chekwifi === false}
                  />
                </div>
                <div className="input__block">
                  <FormControl
                    control="input"
                    type="text"
                    label="Security Key* "
                    name="seqKey"
                    disabled={formik.values.checkSeq === false}
                  />
                </div>

                <div className="radio__block">
                  <FormControl
                    control="radio"
                    name="radio1"
                    options={radioOptionsRep}
                  />
                </div>
                <div className="input__block">
                  <FormControl
                    control="input"
                    type="text"
                    label="IP Adress *"
                    name="ip1"
                    disabled={formik.values.radio1 === "option5"}
                  />
                  <FormControl
                    control="input"
                    type="text"
                    label="Subnet Mask *"
                    name="mask1"
                    disabled={formik.values.radio1 === "option5"}
                  />
                  <FormControl
                    control="input"
                    type="text"
                    label="Default Gateway"
                    name="way1"
                    disabled={formik.values.radio1 === "option5"}
                  />
                </div>
                <div className="radio__block">
                  <FormControl
                    control="radio"
                    name="radio2"
                    options={radioOptionsTwoRep}
                  />
                </div>
                <div className="input__block">
                  <FormControl
                    control="input"
                    type="text"
                    label="Preferred DNS server *"
                    name="pref1"
                    disabled={formik.values.radio2 === "option7"}
                  />
                  <FormControl
                    control="input"
                    type="text"
                    label="Alternative DNS server"
                    name="alt1"
                    disabled={formik.values.radio2 === "option7"}
                  />
                </div>
              </div>
            </div>
            <div className="btn__block">
              <button type="submit">SAVE</button>
              <button type="reset">Cancel</button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default FormContainer;
