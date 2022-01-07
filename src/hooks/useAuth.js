import { useCallback, useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

export default function useAuth() {
  
  const { jwt, setJwt } = useContext(AuthContext)

  const login = useCallback(token => {
    setJwt(token)
  }, [setJwt])

  const logout = useCallback(() => {
    window.localStorage.removeItem('jwt')
    setJwt(null)
  }, [setJwt])

  return {
    isLogged: Boolean(jwt),
    login,
    logout
  }
}