import { useState } from 'react'
import { Row, Col } from 'antd'
import Layout from '../../Components/Layout/Layout'

const Home = () => {

    const [menuSpan, setMenuSpan] = useState(1)

    return (
        <Layout>
            <Row style={{
                width: '100%',
                height: '86vh',
                overflow: 'auto'
            }}>
                <Col span={menuSpan} style={{
                    backgroundColor: 'red',
                    height: '100%'
                }} onMouseEnter={() => { setMenuSpan(4) }} onMouseLeave={() => { setMenuSpan(1) }}>
                    HomePage
                </Col>

                <Col span={24 - menuSpan} style={{
                    backgroundColor: 'blue',
                    height: '100%'
                }}>
                </Col>
            </Row>
        </Layout>
    )
}

export default Home