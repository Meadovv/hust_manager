import { useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout'
import { useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom"
import { message } from 'antd'
import axios from 'axios'
import { UserOutlined, CalendarFilled, CarryOutOutlined } from '@ant-design/icons';
import { Avatar, Button, Space } from 'antd';
import MyList from '../../Components/MyList/MyList';
import HouseList from '../../Components/MyList/HouseList';

const houseList = [
    {
        "IDKhu" : "1",
        "DIACHI" :"Đống Đa"
    },
    {
        "IDKhu" : "2",
        "DIACHI" :"Hai Bà Trưng"
    },
    {
        "IDKhu" : "3",
        "DIACHI" :"Long Biên"
    }
]

/*const apartmentList = [
    {
        "address": "BBBB",
        "roomNumber": "30",
        "gia": "1000",
        "imageLink": "https://cdn.chotot.com/e4NgWU54xfhSenEqi10Q2FlkWED2Zxb8Vqhp0nOJX30/preset:view/plain/7a8939bf4b227b2120dab69f3fe2317c-2856973439879225097.jpg"
    },
    {
        "address": "CCCC",
        "roomNumber": "30",
        "gia": "1000"
    },
    {
        "address": "DDDD",
        "roomNumber": "30",
        "gia": "1000"
    }

]
*/
/*
const toDate = (millis) => {
    const date = new Date(millis)
    return date.toLocaleString('en-GB')
}
*/
export default function Profile() {
    /*
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
*/
    return (

        <Layout>

            <div class="grid">
                <div class="gid__row" style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    marginLeft: -12,
                    marginRight: -12
                }}>
                    <div style={{
                        width: 333
                    }}>
                        <div class="UserProfile" style={{
                            width: '100%',
                            height: 610,
                            backgroundColor: '#afd4b4',
                            marginTop: 15, 
                            borderRadius: 5, 
                            paddingTop: 50
                        }}>
                            <div style={{
                                backgroundColor: 'var(--white-color)',
                                width: '70%',
                                height: '230px',
                                margin: 'auto',
                                display: 'flex',
                                justifyContent: 'center',
                                paddingTop: 30,
                                borderRadius: '50%'
                            }}>
                                <i class="fa-solid fa-user-tie " style={{
                                    color: 'var(--main-color-bold)',
                                    fontSize: '15rem'
                                }}></i>
                                
                            </div>

                            <div class="text-gradient" style={{
                                width: '100%',
                                fontSize: '3rem',
                                fontWeight: '600',
                                marginTop: 50,
                                display: 'flex',
                                justifyContent: 'center'
                                
                            }}>
                                tên user
                            </div>

                            <div class="grid__row text__size text-gradient" style={{
                                padding: '30px 18px',
                                lineHeight: '3rem'
                            }}>
                                <div class="grid__column-6">
                                    Ngày tham gia: 
                                </div>
                                <div class="grid__column-6">
                                    22/6/2019
                                </div>
                                <div class="grid__column-6">
                                    Vai trò:  
                                </div>
                                <div class="grid__column-6">
                                    Khách thuê
                                </div>
                                <div class="grid__column-6">
                                    Số điện thoại: 
                                </div>
                                <div class="grid__column-6">
                                    0123456789
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="grid__column-9">
                        <div class="listKhuTro grid__row">
                            <div class="listKHUTRO">
                                <div class="Search__lable grid__row " style={{
                                    width: '85%',
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    margin: 'auto'
                                }}>
                                    <h1 class="" style={{
                                        color: '#1c6a1e',
                                        fontSize: '2.3rem'
                                        }}>
                                        KHU TRỌ
                                    </h1>

                                    <button class="form__controls-btn btn header__navbar-item--strong" style={{
                                        height: '4rem',
                                        borderRadius: 15,
                                        padding: '2px 16px',
                                        border: '2px solid var(--main-color-bold)',
                                        fontWeight: 'bold',
                                        backgroundColor: '#dfdfdf',
                                        color: 'var(--main-color-bold)'
                                    }}>
                                        <i class="fa-solid fa-plus" style={{
                                            color: 'var(--main-color-bold)',
                                            marginRight: 12
                                        }}></i>
                                        TẠO MỚI</button>
                                </div>
                        
                                <div class="Search__list grid__row" style={{
                                    width: '85%',
                                    margin: '20px auto'
                                    }}>
                                    <HouseList houseList={houseList}/>
                                        
                                </div>
                            </div>
                        </div>
                        
                        {/*<div class="Homepage__background" style={{
                            display: 'flex'
                        }}>
                            <MyList apartmentList={apartmentList}/>
                        </div>
                        */}
                        
                    </div>

                </div>
            </div>
            
        </Layout>
    )
}