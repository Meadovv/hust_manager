import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { setUser } from '../../reducer/actions/userSlice'

export default function Logout() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        localStorage.clear()
        dispatch(setUser({
            userId: -1
        }))
        navigate('/')
    }, [])
}