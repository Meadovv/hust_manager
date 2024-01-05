import { Modal } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import {
    InputNumber,
    Divider,
    Upload,
    message
} from 'antd'
import { useState } from 'react'

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

const defaultInfo = {
    floor: null,
    name: null
}

export default function RoomAddModal({ visible, onCancel, onOk }) {

    const [fileList, setFileList] = useState([])
    const [roomInfo, setRoomInfo] = useState(defaultInfo)

    const handleChange = ({ fileList: newFileList }) => setFileList(newFileList);

    return (
        <Modal
            forceRender
            title="Thêm phòng trọ"
            open={visible}
            onCancel={onCancel}
            onOk={async () => {
                const images = []
                for (let i = 0; i < fileList.length; ++i) {
                    images.push(await getBase64(fileList[i].originFileObj))
                }
                onOk(roomInfo, images)
                setFileList([])
                setRoomInfo(defaultInfo)
            }}
            okButtonProps={{
                size: 'large'
            }}
            cancelButtonProps={{
                size: 'large',
            }}
            width={1000}
        >
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
                        width: '50%',
                        display: 'flex',
                        alignItems: 'center'
                    }}>
                        <div style={{
                            width: '20%'
                        }}>
                            <strong>Tầng: </strong>
                        </div>
                        <InputNumber value={roomInfo.floor} style={{ width: '80%', marginLeft: 10 }} onChange={(value) => {
                            setRoomInfo({
                                ...roomInfo,
                                floor: value
                            })
                        }} />
                    </div>

                    <div style={{
                        width: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        marginLeft: 20
                    }}>
                        <div style={{
                            width: '20%'
                        }}>
                            <strong>Phòng: </strong>
                        </div>
                        <InputNumber value={roomInfo.name} style={{ width: '80%', marginLeft: 10 }} onChange={(value) => {
                            setRoomInfo({
                                ...roomInfo,
                                name: value
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
            </div>
        </Modal>
    )
}