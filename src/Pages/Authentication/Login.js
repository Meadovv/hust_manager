import { Input, Divider, Form, Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const backgroundUrl = "/images/login-background.jpg"

const Login = () => {

    const navigate = useNavigate()

    const handleLogin = () => {

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
                width: '35%',
                height: '60vh',
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
                    onFinish={handleLogin}
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
                    }}>Đăng nhập</h2>
                    <Form.Item
                        name='email'
                        label='Email'
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
                            width: '100%',
                            padding: 10
                        }}
                    >
                        <Input.Password />
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
                            Đăng nhập
                        </Button>
                    </div>
                </Form>
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: 20
                }}>
                    <div>Bạn chưa có tài khoản ?</div>
                    <div style={{
                        marginLeft: 5,
                        color: '#0b6d16',
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }} onClick={() => {
                        navigate('/register')
                    }}>Đăng kí</div>
                </div>
            </div>
        </div>
    )
}

export default Login