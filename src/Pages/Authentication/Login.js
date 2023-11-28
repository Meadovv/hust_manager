import { Input, Divider, Button } from 'antd'

const backgroundUrl = "/images/login-background.jpg"

const Login = () => {

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
                width: '30%',
                height: '60vh',
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
                        fontSize: 35
                    }}>Đăng nhập</div>
                </Divider>
            </div>
        </div>
    )
}

export default Login