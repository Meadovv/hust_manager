import { Modal, InputNumber, Input, message } from 'antd';
import { useEffect, useState } from 'react';

export default function BillCreateModal({ visible, onCancel, onOk, room }) {

    const [bill, setBill] = useState(null)

    useEffect(() => {
        setBill({
            tienDien: room?.tienDien,
            tienNuoc: room?.tienNuoc,
            tienNha: room?.tienNha,
            soDien: {
                truoc: room?.soDien,
                nay: room?.soDien + 1
            },
            soNuoc: {
                truoc: room?.soNuoc,
                nay: room?.soNuoc + 1
            },
            heSoTienNha: 1,
            roomId: room?.roomId,
            payerId: room?.roomRent,
            note: ''
        })
    }, [room])

    return (
        <Modal
            forceRender
            title={`Tạo hóa đơn cho phòng ${room?.roomNumber} tầng ${room?.roomFloor}`}
            open={visible}
            onCancel={onCancel}
            onOk={() => {
                if(bill?.soDien.truoc > bill?.soDien.nay || bill?.soNuoc.truoc > bill?.soNuoc.nay) {
                    message.error('Giá trị trên hóa đơn không thể thấp hơn giá trị trước đó')
                    return
                }
                onOk(bill)
            }}
            okButtonProps={{
                size: 'large'
            }}
            cancelButtonProps={{
                size: 'large'
            }}
            width={1000}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%'
            }}>
                <div style={{
                    border: '1px solid #e8e8e8',
                    borderRadius: 10,
                    padding: '1rem',
                    marginTop: '1rem',
                    display: 'flex',
                }}>
                    <div style={{
                        width: '50%',
                    }}>
                        <div style={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}>Thông tin tiền điện</div>
                        <div style={{
                            fontSize: '1rem',
                        }}>Đơn giá: <strong>{bill?.tienDien}</strong> VND/Số</div>
                        <div style={{
                            fontSize: '1rem',
                        }}>Giá trị trên hóa đơn trước: <strong>{bill?.soDien.truoc}</strong></div>
                    </div>

                    <div style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}>Giá trị trên hóa đơn này</div>
                        <InputNumber size='large' style={{ width: '100%' }} value={bill?.soDien.nay} onChange={(value) => {
                            setBill({
                                ...bill,
                                soDien: {
                                    ...bill.soDien,
                                    nay: value
                                }
                            })
                        }}/>
                    </div>
                </div>

                <div style={{
                    border: '1px solid #e8e8e8',
                    borderRadius: 10,
                    padding: '1rem',
                    marginTop: '1rem',
                    display: 'flex',
                }}>
                    <div style={{
                        width: '50%',
                    }}>
                        <div style={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}>Thông tin tiền nước</div>
                        <div style={{
                            fontSize: '1rem',
                        }}>Đơn giá: <strong>{bill?.tienNuoc}</strong> VND/Số</div>
                        <div style={{
                            fontSize: '1rem',
                        }}>Giá trị trên hóa đơn trước: <strong>{bill?.soNuoc.truoc}</strong></div>
                    </div>

                    <div style={{
                        width: '50%',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}>Giá trị trên hóa đơn này</div>
                        <InputNumber size='large' style={{ width: '100%' }} value={bill?.soNuoc.nay} onChange={(value) => {
                            setBill({
                                ...bill,
                                soNuoc: {
                                    ...bill.soNuoc,
                                    nay: value
                                }
                            })
                        }}/>
                    </div>
                </div>

                <div style={{
                    border: '1px solid #e8e8e8',
                    borderRadius: 10,
                    padding: '1rem',
                    marginTop: '1rem',
                    display: 'flex'
                }}>
                    <div style={{
                        width: '50%',
                    }}>
                        <div style={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}>Thông tin tiền phòng</div>
                        <div style={{
                            fontSize: '1rem',
                        }}>Đơn giá: <strong>{bill?.tienNha}</strong> VND/Tháng</div>
                    </div>

                    <div style={{
                        width: '50%',
                    }}>
                        <div style={{
                            fontSize: '1.2rem',
                            fontWeight: 'bold',
                        }}>Hệ số</div>
                        <InputNumber size='large' style={{ width: '100%' }} value={bill?.heSoTienNha} onChange={(value) => {
                            setBill({
                                ...bill,
                                heSoTienNha: value
                            })
                        }}/>
                    </div>
                </div>

                <div style={{
                    marginTop: '1rem',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold',
                    }}>Ghi chú</div>
                    <Input.TextArea placeholder={`Hóa đơn tháng ${new Date().getMonth() + 1} năm ${new Date().getFullYear()}`} style={{
                        fontSize: '1rem',
                        minHeight: '20vh'
                    }} onChange={(e) => setBill({
                        ...bill,
                        note: e.target.value
                    })}/>
                </div>
            </div>
        </Modal>
    )
}