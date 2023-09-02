import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './contexts/auth.context'
import { ThemeProviderWrapper } from './contexts/theme.context'
import { MessageProviderWrapper } from '../src/contexts/message.context'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MessageProviderWrapper>
      <Router>
        <AuthProviderWrapper>
          <ThemeProviderWrapper>
            <App />
          </ThemeProviderWrapper>
        </AuthProviderWrapper>
      </Router >
    </MessageProviderWrapper>
  </React.StrictMode>
);
