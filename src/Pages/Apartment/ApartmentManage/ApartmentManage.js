import Layout from "../../../Components/Layout/Layout";
import { useState, useEffect } from "react";
import { useParams, useNavigate, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { IssuesCloseOutlined, DollarOutlined, FileSearchOutlined, BarsOutlined, TeamOutlined } from '@ant-design/icons'
import RentRequest from "./Manager/RentRequest";
import BillConfirm from "./Manager/BillConfirm";
import Bill from "./Manager/Bill";
import PaymentList from "./Manager/PaymentList";
import MemberList from "./Manager/MemberList";

const menuItems = [
    {
        label: 'Yêu cầu thuê',
        value: 'rent-request',
        icon: <IssuesCloseOutlined />
    },
    {
        label: 'Xác nhận hóa đơn',
        value: 'confirm-bill',
        icon: <DollarOutlined />
    },
    {
        label: 'Tạo hóa đơn',
        value: 'create-bill',
        icon: <FileSearchOutlined />
    },
    {
        label: 'Danh sách hóa đơn',
        value: 'bill-list',
        icon: <BarsOutlined />
    },
    {
        label: 'Danh sách thành viên',
        value: 'member-list',
        icon: <TeamOutlined />
    }
]

export default function ApartmentManage() {

    const navigate = useNavigate()
    const param = useParams()
    const [searchParams, setSearchParams] = useSearchParams()

    const { user } = useSelector(state => state.user)
    const [apartment, setApartment] = useState(null)
    const [currentMenu, setCurrentMenu] = useState(menuItems[0].value)

    const getApartment = async (apartmentId) => {
        await axios.post('/apartment/get-apartment',
            {
                apartmentId: apartmentId
            },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }).then(res => {
                if (res.data.success) {
                    setApartment(res.data.apartment)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getApartment(param.apartmentId)
    }, [param])

    useEffect(() => {
        if(user && apartment && user?.userId !== apartment?.userId) {
            navigate('/')
        }
    }, [user, apartment])

    useEffect(() => {
        if (searchParams.get('path') && menuItems.find(item => item.value === searchParams.get('path'))) {
            setCurrentMenu(searchParams.get('path'))
        } else {
            navigate(`/apartment/${param.apartmentId}/manage?path=${menuItems[0].value}`)
        }
    }, [searchParams])


    return (
        <Layout>
            <div style={{
                display: 'flex',
                width: '100%'
            }}>
                <div style={{
                    backgroundColor: 'rgb(143, 151, 121)',
                    width: '15%',
                    minHeight: '100vh',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <div style={{
                            fontSize: '2rem',
                            fontWeight: 'bold',
                            textTransform: 'uppercase'
                        }}>
                            Quản lý
                        </div>
                        <div style={{
                            fontSize: '1.2rem'
                        }}>
                            phòng trọ
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        fontSize: '1.2rem',
                        marginTop: '3rem'
                    }}>
                        {
                            menuItems && menuItems.map((item, index) => {

                                return (
                                    <div key={index} style={{
                                        display: 'flex',
                                        padding: 20,
                                        cursor: 'pointer',
                                        backgroundColor: item.value === currentMenu ? 'white' : 'transparent'
                                    }} onClick={() => {
                                        navigate(`/apartment/${param.apartmentId}/manage?path=${item.value}`)
                                    }}>
                                        {item.icon}
                                        <div style={{
                                            marginLeft: 10
                                        }}>
                                            {item.label}
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div style={{
                    width: '85%',
                    minHeight: '100vh'
                }}>
                    {
                        currentMenu === menuItems[0].value ? <RentRequest /> :
                            currentMenu === menuItems[1].value ? <BillConfirm /> :
                                currentMenu === menuItems[2].value ? <Bill /> :
                                    currentMenu === menuItems[3].value ? <PaymentList /> : <MemberList />
                    }
                </div>
            </div>
        </Layout>
    )
}