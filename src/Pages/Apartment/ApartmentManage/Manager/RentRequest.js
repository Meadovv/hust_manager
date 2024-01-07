import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import { Button, message } from 'antd'
import axios from 'axios'

export default function RentRequest() {

    const [rentList, setRentList] = useState([])
    const navigate = useNavigate()
    const param = useParams()
    
    const getRentList = async (apartmentId) => {
        await axios.post('/room/get-rent-requests',{
            apartmentId: apartmentId
        },
        {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            if(res.data.success) {
                setRentList(res.data.rentList)
            } else {
                setRentList([])
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const approveRequest = async (roomId) => {
        await axios.post('/room/approve-rent-request',
        {
            roomId: roomId
        },
        {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            if(res.data.success) {
                message.success(res.data.message)
                getRentList(param.apartmentId)
            } else {
                message.error(res.data.message)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const rejectRequest = async (roomId) => {
        await axios.post('/room/reject-rent-request',
        {
            roomId: roomId
        },
        {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            if(res.data.success) {
                message.success(res.data.message)
                getRentList(param.apartmentId)
            } else {
                message.error(res.data.message)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getRentList(param.apartmentId)
    }, [])
    
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight: '100%',
            padding: 10
        }}>
            <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
            }}>
                Danh sách chờ phê duyệt
            </div>

            <div style={{
                display: rentList.length ? 'none' : 'flex',
                padding: '1rem'
            }}>
                Không có dữ liệu
            </div>

            <div>
                {
                    rentList && rentList.map((item, index) => {
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
                                    width: '25%',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Button type='default' size='large' onClick={() => navigate(`/profile/${item.rented}`)}>Xem hồ sơ</Button>
                                    <Button type='primary' size='large' onClick={() => approveRequest(item.roomId)}>Chấp nhận</Button>
                                    <Button type='primary' size='large' danger onClick={() => rejectRequest(item.roomId)}>Từ chối</Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}