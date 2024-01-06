import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button } from 'antd'
import axios from 'axios'
import PaymentView from '../../../../Components/Modal/PaymentViewModal'

const toDate = (millis) => {
    const date = new Date(millis)
    return date.toLocaleString('en-GB')
}


export default function PaymentList() {

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
                    setRoomList(res.data.memberList)
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

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            height: '100%',
            padding: 10
        }}>
            <PaymentView
                visible={visibleModal}
                onCancel={() => setVisibleModal(false)}
                onOk={() => setVisibleModal(false)}
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
                                </div>

                                <div style={{
                                    width: '20%',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Button type='default' size='large' onClick={() => navigate(`/profile/${item.roomRent}`)}>Xem hồ sơ</Button>
                                    <Button type='primary' size='large' onClick={() => {
                                        setFocusRoom(item)
                                        setVisibleModal(true)
                                    }}>Danh sách hóa đơn</Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}