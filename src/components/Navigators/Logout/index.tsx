import './index.scss'

export const handleLogout = () => {
  localStorage.removeItem('username')
  localStorage.removeItem('roles')
  localStorage.removeItem('token')
  window.location.href = '/login'
}
