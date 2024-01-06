import { useEffect, useState } from "react";
import Layout from "../../../Components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom"
import { message, Button, Space, Select } from 'antd'
import axios from 'axios'
import { HomeOutlined, AppstoreOutlined, CheckOutlined, AppstoreAddOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux'


export default function ApartmentRent() {

    const { user } = useSelector(state => state.user)
    const param = useParams()
    const [apartment, setApartment] = useState(null)
    const navigate = useNavigate()

    const [roomList, setRoomList] = useState([])
    const [rootListFilter, setRoomListFilter] = useState([])
    const [roomFilter, setRoomFilter] = useState({
        floor: -1,
        rented: 0
    })

    const getApartment = async (apartmentId) => {
        await axios.post('/apartment/get-apartment',
            {
                apartmentId: apartmentId
            }).then(res => {
                if (res.data.success) {
                    setApartment(res.data.apartment)
                } else {
                    message.error(res.data.message)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    const getRoomList = async (apartmentId) => {
        await axios.post('/room/get-room-list', {
            apartmentId: apartmentId,
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then(res => {
            if (res.data.success) {
                setRoomList(res.data.roomList)
            } else {
                setRoomList([])
            }
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getApartment(param.apartmentId)
        getRoomList(param.apartmentId)
    }, [param])

    useEffect(() => {
        let rooms = []
        roomList?.forEach(room => {
            if (roomFilter.floor !== -1 && room.floor !== roomFilter.floor) return
            if (room.status !== 'available') return
            rooms.push(room)
        })
        setRoomListFilter(rooms)
    }, [roomFilter, roomList])

    return (
        <Layout>
            <div style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'flex-start',
                padding: 10,
                overflow: 'auto'
            }}>
                <div style={{
                    width: '30%',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{
                        padding: 20,
                        width: '100%',
                        borderRadius: 10,
                        backgroundColor: '#8F9779',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{
                            color: 'white',
                            fontSize: 24,
                            fontWeight: 'bold'
                        }}>
                            Thông tin cơ bản
                        </div>
                        <div style={{
                            fontSize: 20
                        }}>
                            <HomeOutlined style={{
                                marginRight: 10
                            }} />
                            Địa chỉ: {apartment?.address}
                        </div>

                        <div style={{
                            fontSize: 20
                        }}>
                            <AppstoreOutlined style={{
                                marginRight: 10
                            }} />
                            Số phòng: {apartment?.roomNumber}
                        </div>

                        <div style={{
                            fontSize: 20
                        }}>
                            <AppstoreAddOutlined style={{
                                marginRight: 10
                            }} />
                            Số phòng trống: {apartment?.roomNumber - apartment?.rentedRoom}
                        </div>

                        <div style={{
                            fontSize: 20
                        }}>
                            <CheckOutlined style={{
                                marginRight: 10
                            }} />
                            Tiền nhà: {apartment?.tienNha} VND/ 1 Tháng
                        </div>

                        <div style={{
                            fontSize: 20
                        }}>
                            <CheckOutlined style={{
                                marginRight: 10
                            }} />
                            Tiền điện: {apartment?.tienDien} VND/ 1 Số
                        </div>

                        <div style={{
                            fontSize: 20
                        }}>
                            <CheckOutlined style={{
                                marginRight: 10
                            }} />
                            Tiền nước: {apartment?.tienNuoc} VND/ 1 Khối
                        </div>
                    </div>
                </div>

                <div style={{
                    padding: 20,
                    width: '70%',
                    borderRadius: 10,
                    marginLeft: 10,
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <div style={{
                        padding: 10,
                        fontSize: 18,
                        width: '100%',
                        marginTop: 10,
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <strong style={{
                                width: '10%',
                                marginRight: 10
                            }}>Tầng</strong>
                            <Select
                                style={{
                                    width: '90%'
                                }}
                                options={[
                                    ...Array.from(new Set(roomList.map(room => room.floor)))
                                        .map(room => ({ value: room, label: `Tầng ${room}` })),
                                    {
                                        label: 'Tất cả',
                                        value: -1
                                    }
                                ]}
                                value={roomFilter.floor}
                                onChange={(value) => setRoomFilter({ ...roomFilter, floor: value })}
                            />
                        </div>
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{
                            display: rootListFilter.length ? 'none' : 'flex',
                        }}>
                            Không có phòng trống
                        </div>
                        {
                            rootListFilter.map((room, index) => {

                                return (
                                    <div key={index} style={{
                                        width: '100%',
                                        padding: '2rem',
                                        border: '1px solid black',
                                        borderRadius: '1rem',
                                        margin: '1rem',
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>
                                        <div>
                                            <strong>Phòng: {room.number}</strong>
                                            <div>Tầng: {room.floor}</div>
                                            <div>Trạng thái: {room.status === 'approved' ? 'Đã có người thuê' : 
                                                                room.status === 'pending' ? 'Đang chờ xác nhận' : 'Chưa có người thuê'}</div>
                                        </div>

                                        <div>
                                            <Button type='primary' size='large' onClick={() => {
                                                navigate(`/room/${room.roomId}/view`)
                                            }}>Xem</Button>
                                            <Button type='primary' size='large' danger style={{
                                                marginLeft: 10
                                            }} disabled={room.rented}>Đánh dấu</Button>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </Layout>
    )
}