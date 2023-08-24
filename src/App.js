import './App.css';
import Login from './components/Login';
//import Logout from './components/Logout';
import Navigation from './components/Navigation';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';
import Container from 'react-bootstrap/Container';

function App() {
  const { isLoading } = useAuth0;
  if (isLoading) return <div>Loading ... </div>;
  return (
    <Container
      fluid
      style={{
        backgroundColor: 'rgba(251, 227, 231, 0.992)',
        height: '100vh',
        paddingTop: '120px',
      }}
    >
      <Navigation />
      <Login />
      {/* <Logout /> */}
      <Profile />
    </Container>
  );
}

export default App;
