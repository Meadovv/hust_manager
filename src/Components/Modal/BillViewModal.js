import React from 'react';
import { Modal, Divider } from 'antd';

const toDate = (millis) => {
    const date = new Date(millis)
    return date.toLocaleString('en-GB')
}

export default function BillViewModal({visible, onOk, onCancel, bill}) {

    return (
        <Modal
            forceRender
            title={`Chi tiết hóa đơn`}
            open={visible}
            onOk={onOk}
            onCancel={onCancel}
            okButtonProps={{
                size: 'large'
            }}
            cancelButtonProps={{
                size: 'large'
            }}
            width={800}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                fontSize: '1rem',
            }}>
                <Divider orientation='left' style={{
                    borderColor: 'black'
                }}>
                    <div style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold'
                    }}>Tạo</div>
                </Divider>
                <div>
                    <div><strong>Người tạo:</strong> {bill?.ownerName}</div>
                    <div><strong>Ngày tạo:</strong> {toDate(bill?.createDate)}</div>
                    <div><strong>Hóa đơn:</strong> Phòng {bill?.roomNumber}, Tầng {bill?.roomFloor}</div>
                </div>
                <Divider orientation='left' style={{
                    borderColor: 'black'
                }}>
                    <div style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold'
                    }}>Hóa đơn</div>
                </Divider>
                <div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <div style={{
                            fontWeight: 'bold'
                        }}>Tiền điện</div>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <div><strong>Đơn giá:</strong> {bill?.heSoTienDien} VND / số</div>
                            <div><strong>Số trước:</strong> {bill?.soDienTruoc}</div>
                            <div><strong>Số sau:</strong> {bill?.soDienSau}</div>
                            <div><strong>Thành tiền:</strong> {bill?.heSoTienDien * (bill?.soDienSau - bill?.soDienTruoc)} VND</div>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <div style={{
                            fontWeight: 'bold'
                        }}>Tiền nước</div>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <div><strong>Đơn giá:</strong> {bill?.heSoTienNuoc} VND / số</div>
                            <div><strong>Số trước:</strong> {bill?.soNuocTruoc}</div>
                            <div><strong>Số sau:</strong> {bill?.soNuocSau}</div>
                            <div><strong>Thành tiền:</strong> {bill?.heSoTienNuoc * (bill?.soNuocSau - bill?.soNuocTruoc)} VND</div>
                        </div>
                    </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <div style={{
                            fontWeight: 'bold'
                        }}>Tiền phòng</div>
                        <div style={{
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between'
                        }}>
                            <div><strong>Đơn giá:</strong> {bill?.heSoTienNha} VND / Tháng</div>
                            <div><strong>Số tháng:</strong> {bill?.tienNha}</div>
                            <div><strong>Thành tiền:</strong> {bill?.heSoTienNha * bill?.tienNha} VND</div>
                        </div>

                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginTop: 10
                    }}>
                        <div style={{
                            fontWeight: 'bold',
                            fontSize: '1.2rem'
                        }}>Tổng thanh toán: {
                            bill?.heSoTienDien * (bill?.soDienSau - bill?.soDienTruoc) + 
                            bill?.heSoTienNuoc * (bill?.soNuocSau - bill?.soNuocTruoc) +
                            bill?.heSoTienNha * bill?.tienNha
                        } VND</div>
                    </div>
                    </div>
                </div>
                <Divider orientation='left' style={{
                    borderColor: 'black'
                }}>
                    <div style={{
                        fontSize: '1.2rem',
                        fontWeight: 'bold'
                    }}>Chi tiết thanh toán</div>
                </Divider>
                <div>
                    <div style={{
                        color: bill?.paymentDate === null ? 'red' : 'green'
                    }}><strong>Trạng thái:</strong> {(bill?.paymentDate === null ? 'Chưa thanh toán' : 'Đã thanh toán')}</div>
                    <div><strong>Người thanh toán:</strong> {bill?.payerName}</div>
                    <div  style={{
                        display: bill?.paymentDate === null ? 'none' : '',
                    }}><strong>Ngày thanh toán:</strong> {toDate(bill?.paymentDate)}</div>
                </div>
            </div>
        </Modal>
    )
}