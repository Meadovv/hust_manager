import { useState } from "react";
import Layout from "../../../Components/Layout/Layout";
import {
    Button,
    Space,
    Input,
    InputNumber,
    Divider,
    Upload,
    message
} from 'antd'
import { PlusOutlined } from '@ant-design/icons';
import axios from 'axios'

const uploadButton = (
    <div>
        <PlusOutlined />
        <div
            style={{
                marginTop: 8,
            }}
        >
            Upload
        </div>
    </div>
);

const getBase64 = (file) =>
    new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
    });

export default function ApartmentCreate() {

    const [apartmentInfo, setApartmentInfo] = useState({
        address: null,
        tienNha: null,
        tienDien: null,
        tienNuoc: null
    })

    const [fileList, setFileList] = useState([])

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    const handleAddApartment = async () => {
        const images = []
        for (let i = 0; i < fileList.length; ++i) {
            images.push(await getBase64(fileList[i].originFileObj))
        }

        await axios.post('/apartment/add',
            {
                apartmentInfo: apartmentInfo,
                apartmentImage: images
            },
            {
                headers: {
                    Authorization: "Bearer " + localStorage.getItem('token')
                }
            }).then(res => {
                if (res.data.success) {
                    message.success(res.data.message)
                } else {
                    message.error(res.data.message)
                }
            }).catch(err => {
                console.log(err)
                message.error(err.message)
            })
    }

    return (
        <Layout>
            <div style={{
                width: '100%',
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 10
            }}>
                <div style={{
                    padding: 20,
                    width: '50%',
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

                    <Divider orientation="center" style={{
                        borderColor: 'white'
                    }}>
                        <div style={{
                            fontSize: 18,
                            fontWeight: 'bold'
                        }}>Các hình ảnh</div>
                    </Divider>

                    <Upload
                        beforeUpload={(file) => {
                            return false
                        }}
                        listType="picture-card"
                        fileList={fileList}
                        onChange={handleChange}
                    >
                        {fileList.length >= 6 ? null : uploadButton}
                    </Upload>


                    <div style={{
                        display: 'flex',
                        width: '100%',
                        justifyContent: 'flex-end',
                        marginTop: 10
                    }}>
                        <Space>
                            <Button type='primary' size='large' onClick={handleAddApartment}>Thêm</Button>
                            <Button type='primary' size='large' danger>Thoát</Button>
                        </Space>
                    </div>
                </div>
            </div>
        </Layout>
    )
}