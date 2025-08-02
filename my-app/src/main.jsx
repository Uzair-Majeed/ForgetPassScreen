import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx';
import { Toaster } from 'react-hot-toast';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Toaster
            position="top-center"
            toastOptions={{
              success: {
                style: {
                  fontSize: '16px',
                  maxWidth: '500px',
                  padding: '16px 24px',
                },
              },
              error: {
                style: {
                  fontSize: '16px',
                  maxWidth: '500px',
                  padding: '16px 24px',
                  backgroundColor: '#ffefef',
                  color: '#d32f2f',
                },
              },
            }}
          />
    <App />
  </StrictMode>,
)
