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
                    <div class="grid__column-3">
                        <div class="UserProfile" style={{
                            width: '100%',
                            height: 600,
                            backgroundColor: '#afd4b4',
                            marginTop: 25, 
                            borderRadius: 25
                        }}>
                            cái này profile của user
                        </div>
                    </div>

                    <div class="grid__column-9">
                        <div class="listKhuTro grid__row">
                            <div class="listKHUTRO">
                                <div class="Search__lable grid__column-2">
                                    <h1 class="" style={{
                                        color: '#1c6a1e'
                                        }}>
                                        KHU TRỌ
                                    </h1>
                                </div>
                        
                                <div class="Search__list grid__row" style={{
                                    width: '60%',
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