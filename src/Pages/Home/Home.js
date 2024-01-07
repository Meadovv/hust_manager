import { useEffect, useState } from 'react'
import { Row, Col, Card, Input, Button, message } from 'antd'
import Layout from '../../Components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Home = () => {

    const { user } = useSelector(state => state.user)

    const [apartmentList, setApartmentList] = useState([])
    const [page, setPage] = useState(1)
    const [keyword, setKeyword] = useState(null)

    const navigate = useNavigate()

    const getApartmentList = async () => {
        await axios.post('/apartment/get-apartment-list',
            {
                blacklist: user?.userId,
                userId: 0,
                page: page,
                keyword: keyword
            }).then(res => {
                if (res.data.success) {
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
    }, [user, page, keyword])

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
                        allowClear
                        placeholder='Tìm kiếm'
                        size='large'
                        onSearch={(value) => {
                            setKeyword(value)
                        }}
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
                                        navigate(`/apartment/${item.apartmentId}/view`)
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
            <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginTop: 10,
                padding: 20
            }}>
                <Button type='primary' size='large' onClick={() => {
                    let previousPage = page - 1
                    if (!(previousPage < 1)) setPage(previousPage)
                }}>Previous</Button>
                <div style={{
                    fontSize: 18,
                    fontWeight: 'bold',
                    color: 'black',
                    display: 'flex',
                    alignItems: 'center'
                }}>Page: {page}</div>
                <Button type='primary' size='large' onClick={() => {
                    let nextPage = page + 1
                    setPage(nextPage)
                }}>Next</Button>
            </div>
        </Layout>
    )
}

export default Home