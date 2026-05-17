import './app.css'
import Login from './login.jsx'
import { createElement as h } from 'react'

export default function App() {
  return h('div', { className: 'container' }, h(Login))
}
