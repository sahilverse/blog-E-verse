import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './contexts/ThemeProvider'
import { FirebaseProvider } from './contexts/FirebaseProvider.jsx'
import { AuthProvider } from './contexts/AuthProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <AuthProvider>
    <FirebaseProvider>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </FirebaseProvider >
  </AuthProvider>
  // </React.StrictMode>
)
