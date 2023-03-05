import React, { Component } from 'react';
import { useAuth0 } from '@auth0/auth0-react';




export const LoginButton = () => {
  const { isAuthenticated } = useAuth0()

  const { loginWithRedirect } = useAuth0()
  return (
    !isAuthenticated &&
    <button onClick={() => loginWithRedirect()}>
      Login
    </button>
  )
}

export const LogoutButton = () => {
  const { isAuthenticated } = useAuth0()

  const { logout } = useAuth0()
  return (
    isAuthenticated &&
    <button onClick={() => logout()}>
      Logout
    </button>
  )
}