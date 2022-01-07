import React from 'react';
import ReactDOM from 'react-dom';

import AuthProvider from './contexts/AuthProvider';
import App from './app/App';

ReactDOM.render(
  <AuthProvider>
    <App/>
  </AuthProvider>,
  document.getElementById('app')
);