import Layout from "../../../Components/Layout/Layout";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { IssuesCloseOutlined, DollarOutlined, FileSearchOutlined, BarsOutlined } from '@ant-design/icons'

const menuItems = [
    {
        label: 'Yêu cầu thuê',
        value: 'rent-request',
        icon: <IssuesCloseOutlined />
    },
    {
        label: 'Xác nhận nộp tiền',
        value: 'fee-confirm',
        icon: <DollarOutlined />
    },
    {
        label: 'Tiền điện',
        value: 'tien-dien',
        icon: <FileSearchOutlined />
    },
    {
        label: 'Tiền nước',
        value: 'tien-nuoc',
        icon: <FileSearchOutlined />
    },
    {
        label: 'Danh sách nộp tiền',
        value: 'fee-list',
        icon: <BarsOutlined />
    }
]

export default function ApartmentManage() {

    const navigate = useNavigate()
    const param = useParams()

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
                                    }} onClick={() => setCurrentMenu(item.value)}>
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

                    }
                </div>
            </div>
        </Layout>
    )
}