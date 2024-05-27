import './index.scss'

export const handleLogout = () => {
  localStorage.removeItem('username')
  localStorage.removeItem('roles')
  localStorage.removeItem('token')
  localStorage.removeItem('recentVideo')
  window.location.href = '/login'
}
