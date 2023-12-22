import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import axios from 'axios'
import { setUser } from '../../reducer/actions/userSlice'

export default function PrivateRoute ({children}) {
    const dispatch = useDispatch()
    const { user } = useSelector(state => state.user)

    const getUser = async () => {
        await axios.post('/authentication/verify',
        {
            // null
        },
        {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then(res => {
            if(res.data.success) {
                dispatch(setUser(res.data.user))
            } else {
                localStorage.clear()
                dispatch(setUser({
                    userId: -1
                }))
            }
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        if(!user) {
            getUser()
        }
    }, [user, getUser])

    return children
}