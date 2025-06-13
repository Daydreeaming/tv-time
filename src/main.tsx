import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import Login from './pages/login/login.tsx'
import Welcome from './pages/welcome/welcome.tsx'
import NotFoundPage from './pages/not-found/not-found.tsx'


import { StyledEngineProvider } from '@mui/material/styles';
import GlobalStyles from '@mui/material/GlobalStyles';

import { createBrowserRouter,RouterProvider } from 'react-router-dom'

const router = createBrowserRouter([
  { path: '/app', element: <App /> },
  { path: '/login', element: <Login /> },
  { path: '/welcome', element: <Welcome /> },
  { path: '*', element: <NotFoundPage /> },
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <StyledEngineProvider enableCssLayer>
        <GlobalStyles styles="@layer theme, base, mui, components, utilities;" />
        <RouterProvider router={router} />
    </StyledEngineProvider>
  </StrictMode>,
)
