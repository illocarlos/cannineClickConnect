import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router } from 'react-router-dom'
import { AuthProviderWrapper } from './contexts/auth.context'
import { ThemeProviderWrapper } from './contexts/theme.context'
import { MessageProviderWrapper } from './contexts/message.Context'

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AuthProviderWrapper>
        <ThemeProviderWrapper>
          <MessageProviderWrapper>
            <App />
          </MessageProviderWrapper>
        </ThemeProviderWrapper>
      </AuthProviderWrapper>
    </Router >
  </React.StrictMode>
);
