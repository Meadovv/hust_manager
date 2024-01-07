import React, { useEffect, useState } from 'react';
import { Modal, Input, message } from 'antd';
import axios from 'axios';

export default function VerifiedBillModal ({ visible, onOK, onCancel, bill }) {

    const [verifiedCode, setVerifiedCode] = useState(null)

    useEffect(() => {
        console.log(bill)
    }, [bill])

    return (
        <Modal
            title="Xác nhận thanh toán"
            open={visible}
            onCancel={onCancel}
            onOk={async () => {
                if(verifiedCode === '' || verifiedCode === null) {
                    message.error('Mã thanh toán không được để trống')
                } else {
                    await axios.post('/room/pay-bill', {
                        paymentCode: verifiedCode,
                        billId: bill.billId
                    }, {
                        headers: {
                            Authorization: 'Bearer ' + localStorage.getItem('token')
                        }
                    }).then(res => {
                        if(res.data.success) {
                            message.success(res.data.message)
                        } else {
                            message.error(res.data.message)
                        }
                    }).catch(err => {
                        console.log(err)
                        message.error(err.message)
                    })
                    onOK()
                }
            
            }}
            okButtonProps={{
                size: 'large'
            }}
            cancelButtonProps={{
                size: 'large'
            }}
        >
            <Input addonBefore='Mã thanh toán' size='large' onChange={(e) => setVerifiedCode(e.target.value)}/>
        </Modal>
    )
}