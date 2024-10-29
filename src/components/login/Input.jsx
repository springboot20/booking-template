import React from 'react';
const Input = ({ label, labelFor, type, ...rest }) => {
  return (
    <div className='form-group'>
      <label htmlFor={labelFor}>{label}</label>
      <input type={type} {...rest} />
    </div>
  );
};

export default Input;
