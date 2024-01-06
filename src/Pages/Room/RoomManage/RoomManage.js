import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import Layout from '../../../Components/Layout/Layout'
import { SettingOutlined, FileSearchOutlined, BarsOutlined } from '@ant-design/icons'

const menuItems = [
    {
        label: 'Hóa đơn',
        value: 'bill',
        icon: <FileSearchOutlined />
    },
    {
        label: 'Lịch sử nộp tiền',
        value: 'payment-history',
        icon: <BarsOutlined />
    },
    {
        label: 'Nâng cao',
        value: 'setting',
        icon: <SettingOutlined />
    }
]

export default function RoomManage() {

    const { user } = useSelector(state => state.user)
    const param = useParams()
    const navigate = useNavigate()
    const [currentMenu, setCurrentMenu] = useState(menuItems[0].value)

    useEffect(() => {
        if(!(user?.roomId === Number(param.roomId) && user?.status === "approved")) {
            navigate('/')
        }
    }, [user, param])

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
                            Thông tin
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
                    AAA
                </div>
            </div>
        </Layout>
    )
}