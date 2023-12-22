import { useEffect, useState } from 'react'
import { Row, Col, Card, Input } from 'antd'
import Layout from '../../Components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Home = () => {

    const [apartmentList, setApartmentList] = useState([])
    const [page, setPage] = useState(1)

    const navigate = useNavigate()

    const getApartmentList = async () => {
        await axios.post('/apartment/get-apartment-list',
        {
            userId: 0,
            page: page
        }).then(res => {
            if(res.data.success) {
                setApartmentList(res.data.list)
            } else {
                console.log(res.data.message)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getApartmentList()
    }, [])

    return (
        <Layout>
            <Row style={{
                display: 'flex',
                justifyContent: 'space-between',
                padding: 20
            }}>
                <div style={{
                    fontSize: 18,
                    fontWeight: 'bold'
                }}>Danh sách phòng trọ</div>
                <div style={{
                    width: '50%'
                }}>
                    <Input.Search
                        placeholder='Tìm kiếm'
                        size='large'
                    />
                </div>
            </Row>
            <Row style={{
                width: '100%',
                height: '100vh',
                overflow: 'auto',
                padding: 10
            }} gutter={[16, 16]}>
                {
                    apartmentList.map((item, index) => {
                        return (
                            <Col span={24 / 2} key={index}>
                                <Card
                                    title={item.address}
                                    hoverable
                                    onClick={() => {
                                        navigate(`/apartment/${item.apartmentId}`)
                                    }}
                                >
                                    <Card.Meta
                                        style={{
                                            fontSize: 18
                                        }}
                                        title={`Số phòng trống: ${item.roomNumber - item.rentedRoom}`} 
                                        description={`Tổng số phòng: ${item.roomNumber}`} 
                                    />
                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>
        </Layout>
    )
}

export default Home