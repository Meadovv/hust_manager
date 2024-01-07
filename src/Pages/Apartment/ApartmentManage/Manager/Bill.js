import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, message } from 'antd'
import axios from 'axios'
import BillCreateModal from '../../../../Components/Modal/BillCreateModal'

const toDate = (millis) => {
    const date = new Date(millis)
    return date.toLocaleString('en-GB')
}


export default function Bill() {

    const param = useParams()
    const [roomList, setRoomList] = useState([])
    const navigate = useNavigate()
    const [visibleModal, setVisibleModal] = useState(false)
    const [focusRoom, setFocusRoom] = useState(null)

    const getApartmentRoom = async (apartmentId) => {
        await axios.post('/apartment/get-apartment-room', {
            apartmentId: apartmentId
        },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }).then(res => {
                if (res.data.success) {
                    const roomList = res.data.apartmentRooms.filter(item => item.status === 'approved')
                    setRoomList(roomList)
                } else {
                    setRoomList([])
                }
            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getApartmentRoom(param.apartmentId)
    }, [param])

    const createBill = async (bill) => {
        await axios.post('/room/create-bill',{
            bill: bill
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then(res => {
            if(res.data.success) {
                message.success(res.data.message)
                setVisibleModal(false)
                getApartmentRoom(param.apartmentId)
            } else {
                message.error(res.data.message)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            padding: 10
        }}>
            <BillCreateModal
                visible={visibleModal}
                onCancel={() => setVisibleModal(false)}
                onOk={createBill}
                room={focusRoom}
            />
            <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
            }}>
                Danh sách phòng
            </div>
            <div>
                {
                    roomList && roomList.map((item, index) => {
                        return (
                            <div key={index} style={{
                                display: 'flex',
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between',
                                padding: '2rem',
                                margin: '1rem',
                                border: '1px solid #8F9779',
                                borderRadius: 5,
                            }}>
                                <div style={{
                                    width: '50%',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'space-between'
                                }}>
                                    <div><strong>Tên người thuê:</strong> {item.username}</div>
                                    <div><strong>Tầng:</strong> {item.roomFloor}</div>
                                    <div><strong>Phòng:</strong> {item.roomNumber}</div>
                                    <div><strong>Ngày tạo cuối:</strong> {toDate(item.lastBill)}</div>
                                </div>

                                <div style={{
                                    width: '20%',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Button type='default' size='large' onClick={() => navigate(`/profile/${item.roomRent}`)}>Xem hồ sơ</Button>
                                    <Button type='primary' size='large' danger onClick={() => {
                                        setFocusRoom(item)
                                        setVisibleModal(true)
                                    }}>Tạo hóa đơn</Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}