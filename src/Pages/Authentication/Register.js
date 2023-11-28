import { 
    Input, 
    Divider, 
    Button, 
    Form, 
    Row, 
    DatePicker, 
    Select,
    message
} from 'antd'
import axios from 'axios'

const backgroundUrl = "/images/login-background.jpg"

const Register = () => {

    const handleRegister = async (values) => {
        await axios.post('http://localhost:8082/register', 
        {
            username: values.username,
            password: values.password
        }).then(res => {
            if(res.data.success) {
                message.success(res.data.message)
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
                height: '95vh',
                backgroundColor: 'white',
                borderRadius: 10,
                padding: 10
            }}>
                <Divider orientation='center' style={{
                    borderColor: 'black'
                }}>
                    <div style={{
                        textTransform: 'uppercase',
                        fontWeight: 'bold',
                        fontSize: 25
                    }}>Đăng ký</div>
                </Divider>
                <Form
                    layout='vertical'
                    onFinish={handleRegister}
                >
                    <Row>
                        <Form.Item
                            name='first_name'
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
                            name='last_name'
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
                        }}/>
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
                                backgroundColor: '#9A7B4F'
                            }}
                        >
                            Đăng ký
                        </Button>
                    </div>
                </Form>
            </div>
        </div>
    )
}

export default Register