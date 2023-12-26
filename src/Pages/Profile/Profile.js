import { useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { message } from 'antd'
import axios from 'axios'
import { UserOutlined, CalendarFilled, CarryOutOutlined } from '@ant-design/icons';
import { Avatar, Button, Space } from 'antd';
import MyList from '../../Components/MyList/MyList';

const toDate = (millis) => {
    const date = new Date(millis)
    return date.toLocaleString('en-GB')
}

export default function Profile() {

    const { user } = useSelector(state => state.user)
    const [currentUser, setCurrentUser] = useState()
    const [apartmentList, setApartmentList] = useState([])

    const [page, setPage] = useState(1)
    const navigate = useNavigate()

    const getUser = async (userId) => {
        await axios.post('/authentication/getUser',
            {
                userId: userId
            },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }).then(res => {
                if (res.data.success) {
                    setCurrentUser(res.data.user)
                } else {
                    message.error('Người dùng không tồn tại')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    const getApartmentList = async (userId, page) => {
        await axios.post('/apartment/get-apartment-list',
        {
            page: page,
            userId: userId,
            recordPerPage: 5
        }).then(res => {
            if(res.data.success) {
                setApartmentList(res.data.list)
            }
        }).catch(err => {
            console.log(err)
        })
    }
    
    useEffect(() => {
        getUser(user?.userId)
        getApartmentList(user?.userId)
    }, [])

    useEffect(() => {
        getApartmentList(user?.userId, page)
    }, [page])

    return (
        <Layout>
            <MyList apartmentList={apartmentList}/>
        </Layout>
    )
}