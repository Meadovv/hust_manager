import { useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom"
import { message } from 'antd'
import axios from 'axios'

import { UserOutlined, CalendarFilled, CarryOutOutlined } from '@ant-design/icons';
import { Avatar, Button, Space } from 'antd';

const toDate = (millis) => {
    const date = new Date(millis)
    return date.toLocaleString('en-GB')
}

export default function Profile() {

    const { user } = useSelector(state => state.user)
    const [currentUser, setCurrentUser] = useState()
    const [apartmentList, setApartmentList] = useState([])

    const [page, setPage] = useState(1)

    const param = useParams()
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
        getUser(param.profileId)
        getApartmentList(param.profileId)
    }, [param])

    useEffect(() => {
        getApartmentList(param.profileId, page)
    }, [page])

    return (
        <Layout>
            <div style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'flex-start',
                padding: 10
            }}>
                <div style={{
                    padding: 20,
                    width: '30%',
                    borderRadius: 10,
                    backgroundColor: '#8F9779'
                }}>
                    <div style={{
                        display: 'flex',
                    }}>
                        <div>
                            <Avatar size={64} icon={<UserOutlined />} />
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginLeft: 10,
                            flexDirection: 'column'
                        }}>
                            <div style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}>{currentUser?.firstName} {currentUser?.lastName}</div>
                            <div style={{
                                padding: 5,
                                backgroundColor: '#32de84',
                                border: '1px solid #006A4E',
                                display: 'flex',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}>
                                {
                                    currentUser?.role === 'user' ? 'Người thuê trọ' : 'Chủ trọ'
                                }
                            </div>
                        </div>
                    </div>

                    <div style={{
                        padding: 10,
                        fontSize: 24
                    }}>
                        <CalendarFilled style={{
                            marginRight: 10
                        }} />
                        Ngày sinh: {toDate(currentUser?.dob).split(', ')[0]}
                    </div>

                    <div style={{
                        padding: 10,
                        fontSize: 24
                    }}>
                        <CarryOutOutlined style={{
                            marginRight: 10
                        }} />
                        Ngày tham gia: {toDate(currentUser?.createDate).split(', ')[0]}
                    </div>

                    <div style={{
                        padding: 10,
                        display: user?.userId === currentUser?.userId ? 'flex' : 'none',
                        justifyContent: 'space-between',
                    }}>
                        <Space>
                            <Button type='primary' size='large' >Chỉnh sửa thông tin</Button>
                            <Button type='primary' size='large' onClick={() => { navigate('/apartment/create') }}>Thêm nhà trọ</Button>
                        </Space>

                        <Button type='primary' size='large' danger onClick={() => { navigate('/logout') }}>Đăng xuất</Button>
                    </div>
                </div>

                <div style={{
                    padding: 20,
                    width: '70%',
                    borderRadius: 10,
                    backgroundColor: '#8F9779',
                    marginLeft: 10
                }}>
                    {
                        apartmentList && apartmentList.map((item, index) => {
                            return (
                                <div key={index} style={{
                                    padding: 10,
                                    backgroundColor: '#87A96B',
                                    borderRadius: 10,
                                    marginTop: 10,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    cursor: 'pointer'
                                }} onClick={() => {
                                    navigate(`/apartment/${item.apartmentId}`)
                                }}>
                                    <div><strong>ID:</strong> {item.apartmentId}</div>
                                    <div>Địa chỉ: {item.address}</div>
                                    <div>Số phòng: {item.roomNumber}</div>
                                    <div>Số phòng trống: {item.roomNumber - item.rentedRoom}</div>
                                </div>
                            )
                        })
                    }
                    <div style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 10
                    }}>
                        <Button type='primary' size='large' onClick={() => {
                            let previousPage = page - 1
                            if(!(previousPage < 1)) setPage(previousPage)
                        }}>Previous</Button>
                        <div style={{
                            fontSize: 18,
                            fontWeight: 'bold',
                            color: 'white',
                            display: 'flex',
                            alignItems: 'center'
                        }}>Page: {page}</div>
                        <Button type='primary' size='large' onClick={() => {
                            let nextPage = page + 1
                            setPage(nextPage)
                        }}>Next</Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}