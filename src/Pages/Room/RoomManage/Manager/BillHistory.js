import { useEffect, useState } from "react"
import { Button, Space, message } from 'antd';
import axios from 'axios'
import BillViewModal from "../../../../Components/Modal/BillViewModal"
import { useSelector } from "react-redux";

const toDate = (millis) => {
    const date = new Date(millis)
    return date.toLocaleString('en-GB')
}


export default function BillHistory() {

    const [paymentHistory, setPaymentHistory] = useState([])
    const { user } = useSelector(state => state.user)
    const [focusBill, setFocusBill] = useState(null)
    const [billViewModal, setBillViewModal] = useState(false)

    const getPaymentHistory = async (userId) => {
        await axios.post('/room/get-payment-history', {

        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            if(res.data.success) {
                setPaymentHistory(res.data.paymentList)
            } else {
                setPaymentHistory([])
            }
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getPaymentHistory(user?.userId)
    }, [user])

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight: '100%',
            padding: 10
        }}>
            <BillViewModal
                visible={billViewModal}
                onCancel={() => setBillViewModal(false)}
                onOk={() => setBillViewModal(false)}
                bill={focusBill}
            />
            <div style={{
                display: paymentHistory.length ? 'none' : 'flex',
                padding: '1rem'
            }}>
                Không có dữ liệu
            </div>
            {
                paymentHistory && paymentHistory.map((item, index) => {

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
                            </Space>
                        </div>
                    )
                })
            }
        </div>
    )
}