import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

function Logout() {
  const { logout, isAuthenticated } = useAuth0();
  return (
    isAuthenticated && (
      <>
        <button onClick={() => logout()}>
          <p className="cookie buttonText">Log Out</p>
        </button>
      </>
    )
  );
}

export default Logout;
