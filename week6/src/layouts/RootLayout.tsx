import { Outlet } from 'react-router-dom'
import { NavBar } from '../components/NavBar'

export function RootLayout() {
  return (
    <div className="app">
      <NavBar />
      <main className="container">
        <Outlet />
      </main>
    </div>
  )
}

