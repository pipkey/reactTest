import React from 'react'
import {Field, ErrorMessage} from "formik"
import TextError from '../../components/textError'


function Textarea(props) {
    const {label, name, ...rest}= props
    return (
        <div className="form__control">
            <label htmlFor={name}>{label}</label>
            <Field id={name} name={name} {...rest} />
            <ErrorMessage name={name} component={TextError}/>
        </div>
    )
}

export default Textarea
