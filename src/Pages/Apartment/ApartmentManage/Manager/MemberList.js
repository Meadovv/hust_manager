import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { Button, message } from 'antd'
import axios from 'axios'

export default function MemberList() {

    const param = useParams()
    const [memberList, setMemberList] = useState([])
    const navigate = useNavigate()

    const getApartmentMember = async (apartmentId) => {
        await axios.post('/apartment/get-apartment-member', {
            apartmentId: apartmentId
        },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }).then(res => {
                if (res.data.success) {
                    setMemberList(res.data.memberList)
                } else {
                    setMemberList([])
                }
            }).catch(err => {
                console.log(err)
            })
    }

    useEffect(() => {
        getApartmentMember(param.apartmentId)
    }, [param])

    const freeRoom = async (roomId) => {
        await axios.post('/room/free-room', {
            roomId: roomId,
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then(res => {
            if(res.data.success) {
                message.success(res.data.message)
                getApartmentMember(param.apartmentId)
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
            minHeight: '100%',
            padding: 10
        }}>
            <div style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
            }}>
                Danh sách thành viên
            </div>
            <div>
                {
                    memberList && memberList.map((item, index) => {
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
                                    width: '15%',
                                    display: 'flex',
                                    justifyContent: 'space-between'
                                }}>
                                    <Button type='default' size='large' onClick={() => navigate(`/profile/${item.roomRent}`)}>Xem hồ sơ</Button>
                                    <Button type='primary' size='large' danger onClick={() => freeRoom(item.roomId)}>Xóa</Button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}