import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'modern-normalize/modern-normalize.css';
import { App } from 'components/App/App';
import Container from 'components/App/App.styled'




ReactDOM.createRoot(document.getElementById('root')).render(
  <Container>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Container>
);



