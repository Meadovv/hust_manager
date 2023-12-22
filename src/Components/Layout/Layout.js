import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import { CommentOutlined } from '@ant-design/icons';
import { FloatButton } from 'antd'

const Layout = ({ children }) => {
    return (
        <> 
            <FloatButton
                icon={<CommentOutlined />} 
                shape="circle"
                badge={{
                    count: 5
                }}
                style={{
                    right: 24,
                }}
            />
            <div style={{
                display: 'flex',
                width: '100%',
                height: '100vh',
                flexDirection: 'column'
            }}>
                <Header />
                {children}
                <Footer />
            </div>
        </>
    )
}

export default Layout