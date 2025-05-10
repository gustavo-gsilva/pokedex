import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { CustomThemeProvider } from './context/ThemeContext'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <CustomThemeProvider>
      <App />
    </CustomThemeProvider>
  </StrictMode>,
)