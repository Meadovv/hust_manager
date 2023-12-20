import {
    Input,
    Button,
    Form,
    Row,
    DatePicker,
    Select,
    message
} from 'antd'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

const backgroundUrl = "/images/login-background.jpg"

const Register = () => {

    const navigate = useNavigate()

    const handleRegister = async (values) => {
        if(values.password !== values.repassword) {
            message.error('Password no match!')
            return
        }
        await axios.post('/authentication/register',
            {
                username: values.username,
                password: values.password,
                firstName: values.firstName,
                lastName: values.lastName,
                dob: dayjs(values.dob).valueOf(),
                role: values.role
            }).then(res => {
                if (res.data.success) {
                    message.success(res.data.message)
                    navigate('/login')
                } else {
                    message.error(res.data.message)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <div style={{
            backgroundImage: `url(${backgroundUrl})`,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            height: '100vh',
            width: '100%',
            backgroundSize: 'cover',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
        }}>
            <div style={{
                width: '40%',
                height: '85vh',
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 10,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
            }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center'
                }}>
                    <div style={{
                        textTransform: 'uppercase',
                        display: 'flex',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: 30,
                        color: '#0b6d16'
                    }}>Ký túc xá - Nhà trọ - Chung cư</div>
                    <div style={{
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 26,
                    }}>Quản lý chuyên nghiệp!</div>
                </div>
                <Form
                    layout='vertical'
                    onFinish={handleRegister}
                    style={{
                        marginTop: 20,
                        padding: 10,
                        border: '2px solid #95b399',
                        borderRadius: 10
                    }}
                >
                    <h2 style={{
                        textTransform: 'uppercase',
                        display: 'flex',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        fontSize: 24,
                        color: '#0b6d16'
                    }}>Đăng ký</h2>
                    <Row>
                        <Form.Item
                            name='firstName'
                            label='Họ'
                            rules={[
                                {
                                    required: true,
                                    message: 'Cần có',
                                },
                            ]}
                            style={{
                                display: 'block',
                                width: '50%',
                                padding: 10
                            }}
                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            name='lastName'
                            label='Tên'
                            rules={[
                                {
                                    required: true,
                                    message: 'Cần có',
                                },
                            ]}
                            style={{
                                display: 'block',
                                width: '50%',
                                padding: 10
                            }}
                        >
                            <Input />
                        </Form.Item>
                    </Row>

                    <Form.Item
                        name='username'
                        label='Tên đăng nhập'
                        rules={[
                            {
                                required: true,
                                message: 'Cần có',
                            },
                        ]}
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: 10
                        }}
                    >
                        <Input />
                    </Form.Item>

                    <Row>
                        <Form.Item
                            name='password'
                            label='Mật khẩu'
                            rules={[
                                {
                                    required: true,
                                    message: 'Cần có',
                                },
                            ]}
                            style={{
                                display: 'block',
                                width: '50%',
                                padding: 10
                            }}
                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            name='repassword'
                            label='Nhập lại mật khẩu'
                            rules={[
                                {
                                    required: true,
                                    message: 'Cần có',
                                },
                            ]}
                            style={{
                                display: 'block',
                                width: '50%',
                                padding: 10
                            }}
                        >
                            <Input.Password />
                        </Form.Item>
                    </Row>

                    <Form.Item
                        name='dob'
                        label='Ngày sinh'
                        rules={[
                            {
                                required: true,
                                message: 'Cần có',
                            },
                        ]}
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: 10
                        }}
                    >
                        <DatePicker style={{
                            width: '100%'
                        }} />
                    </Form.Item>

                    <Form.Item
                        name='role'
                        label='Vai trò'
                        rules={[
                            {
                                required: true,
                                message: 'Cần có',
                            },
                        ]}
                        style={{
                            display: 'block',
                            width: '100%',
                            padding: 10
                        }}
                    >
                        <Select
                            placeholder='Chọn'
                            options={[
                                {
                                    label: 'Chủ trọ',
                                    value: 'owner'
                                },
                                {
                                    label: 'Người thuê trọ',
                                    value: 'user'
                                }
                            ]}
                        />
                    </Form.Item>

                    <div style={{
                        padding: 10
                    }}>
                        <Button
                            type='primary'
                            htmlType='submit'
                            block size='large'
                            style={{
                                backgroundColor: '#0b6d16',
                                fontWeight: 'bold'
                            }}
                        >
                            Đăng ký
                        </Button>
                    </div>
                </Form>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 20
                }}>
                    <div>Bạn đã có tài khoản ?</div>
                    <div style={{
                        marginLeft: 5,
                        color: '#0b6d16',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }} onClick={() => {
                        navigate('/login')
                    }}>Đăng nhập</div>
                </div>
            </div>
        </div>
    )
}

export default Register