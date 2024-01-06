import { useEffect, useState } from "react";
import Layout from "../../../Components/Layout/Layout";
import { useParams } from "react-router-dom";
import axios from 'axios'
import { message, Button } from 'antd'
import { HomeOutlined, CheckOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { useSelector } from "react-redux";

export default function RoomView() {

    const { user } = useSelector(state => state.user)
    const [room, setRoom] = useState()
    const [roomImages, setRoomImages] = useState([])
    const param = useParams()

    const getRoom = async (roomId) => {
        await axios.post('/room/get-room', {
            roomId: roomId
        }).then(res => {
            if(res.data.success) {
                setRoom(res.data.room)
            } else {
                message.error(res.data.message)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const getRoomImage = async (roomId) => {
        await axios.post('/room/get-room-image', {
            roomId: roomId
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then(res => {
            if(res.data.success) {
                setRoomImages(res.data.images)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const rentRoom = async (roomId) => {
        await axios.post('/room/rent-room', {
            roomId: roomId
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then(res => {
            if(res.data.success) {
                message.success(res.data.message)
            } else {
                message.error(res.data.message)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getRoom(param.roomId)
        getRoomImage(param.roomId)
    }, [param])

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
                        <ExclamationCircleOutlined style={{
                            marginRight: 10
                        }}/>
                        Chủ nhà: {room?.username}
                    </div>

                    <div style={{
                        fontSize: 20
                    }}>
                        <HomeOutlined style={{
                            marginRight: 10
                        }}/>
                        Địa chỉ: {room?.address}
                    </div>

                    <div style={{
                        fontSize: 20
                    }}>
                        <ExclamationCircleOutlined style={{
                            marginRight: 10
                        }}/>
                        Tầng: {room?.floor}
                    </div>

                    <div style={{
                        fontSize: 20
                    }}>
                        <ExclamationCircleOutlined style={{
                            marginRight: 10
                        }}/>
                        Phòng: {room?.number}
                    </div>

                    <div style={{
                        fontSize: 20
                    }}>
                        <CheckOutlined style={{
                            marginRight: 10
                        }}/>
                        Tiền nhà: {room?.tienNha} VND/ 1 Tháng
                    </div>

                    <div style={{
                        fontSize: 20
                    }}>
                        <CheckOutlined style={{
                            marginRight: 10
                        }}/>
                        Tiền điện: {room?.tienDien} VND/ 1 Số
                    </div>

                    <div style={{
                        fontSize: 20
                    }}>
                        <CheckOutlined style={{
                            marginRight: 10
                        }}/>
                        Tiền nước: {room?.tienNuoc} VND/ 1 Khối
                    </div>

                    <div style={{
                        display: (user?.status === null && user?.userId !== -1 && user?.role === 'user') ? 'flex' : 'none',
                        justifyContent: 'flex-end'
                    }}>
                        <Button type='primary' size='large' onClick={() => rentRoom(room?.roomId)}>Thuê</Button>
                    </div>
                    <div style={{
                        display: (user?.status === null && user?.userId !== -1 && user?.role === 'user') ? 'none' : 'flex',
                        marginTop: 10,
                        color: '#AA0000'
                    }}>
                        *Tài khoản của bạn không đủ điều kiện để thuê phòng trọ này
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
                        roomImages && roomImages.map((item, index) => {
                            return (
                                <img key={index} src={item.data} alt='example' style={{
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