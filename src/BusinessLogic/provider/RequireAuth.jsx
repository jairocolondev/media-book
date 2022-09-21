import React from 'react'
import PropTypes from 'prop-types'
import Cookies from 'universal-cookie'
import { useLocation, Navigate } from 'react-router-dom'

const RequireAuth = ({ children }) => {
  const cookies = new Cookies()
  const auth = cookies.get('email')
  const location = useLocation()

  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children
}

RequireAuth.propTypes = {
  children: PropTypes.element.isRequired,
}

export {RequireAuth}
