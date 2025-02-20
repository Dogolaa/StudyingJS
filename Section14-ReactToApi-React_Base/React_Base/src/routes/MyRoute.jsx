import React from 'react';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ element, isClosed }) {
  const isLoggedIn = false; // Simulação do estado de login

  if (isClosed && !isLoggedIn) {
    return <Navigate to="/login" replace />;
  }

  return element; // Apenas retorna o conteúdo do componente
}

MyRoute.defaultProps = {
  isClosed: false,
};

MyRoute.propTypes = {
  element: PropTypes.element.isRequired,
  isClosed: PropTypes.bool,
};
