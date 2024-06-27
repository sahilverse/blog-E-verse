import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ThemeProvider } from './contexts/ThemeProvider'
import { FirebaseProvider } from './contexts/FirebaseProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <FirebaseProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </FirebaseProvider >
  // </React.StrictMode>
)
