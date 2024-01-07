import { useEffect, useState } from "react"
import { Button, Space, message } from 'antd';
import { useParams } from "react-router-dom"
import axios from 'axios'
import BillViewModal from "../../../../Components/Modal/BillViewModal"
import VerifiedBillModal from "../../../../Components/Modal/VerifiedBillModal";

const toDate = (millis) => {
    const date = new Date(millis)
    return date.toLocaleString('en-GB')
}


export default function BillView() {

    const [billList, setBillList] = useState([])
    const [focusBill, setFocusBill] = useState(null)
    const [billViewModal, setBillViewModal] = useState(false)
    const [verifiedBillModal, setVerifiedBillModal] = useState(false)

    const getUnpaidBill = async () => {
        await axios.post('/room/get-unpaid-bill', {

        }, {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        }).then(res => {
            if(res.data.success) {
                setBillList(res.data.paymentList)
            } else {
                setBillList([])
            }
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getUnpaidBill()
    }, [])

    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight: '100%',
            padding: 10
        }}>
            <VerifiedBillModal
                visible={verifiedBillModal}
                onCancel={() => setVerifiedBillModal(false)}
                onOK={() => {
                    getUnpaidBill()
                    setVerifiedBillModal(false)
                }}
                bill={focusBill}
            />
            <BillViewModal
                visible={billViewModal}
                onCancel={() => setBillViewModal(false)}
                onOk={() => setBillViewModal(false)}
                bill={focusBill}
            />
            <div style={{
                display: billList.length ? 'none' : 'flex',
                padding: '1rem'
            }}>
                Không có dữ liệu
            </div>
            {
                billList && billList.map((item, index) => {

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

                                <Button type='primary' size='large' onClick={() => {
                                    setFocusBill(item)
                                    setVerifiedBillModal(true)
                                }} disabled={item.paymentDate}>Xác nhận thanh toán</Button>
                            </Space>
                        </div>
                    )
                })
            }
        </div>
    )
}