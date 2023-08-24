import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function Login() {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  return (
    !isAuthenticated && (
      <>
        <Row
          xs={8}
          className="text-center profileContainer"
          style={{ marginTop: '50px' }}
        >
          <Col className="profileCard">
            <Row>
              <Col>
                <p className="credit">
                  Photo by{' '}
                  <a href="https://unsplash.com/@effeslash?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Francesco Mazzoli
                  </a>{' '}
                  on{' '}
                  <a href="https://unsplash.com/photos/INvLInqJ-Ms?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
                    Unsplash
                  </a>
                </p>
                <button onClick={() => loginWithRedirect()}>
                  <p className="cookie buttonText">Log In</p>
                </button>
              </Col>
            </Row>
          </Col>
        </Row>
      </>
    )
  );
}

export default Login;
