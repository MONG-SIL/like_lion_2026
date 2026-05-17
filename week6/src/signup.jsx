import { useState } from 'react'
import './login.css'

export default function Signup() {
  const [id, setId] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('ID:', id, 'Password:', password, 'Name:', name, 'Email:', email, 'Phone:', phoneNumber)
  }

  return (
    <div className="login-wrapper">
      <div className="login-page signup-page">
        <h1 className="login-title">SIGN UP</h1>
        <form className="login-form-wrapper" onSubmit={handleSubmit}>
          <div className="login-form">
            <div className="login-id-password">
              <label className="login-label" htmlFor="signup-id">
                ID
              </label>
              <input
                id="signup-id"
                type="text"
                className="login-input"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>

            <div className="login-id-password">
              <label className="login-label" htmlFor="signup-password">
                PASSWORD
              </label>
              <input
                id="signup-password"
                type="password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="login-id-password">
              <label className="login-label" htmlFor="signup-name">
                NAME
              </label>
              <input
                id="signup-name"
                type="text"
                className="login-input"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="login-id-password">
              <label className="login-label" htmlFor="signup-email">
                EMAIL
              </label>
              <input
                id="signup-email"
                type="email"
                className="login-input"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="login-id-password">
              <label className="login-label" htmlFor="signup-phone">
                PHONE NUMBER
              </label>
              <input
                id="signup-phone"
                type="tel"
                className="login-input"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="login-button">
            회원가입
          </button>
        </form>
      </div>
    </div>
  )
}
