import { Navigate, useLocation } from 'react-router-dom'
import { useUserAuth } from '../context/userAuthContext'

const ProtectedRoute = ({children}) => {
  const {user}=useUserAuth()
  const location=useLocation()
  console.log("Check user in Private: ", user);
  if(!user) return children
  return <Navigate replace state={{from:location}} to="/" /> 

}
export default ProtectedRoute