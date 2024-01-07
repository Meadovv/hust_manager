import React, { useEffect, useState } from 'react';
import { Modal, Button, Space, Select } from 'antd';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import BillViewModal from './BillViewModal';

const toDate = (millis) => {
    const date = new Date(millis)
    return date.toLocaleString('en-GB')
}

export default function PaymentView({ visible, onCancel, onOk, room }) {

    const [paymentList, setPaymentList] = useState([])
    const [filter, setFilter] = useState({
        isPayed: -1
    })
    const [filteredPaymentList, setFilteredPaymentList] = useState([])
    const [billViewModal, setBillViewModal] = useState(false)
    const [focusBill, setFocusBill] = useState(null)

    const getPaymentList = async (roomId) => {
        await axios.post('/room/get-payment-list', { roomId: roomId },
            {
                headers: {
                    Authorization: 'Bearer ' + localStorage.getItem('token'),
                }
            })
            .then(res => {
                if (res.data.success) {
                    setPaymentList(res.data.paymentList)
                } else {
                    setPaymentList([])
                }
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        if (room) getPaymentList(room?.roomId)
    }, [room])

    useEffect(() => {
        const filteredList = []
        paymentList?.forEach(payment => {
            if (filter.isPayed !== -1) {
                if (payment.paymentDate === null && filter.isPayed === 1) return
                if (payment.paymentDate !== null && filter.isPayed === 0) return
            }
            filteredList.push(payment)
        })
        setFilteredPaymentList(filteredList)
    }, [paymentList, filter])

    return (
        <Modal
            forceRender
            title={`Danh sách hóa đơn của phòng ${room?.roomNumber} tầng ${room?.roomFloor}`}
            open={visible}
            onCancel={onCancel}
            onOk={onOk}
            okButtonProps={{
                size: 'large'
            }}
            cancelButtonProps={{
                size: 'large'
            }}
            width={1000}
        >
            <div style={{
                width: '100%',
                padding: '1rem',
            }}>
                <BillViewModal
                    visible={billViewModal}
                    onCancel={() => setBillViewModal(false)}
                    onOk={() => setBillViewModal(false)}
                    bill={focusBill}
                />
                <Select
                    value={filter.isPayed}
                    options={[
                        {
                            label: 'Tất cả',
                            value: -1
                        },
                        {
                            label: 'Đã nộp',
                            value: 1
                        },
                        {
                            label: 'Chưa nộp',
                            value: 0
                        }
                    ]}
                    style={{
                        width: '100%',
                    }}
                    onChange={(value) => setFilter({ ...filter, isPayed: value })}
                />
            </div>
            <div style={{
                display: filteredPaymentList.length ? 'none' : 'flex',
                padding: '1rem'
            }}>
                Không có dữ liệu
            </div>
            {
                filteredPaymentList && filteredPaymentList.map((item, index) => {

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
                                width: '30%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <div style={{
                                    color: item?.paymentDate === null ? 'red' : item?.status === 'pending' ? 'orange' : 'green',
                                }}><strong>Trạng thái:</strong> {item?.paymentDate === null ? 'Chưa thanh toán' : item?.status === 'pending' ? 'Chờ xác nhận' : 'Đã thanh toán'}</div>
                                <div style={{
                                    display: item.paymentDate === null ? 'none' : '',
                                }}><strong>Ngày nộp:</strong> {toDate(item.paymentDate)}</div>
                                <div><strong>Tên người nộp:</strong> {item.payerName}</div>
                            </div>

                            <div style={{
                                width: '30%',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'space-between'
                            }}>
                                <div><strong>Ngày tạo:</strong> {toDate(item.createDate)}</div>
                                <div><strong>Người tạo:</strong> {item.ownerName}</div>
                            </div>

                            <Space direction='horizontal'>
                                <Button type='primary' size='large' onClick={() => {
                                    setFocusBill(item)
                                    setBillViewModal(true)
                                }}>Xem</Button>
                                <Button type='primary' size='large' danger disabled={
                                    item.paymentDate !== null
                                }>Nhắc</Button>
                            </Space>
                        </div>
                    )
                })
            }
        </Modal>
    )
}