import { Navigate } from 'react-router-dom'

export default function AuthenticationRoute ({ children }) {
    if(localStorage.getItem('token')) {
        return <Navigate to='/'/>
    } else {
        return children
    }
}