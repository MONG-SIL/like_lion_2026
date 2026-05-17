import { useState } from 'react'
import './login.css'

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("ID: ", id, "Password: ", password);
  }
  return (
    <div className="login-wrapper">
      <div className="login-page">
        <h1 className="login-title">LOGIN</h1>
        <form className="login-form-wrapper" onSubmit={handleSubmit}>
          <div className="login-form">
            <div className="login-id-password">
              <label className="login-label" htmlFor="id">
                ID
              </label>
              <input
                id="id"
                type="text"
                className="login-input"
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
            </div>

            <div className="login-id-password">
              <label className="login-label" htmlFor="password">
                PASSWORD
              </label>
              <input
                id="password"
                type="password"
                className="login-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <button type="submit" className="login-button">
            로그인
          </button>
        </form>
      </div>
    </div>
  )
}