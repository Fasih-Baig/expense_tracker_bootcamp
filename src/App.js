import React from 'react';
import './App.css';
import Tracker from './Tracker';
import Container from '@material-ui/core/Container';
import { LogProvider } from './GlobalContext';

function App() {
  return (
    <Container maxWidth="xs" className="containerBox">
      {/* <Typography component="div" style={{ backgroundColor: '#cfe8fc', height: '100vh' }} /> */}
      <LogProvider>
        <Tracker />
      </LogProvider>
    </Container>
  );
}

export default App;
