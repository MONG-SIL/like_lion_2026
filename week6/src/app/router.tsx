import { createBrowserRouter, Navigate, Outlet } from 'react-router-dom'
import { RootLayout } from '../layouts/RootLayout'
import { AboutPage } from '../pages/AboutPage'
import { LoginPage } from '../pages/LoginPage'
import { SignupPage } from '../pages/SignupPage'
import { NotFoundPage } from '../pages/NotFoundPage'

function AuthLayout() {
  return (
    <div className="container">
      <Outlet />
    </div>
  )
}

export const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: 'login', element: <LoginPage /> },
      { path: 'signup', element: <SignupPage /> },
    ],
  },
  {
    element: <RootLayout />,
    children: [
      { path: 'about', element: <AboutPage /> },
      { path: '*', element: <NotFoundPage /> },
    ],
  },
])

