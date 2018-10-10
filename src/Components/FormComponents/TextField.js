import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import { Input } from 'reactstrap';

import '../../common.scss';

const InputBox = ({
  input,
  className,
  type,
  label,
  placeholder,
  errorLabel,
  meta: { touched, error }
}) => (
  <Fragment>
    <Input
      {...input}
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={input.onChange}
    />
    {
      error && touched &&
      <div className="error-message">
        {errorLabel || label} {error}
      </div>
    }
  </Fragment>
);

const TextField = ({
  name,
  type,
  labelName,
  className,
  isLabelRequired,
  validate,
  placeholder,
  htmlFor,
  errorLabel,
  handleChange,

}) => (
  <Fragment>
    {
      isLabelRequired &&
      <div className="input-field">
        <label htmlFor={htmlFor}>{labelName}</label>
        {
          validate.map(field => (
            field.name === 'required' && <span className="required-field" key={field.name}>*</span>
          ))
        }
      </div>
    }
    {
      (type === "text" || type === "checkbox") && 
      <Field
        name={name}
        component={InputBox}
        type={type}
        className={className}
        validate={validate}
        errorLabel={errorLabel}
        label={htmlFor}
        placeholder={placeholder}
        onChange={handleChange}
      />
    }
  </Fragment>
);

TextField.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.any.isRequired,
  labelName: PropTypes.string.isRequired,
  className: PropTypes.string,
  isLabelRequired: PropTypes.bool,
  validate: PropTypes.any.isRequired,
  placeholder: PropTypes.string,
  htmlFor: PropTypes.string.isRequired,
  errorLabel: PropTypes.string,
  handleChange: PropTypes.func,

};

TextField.defaultProps = {
  isLabelRequired: false,
  placeholder: '',
  handleChange: null,
  errorLabel: '',
  className: ''
};

export default TextField;
