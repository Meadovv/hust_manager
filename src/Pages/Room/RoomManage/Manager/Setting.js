import React from 'react'
import { Button, message } from 'antd'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'

export default function Setting() {

    const param = useParams()
    const navigate = useNavigate()

    const checkout = (roomId) => {
        axios.post('/room/checkout', {
            roomId: roomId
        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        })
        .then(res => {
            if(res.data.success) {
                message.success(res.data.message)
                window.location.reload()
            } else {
                message.error(res.data.message)
            }
        })
        .catch(err => {
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
            <Button type='primary' danger size='large' onClick={() => {
                checkout(param.roomId)
            }}>Trả phòng</Button>
        </div>
    )
}