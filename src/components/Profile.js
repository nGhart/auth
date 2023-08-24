import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
//import JSONPretty from 'react-json-pretty';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Profile() {
  const { user, isAuthenticated } = useAuth0();

  return (
    isAuthenticated && (
      <Row
        xs={8}
        className="text-center profileContainer"
        style={{ marginTop: '50px' }}
      >
        <Col className="profileCard">
          <Row>
            <Col xs={6}>
              <img src={user.picture} alt={user.name} />
            </Col>
            <Col xs={6}>
              <h2>{user.nickname}</h2>
              <p>{user.given_name}</p>
            </Col>
          </Row>
        </Col>
        {/* <JSONPretty data={user}></JSONPretty> */}
        {/* {JSON.stringify(user, null, 2)} */}
      </Row>
    )
  );
}

export default Profile;
