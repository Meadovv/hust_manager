import { useEffect, useState } from 'react';
import Layout from '../../Components/Layout/Layout'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom"
import { message } from 'antd'
import axios from 'axios'

import { UserOutlined, CalendarFilled, CarryOutOutlined } from '@ant-design/icons';
import { Avatar, Button, Space, Modal, Form, Input } from 'antd';

const toDate = (millis) => {
    const date = new Date(millis)
    return date.toLocaleString('en-GB')
}

function AddApartMentModal({ open, submit, onCancel }) {

    const [form] = Form.useForm()

    return (
        <Modal
            forceRender
            title='Thêm nhà trọ'
            okText='Thêm'
            cancelText='Đóng'
            open={open}
            onCancel={onCancel}
            onOk={() => {
                form.validateFields()
                    .then((values) => {
                        form.resetFields()
                        submit(values)
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }}
        >
            <Form
                form={form}
                layout='vertical'
            >
                <Form.Item
                    label='Địa chỉ'
                    name='address'
                    rules={[{ required: true, message: 'Cần có' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label='Số phòng'
                    name='roomNumber'
                    rules={[{ required: true, message: 'Cần có' }]}
                >
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    )
}

export default function Profile() {

    const { user } = useSelector(state => state.user)
    const [currentUser, setCurrentUser] = useState()

    const [openModal, setOpenModal] = useState(false)

    const param = useParams()
    const navigate = useNavigate()

    const getUser = async (userId) => {
        await axios.post('/authentication/verify',
            {
                userId: userId
            },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }).then(res => {
                if (res.data.success) {
                    setCurrentUser(res.data.user)
                } else {
                    message.error('Người dùng không tồn tại')
                }
            }).catch(err => {
                console.log(err)
            })
    }

    const handleAddApartment = async (values) => {
        await axios.post('/apartment/add',
        {
            address: values.address,
            roomNumber: values.roomNumber
        },
        {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
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
        setOpenModal(false)
    }

    useEffect(() => {
        getUser(param.profileId)
    }, [])

    return (
        <Layout>
            <AddApartMentModal
                open={openModal}
                onCancel={() => {
                    setOpenModal(false)
                }}
                submit={handleAddApartment}
            />
            <div style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <div style={{
                    padding: 20,
                    width: '50%',
                    borderRadius: 10,
                    backgroundColor: '#8F9779'
                }}>
                    <div style={{
                        display: 'flex',
                    }}>
                        <div>
                            <Avatar size={64} icon={<UserOutlined />} />
                        </div>
                        <div style={{
                            display: 'flex',
                            justifyContent: 'center',
                            marginLeft: 10,
                            flexDirection: 'column'
                        }}>
                            <div style={{
                                fontSize: 18,
                                fontWeight: 'bold',
                            }}>{currentUser?.firstName} {currentUser?.lastName}</div>
                            <div style={{
                                padding: 5,
                                backgroundColor: '#32de84',
                                border: '1px solid #006A4E',
                                display: 'flex',
                                justifyContent: 'center',
                                borderRadius: 10
                            }}>
                                {
                                    currentUser?.role === 'user' ? 'Người thuê trọ' : 'Chủ trọ'
                                }
                            </div>
                        </div>
                    </div>

                    <div style={{
                        padding: 10,
                        fontSize: 24
                    }}>
                        <CalendarFilled style={{
                            marginRight: 10
                        }} />
                        Ngày sinh: {toDate(currentUser?.dob).split(', ')[0]}
                    </div>

                    <div style={{
                        padding: 10,
                        fontSize: 24
                    }}>
                        <CarryOutOutlined style={{
                            marginRight: 10
                        }} />
                        Ngày tham gia: {toDate(currentUser?.createDate).split(', ')[0]}
                    </div>

                    <div style={{
                        padding: 10,
                        display: 'flex',
                        justifyContent: 'space-between'
                    }}>
                        <Space>
                            <Button type='primary' size='large' >Chỉnh sửa thông tin</Button>
                            <Button type='primary' size='large' onClick={() => { setOpenModal(true) }}>Thêm nhà trọ</Button>
                        </Space>

                        <Button type='primary' size='large' danger onClick={() => { navigate('/logout') }}>Đăng xuất</Button>
                    </div>
                </div>
            </div>
        </Layout>
    )
}