import { useEffect, useState } from "react";
import Layout from "../../../Components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom"
import { message, Button } from 'antd'
import axios from 'axios'
import { HomeOutlined, AppstoreOutlined, CheckOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux'

export default function ApartmentProfile () {

    const { user } = useSelector(state => state.user)

    const param = useParams()
    const navigate = useNavigate()

    const [apartment, setApartment] = useState(null)
    const [apartmentImage, setApartmentImage] = useState([])

    const getApartment = async (apartmentId) => {
        await axios.post('/apartment/get-apartment',
        {
            apartmentId: apartmentId
        }).then(res => {
            if(res.data.success) {
                setApartment(res.data.apartment)
            } else {
                message.error(res.data.message)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const getApartmentImage = async (apartmentId) => {
        await axios.post('/apartment/get-apartment-image',
        {
            apartmentId: apartmentId
        }).then(res => {
            if(res.data.success) {
                setApartmentImage(res.data.images)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getApartment(param.apartmentId)
        getApartmentImage(param.apartmentId)
    }, [])

    return (
        <Layout>
            <div style={{
                width: '100%',
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'flex-start',
                padding: 5,
                overflow: 'auto'
            }}>
                <div style={{
                    padding: 10,
                    width: '30%',
                    borderRadius: 10,
                    backgroundColor: '#8F9779'
                }}>
                    <div style={{
                        fontSize: 20
                    }}>
                        <HomeOutlined style={{
                            marginRight: 10
                        }}/>
                        Địa chỉ: {apartment?.address}
                    </div>

                    <div style={{
                        fontSize: 20
                    }}>
                        <AppstoreOutlined style={{
                            marginRight: 10
                        }}/>
                        Số phòng: {apartment?.roomNumber}
                    </div>

                    <div style={{
                        fontSize: 20
                    }}>
                        <AppstoreAddOutlined style={{
                            marginRight: 10
                        }}/>
                        Số phòng trống: {apartment?.roomNumber - apartment?.rentedRoom}
                    </div>

                    <div style={{
                        fontSize: 20
                    }}>
                        <CheckOutlined style={{
                            marginRight: 10
                        }}/>
                        Tiền nhà: {apartment?.tienNha} VND/ 1 Tháng
                    </div>

                    <div style={{
                        fontSize: 20
                    }}>
                        <CheckOutlined style={{
                            marginRight: 10
                        }}/>
                        Tiền điện: {apartment?.tienDien} VND/ 1 Số
                    </div>

                    <div style={{
                        fontSize: 20
                    }}>
                        <CheckOutlined style={{
                            marginRight: 10
                        }}/>
                        Tiền nước: {apartment?.tienNuoc} VND/ 1 Khối
                    </div>

                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end'
                    }}>
                        <Button type='primary' size='large' style={{
                            marginTop: 10,
                            marginRight: 10,
                            display: user?.userId === apartment?.userId ? '' : 'none'
                        }} onClick={() => navigate(`/apartment/${apartment.apartmentId}/manage`)}>Quản lý</Button>
                        <Button type='primary' size='large' style={{
                            marginTop: 10,
                        }} onClick={() => {
                            {
                                user?.userId === apartment?.userId ? 
                                    navigate(`/apartment/${apartment.apartmentId}/edit`) :
                                    navigate(`/apartment/${apartment.apartmentId}/rent`)
                            }
                        }}>
                            {
                                user?.userId === apartment?.userId ? 'Chỉnh sửa' : 'Xem'
                            }
                        </Button>
                    </div>
                </div>

                <div style={{
                    padding: 20,
                    width: '70%',
                    borderRadius: 10,
                    backgroundColor: '#8F9779',
                    marginLeft: 10,
                    display: 'flex',
                    flexWrap: 'wrap',
                }}>
                    {
                        apartmentImage && apartmentImage.map((item, index) => {
                            return (
                                <img key={index} src={item.data} alt='image' style={{
                                    objectFit: 'cover',
                                    maxWidth: '100%',
                                    height: 400,
                                    width: 400,
                                    padding: 10,
                                    borderRadius: '10%'
                                }}/>
                            )
                        })
                    }
                </div>
            </div>
        </Layout>
    )
}