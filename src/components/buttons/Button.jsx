import React from 'react';
import { NavLink } from 'react-router-dom';

const Button = ({ children, ...rest }) => {
  return <NavLink {...rest}>{children}</NavLink>;
};

export default Button;
