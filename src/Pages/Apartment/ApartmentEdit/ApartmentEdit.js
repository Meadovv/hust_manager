import { useEffect, useState } from "react";
import Layout from "../../../Components/Layout/Layout";
import { useNavigate, useParams } from "react-router-dom"
import { message, Button, Menu, Divider, Input, InputNumber, Space, Select } from 'antd'
import axios from 'axios'
import { HomeOutlined, AppstoreOutlined, CheckOutlined, AppstoreAddOutlined, FileImageOutlined } from '@ant-design/icons';
import { useSelector } from 'react-redux'
import RoomAddModal from "../../../Components/Modal/RoomAddModal";

const menuItems = [
    {
        label: 'Cơ bản',
        key: 'basic',
        icon: <HomeOutlined />
    },
    {
        label: 'Hình ảnh',
        key: 'image',
        icon: <FileImageOutlined />
    },
    {
        label: 'Phòng',
        key: 'rooms',
        icon: <AppstoreOutlined />
    }
]

const defaultInfo = {
    address: null,
    tienNha: null,
    tienDien: null,
    tienNuoc: null
}

export default function ApartmentEdit() {

    const { user } = useSelector(state => state.user)

    const param = useParams()
    const navigate = useNavigate()

    const [apartment, setApartment] = useState(null)
    const [apartmentImage, setApartmentImage] = useState([])

    const [currentMenu, setCurrentMenu] = useState(menuItems[0].key)

    const [apartmentInfo, setApartmentInfo] = useState(defaultInfo)

    const [addModalVisible, setAddModalVisible] = useState(false)

    const [roomList, setRoomList] = useState([])
    const [rootListFilter, setRoomListFilter] = useState([])

    const [roomFilter, setRoomFilter] = useState({
        floor: -1,
        rented: -1
    })

    const getRoomList = async (apartmentId) => {
        await axios.post('/room/get-room-list', {
            apartmentId: apartmentId,
            filter: roomFilter
        }, {
            headers: {
                Authorization: "Bearer " + localStorage.getItem('token')
            }
        }).then(res => {
            if (res.data.success) {
                setRoomList(res.data.roomList)
            } else {
                setRoomList([])
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const getApartment = async (apartmentId) => {
        await axios.post('/apartment/get-apartment',
            {
                apartmentId: apartmentId
            }).then(res => {
                if (res.data.success) {
                    if (user?.userId !== res.data.apartment.userId) {
                        navigate('/')
                    } else {
                        setApartment(res.data.apartment)
                    }
                } else {
                    message.error(res.data.message)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    const getApartmentImage = async (apartmentId) => {
        await axios.post('/apartment/get-apartment-image',
            {
                apartmentId: apartmentId
            }).then(res => {
                if (res.data.success) {
                    setApartmentImage(res.data.images)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    const selectMenu = (value) => {
        setCurrentMenu(value.key)
    }

    const handleEdit = async () => {
        await axios.post('/apartment/edit-apartment',
            {
                apartmentInfo: apartmentInfo,
                apartmentId: apartment.apartmentId
            },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }).then(res => {
                if (res.data.success) {
                    message.success(res.data.message)
                    refreshInformation()
                } else {
                    message.error(res.data.message)
                }
            }).catch(err => {
                console.log(err)
            })
        setApartmentInfo(apartmentInfo)
    }

    const refreshInformation = () => {
        getApartment(param.apartmentId)
        getRoomList(param.apartmentId)
        getApartmentImage(param.apartmentId)
    }

    useEffect(() => {
        refreshInformation()
    }, [])

    useEffect(() => {
        let rooms = []
        roomList?.forEach(room => {
            if (roomFilter.floor !== -1 && room.floor !== roomFilter.floor) return
            if (roomFilter.rented !== -1 && room.status !== roomFilter.rented) return

            rooms.push(room)
        })
        setRoomListFilter(rooms)
    }, [roomFilter, roomList])

    const handleAddRoom = async (roomInfo, imageList) => {
        await axios.post('/room/add', {
            apartmentId: apartment?.apartmentId,
            roomInfo: roomInfo,
            roomImage: imageList
        },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }).then(res => {
                if (res.data.success) {
                    message.success(res.data.message)
                    setAddModalVisible(false)
                    refreshInformation()
                } else {
                    message.error(res.data.message)
                }
            }).catch(err => {
                console.log(err)
            })
    }

    return (
        <Layout>
            <RoomAddModal
                visible={addModalVisible}
                onCancel={() => setAddModalVisible(false)}
                onOk={handleAddRoom}
            />
            <div style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                alignItems: 'flex-start',
                padding: 10,
                overflow: 'auto'
            }}>
                <div style={{
                    width: '30%',
                    display: 'flex',
                    flexDirection: 'column'
                }}>
                    <div style={{
                        padding: 20,
                        width: '100%',
                        borderRadius: 10,
                        backgroundColor: '#8F9779',
                        display: 'flex',
                        flexDirection: 'column'
                    }}>
                        <div style={{
                            color: 'white',
                            fontSize: 24,
                            fontWeight: 'bold'
                        }}>
                            Thông tin cơ bản
                        </div>
                        <div style={{
                            fontSize: 20
                        }}>
                            <HomeOutlined style={{
                                marginRight: 10
                            }} />
                            Địa chỉ: {apartment?.address}
                        </div>

                        <div style={{
                            fontSize: 20
                        }}>
                            <AppstoreOutlined style={{
                                marginRight: 10
                            }} />
                            Số phòng: {apartment?.roomNumber}
                        </div>

                        <div style={{
                            fontSize: 20
                        }}>
                            <AppstoreAddOutlined style={{
                                marginRight: 10
                            }} />
                            Số phòng trống: {apartment?.roomNumber - apartment?.rentedRoom}
                        </div>

                        <div style={{
                            fontSize: 20
                        }}>
                            <CheckOutlined style={{
                                marginRight: 10
                            }} />
                            Tiền nhà: {apartment?.tienNha} VND/ 1 Tháng
                        </div>

                        <div style={{
                            fontSize: 20
                        }}>
                            <CheckOutlined style={{
                                marginRight: 10
                            }} />
                            Tiền điện: {apartment?.tienDien} VND/ 1 Số
                        </div>

                        <div style={{
                            fontSize: 20
                        }}>
                            <CheckOutlined style={{
                                marginRight: 10
                            }} />
                            Tiền nước: {apartment?.tienNuoc} VND/ 1 Khối
                        </div>
                    </div>

                    <div style={{
                        padding: 20,
                        width: '100%',
                        borderRadius: 10,
                        backgroundColor: '#8F9779',
                        display: 'flex',
                        flexDirection: 'column',
                        marginTop: 10
                    }}>
                        <div style={{
                            color: 'white',
                            fontSize: 24,
                            fontWeight: 'bold'
                        }}>
                            Hành động
                        </div>

                        <Space direction='vertical' style={{
                            marginTop: 10
                        }}>
                            <Button type='primary' size='large' onClick={() => setAddModalVisible(true)}>Thêm Phòng</Button>
                            <Button type='primary' size='large' danger>Xóa Nhà trọ</Button>
                        </Space>
                    </div>
                </div>

                <div style={{
                    padding: 20,
                    width: '70%',
                    borderRadius: 10,
                    marginLeft: 10,
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                    <Menu
                        onClick={selectMenu}
                        selectedKeys={[currentMenu]}
                        mode="horizontal"
                        items={menuItems}
                    />
                    {
                        currentMenu === menuItems[1].key ?
                            <div style={{
                                display: 'flex',
                                flexWrap: 'wrap',
                                margin: 10
                            }}>
                                <div style={{
                                    width: 400,
                                    height: 400,
                                    margin: 5,
                                    borderRadius: '10%',
                                    border: '1px solid black',
                                    display: apartmentImage.length >= 6 ? 'none' : 'flex',
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                    cursor: 'pointer'
                                }}>
                                    Thêm ảnh
                                </div>
                                {
                                    apartmentImage && apartmentImage.map((item, index) => {
                                        return (
                                            <img key={index} src={item.data} alt='image' style={{
                                                objectFit: 'cover',
                                                maxWidth: '100%',
                                                height: 350,
                                                width: 350,
                                                margin: 5,
                                                borderRadius: '10%',
                                                border: '1px solid black'
                                            }} />
                                        )
                                    })
                                }
                            </div> :
                            currentMenu === menuItems[0].key ?
                                <div style={{
                                    display: 'flex',
                                    width: '100%',
                                    padding: 10
                                }}>
                                    <div style={{
                                        padding: 20,
                                        width: '100%',
                                        borderRadius: 10,
                                        backgroundColor: '#8F9779'
                                    }}>
                                        <Divider orientation="center" style={{
                                            borderColor: 'white'
                                        }}>
                                            <div style={{
                                                fontSize: 18,
                                                fontWeight: 'bold'
                                            }}>Thông tin cơ bản</div>
                                        </Divider>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'space-between'
                                        }}>
                                            <div style={{
                                                width: '100%',
                                                display: 'flex',
                                                alignItems: 'center'
                                            }}>
                                                <div style={{
                                                    width: '10%'
                                                }}>
                                                    <strong>Địa chỉ: </strong>
                                                </div>
                                                <Input style={{ width: '90%', marginLeft: 10 }} onChange={(event) => {
                                                    setApartmentInfo({
                                                        ...apartmentInfo,
                                                        address: event.target.value
                                                    })
                                                }} />
                                            </div>
                                        </div>

                                        <Divider orientation="center" style={{
                                            borderColor: 'white'
                                        }}>
                                            <div style={{
                                                fontSize: 18,
                                                fontWeight: 'bold'
                                            }}>Các khoản phí</div>
                                        </Divider>

                                        <div style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginTop: 10
                                        }}>
                                            <div style={{
                                                width: '10%'
                                            }}>
                                                <strong>Tiền Nhà:</strong>
                                            </div>
                                            <InputNumber style={{ width: '90%', marginLeft: 10 }} addonAfter='VND / 1 Tháng' onChange={(value) => {
                                                setApartmentInfo({
                                                    ...apartmentInfo,
                                                    tienNha: value
                                                })
                                            }} />
                                        </div>

                                        <div style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginTop: 10
                                        }}>
                                            <div style={{
                                                width: '10%'
                                            }}>
                                                <strong>Tiền Điện:</strong>
                                            </div>
                                            <InputNumber style={{ width: '90%', marginLeft: 10 }} addonAfter='VND / 1 Số' onChange={(value) => {
                                                setApartmentInfo({
                                                    ...apartmentInfo,
                                                    tienDien: value
                                                })
                                            }} />
                                        </div>

                                        <div style={{
                                            width: '100%',
                                            display: 'flex',
                                            alignItems: 'center',
                                            marginTop: 10
                                        }}>
                                            <div style={{
                                                width: '10%'
                                            }}>
                                                <strong>Tiền Nước:</strong>
                                            </div>
                                            <InputNumber style={{ width: '90%', marginLeft: 10 }} addonAfter='VND / 1 Khối' onChange={(value) => {
                                                setApartmentInfo({
                                                    ...apartmentInfo,
                                                    tienNuoc: value
                                                })
                                            }} />
                                        </div>

                                        <div style={{
                                            display: 'flex',
                                            width: '100%',
                                            justifyContent: 'flex-end',
                                            marginTop: 10
                                        }}>
                                            <Space>
                                                <Button type='primary' size='large' onClick={handleEdit}>Lưu lại</Button>
                                            </Space>
                                        </div>
                                    </div>
                                </div> :
                                <>
                                    <div style={{
                                        padding: 10,
                                        fontSize: 18,
                                        width: '100%',
                                        marginTop: 10,
                                        display: 'flex',
                                        justifyContent: 'space-between'
                                    }}>
                                        <div style={{
                                            width: '50%'
                                        }}>
                                            <strong style={{
                                                width: '10%',
                                                marginRight: 10
                                            }}>Tầng</strong>
                                            <Select
                                                style={{
                                                    width: '90%'
                                                }}
                                                options={[
                                                    ...Array.from(new Set(roomList.map(room => room.floor)))
                                                        .map(room => ({ value: room, label: `Tầng ${room}` })),
                                                    {
                                                        label: 'Tất cả',
                                                        value: -1
                                                    }
                                                ]}
                                                value={roomFilter.floor}
                                                onChange={(value) => setRoomFilter({ ...roomFilter, floor: value })}
                                            />
                                        </div>

                                        <div style={{
                                            width: '40%'
                                        }}>
                                            <strong style={{
                                                width: '20%',
                                                marginRight: 10
                                            }}>Trạng thái</strong>
                                            <Select
                                                style={{
                                                    width: '80%'
                                                }}
                                                options={[
                                                    {
                                                        label: 'Đã thuê',
                                                        value: 'approved'
                                                    },
                                                    {
                                                        label: 'Chưa thuê',
                                                        value: 'available'
                                                    },
                                                    {
                                                        label: 'Tất cả',
                                                        value: -1
                                                    }
                                                ]}
                                                value={roomFilter.rented}
                                                onChange={(value) => setRoomFilter({ ...roomFilter, rented: value })}
                                            />
                                        </div>
                                    </div>
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'column'
                                    }}>
                                        {
                                            rootListFilter.map((room, index) => {

                                                return (
                                                    <div key={index} style={{
                                                        width: '100%',
                                                        padding: '2rem',
                                                        border: '1px solid black',
                                                        borderRadius: '1rem',
                                                        margin: '1rem',
                                                        display: 'flex',
                                                        justifyContent: 'space-between'
                                                    }}>
                                                        <div>
                                                            <strong>Phòng: {room.number}</strong>
                                                            <div>Tầng: {room.floor}</div>
                                                            <div>Trạng thái: {room.status === 'approved' ? 'Đã có người thuê' : 
                                                                                room.status === 'pending' ? 'Đang chờ xác nhận' : 'Chưa có người thuê'}</div>
                                                        </div>

                                                        <div>
                                                            <Button type='primary' size='large' onClick={() => {
                                                                navigate(`/room/${room.roomId}/edit`)
                                                            }}>Sửa</Button>
                                                            <Button type='primary' size='large' danger style={{
                                                                marginLeft: 10
                                                            }} disabled={room.rented}>Xóa</Button>
                                                        </div>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </>
                    }
                </div>
            </div>
        </Layout>
    )
}