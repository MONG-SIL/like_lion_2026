import { NavLink } from 'react-router-dom'

function linkClassName({ isActive }: { isActive: boolean }) {
  return isActive ? 'navLink navLinkActive' : 'navLink'
}

export function NavBar() {
  return (
    <header className="header">
      <div className="container headerInner">
        <NavLink to="/" className="brand">
          react2
        </NavLink>

        <nav className="nav">
          <NavLink to="/login" className={linkClassName}>
            로그인
          </NavLink>
          <NavLink to="/signup" className={linkClassName}>
            회원가입
          </NavLink>
          <NavLink to="/about" className={linkClassName}>
            소개
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

