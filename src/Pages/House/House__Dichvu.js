import { useEffect, useState } from 'react'
import { Row, Col, Card, Input } from 'antd'
import Layout from '../../Components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import MyList from '../../Components/MyList/MyList'


const DichVuList = [
    {
        "IDKhu" : "1",
        "Dien": "3.5",
        "Nuoc": "25",
        "DeXe": "100",
        "WIFI": "50",
        "DichvuChung": "80",
        "IDChu": "78",
        "DIACHI": "Hoàng Mai, Hà Nội"
    }

    
]

const House__Dichvu = () => {

    const navigate = useNavigate()

    return(
        <Layout>
            <div id="Trang-chu" class="Homepage">
                <div class="grid">

                    <div class="Khu_tro grid__row">
                        <div class="Search__lable grid__column-2">
                            <h1 class="" style={{
                                color: 'var(--main-color-bold)'
                            }}>
                                CƠ SỞ : 
                            </h1>
                        </div>
                
                        <div class="Search__list grid__column-10">
                            <h1 class="" style={{
                                color: 'var(--main-color-bold)'
                            }}>
                                Địa chỉ khu trọ ghi ở đây
                            </h1>
                        </div>

                    </div>


                    <div class="grid__row">
                        <div class="grid__column-2">
                            <nav class="category">
                                <h3 class="category__heading">
                                    <i class="category__heading-icon fa-solid fa-list-ul" ></i>
                                    Danh mục
                                </h3>

                                <ul class="category-list">
                                    <li class="category-item category-item--active">
                                        <a href="" id="showRoom" class="category-item__link">
                                            <i class="category-item__link-icon fa-solid fa-house" ></i>
                                            Phòng
                                        </a>
                                    </li>
                                    <li class="category-item category-item--active">
                                        <a href="" class="category-item__link">
                                            <i class="category-item__link-icon fa-solid fa-money-check"></i>
                                            Dịch vụ
                                        </a>
                                    </li>
                                    <li class="category-item category-item--active">
                                        <a href="" class="category-item__link">
                                            <i class="category-item__link-icon fa-solid fa-lightbulb"></i>
                                            Chỉ số điện
                                        </a>
                                    </li>
                                    <li class="category-item category-item--active">
                                        <a href="" class="category-item__link">
                                            <i class="category-item__link-icon fa-solid fa-droplet"></i>
                                            Chỉ số nước
                                        </a>
                                    </li>
                                    <li class="category-item category-item--active">
                                        <a href="" class="category-item__link">
                                            <i class="category-item__link-icon fa-solid fa-calculator"></i>
                                            Tính tiền
                                        </a>
                                    </li>
                                </ul>

                            </nav>
                        </div>

                        <div class="grid__column-10">
                            <div  class="Homepage__background" style={{
                                backgroundColor: '#efeded'
                            }}>
                                    <div class="" style={{
                                        height: 100
                                    }}>
                                        <h1 style={{
                                            fontSize: '3rem', 
                                            padding: 50,
                                            color:'var(--main-color-bold)'
                                        }}> THÔNG TIN DỊCH VỤ</h1>
                                    </div>

                                    <div class="grid__row" style={{
                                        width: '100%', 
                                        marginTop: 50,
                                        display: 'flex',
                                        justifyContent: 'center'
                                    }}>                                   

                                        <div class="grid__column-10" style = {{
                                            paddingBottom: 10,
                                            paddingLeff: 80
                                        }}>
                                            <div class="grid__row" style={{
                                                backgroundColor: 'var(--white-color)',
                                                borderRadius: 35,
                                                border: '2px solid var(--main-color-bold)'
                                            }}>
                                                <div class="grid__column-3">
                                                    <div class="text-center" style={{
                                                        fontSize: '3rem',
                                                        color: 'var(--main-color-bold)',
                                                        lineHeight: 42
                                                    }}>
                                                        ĐIỆN
                                                    </div>
                                                </div>
                                                
                                                <div class="grid__column-4">
                                                    <div class="text-center" style={{
                                                        fontSize: '3rem',
                                                        color: 'var(--main-color-bold)',
                                                        lineHeight: 42
                                                    }}>
                                                        tiền điện
                                                    </div>
                                                </div>
                                                
                                                <div class="grid__column-4">
                                                    <h2 class="text-center">
                                                        nghìn đồng / số 
                                                    </h2>
                                                </div>
        
                                            </div>
                                        </div>
        
                                        <div class="grid__column-10" style = {{
                                            paddingBottom: 10,
                                            paddingLeff: 80
                                        }}>
                                            <div class="grid__row" style={{
                                                backgroundColor: 'var(--white-color)',
                                                borderRadius: 35,
                                                border: '2px solid var(--main-color-bold)'
                                            }}>
                                                <div class="grid__column-3">
                                                    <div class="text-center" style={{
                                                        fontSize: '3rem',
                                                        color: 'var(--main-color-bold)',
                                                        lineHeight: 42
                                                    }}>
                                                        NƯỚC
                                                    </div>
                                                </div>
                                                
                                                <div class="grid__column-4">
                                                    <div class="text-center" style={{
                                                        fontSize: '3rem',
                                                        color: 'var(--main-color-bold)',
                                                        lineHeight: 42
                                                    }}>
                                                        tiền nước
                                                    </div>
                                                </div>
                                                
                                                <div class="grid__column-4">
                                                    <h2 class="text-center">
                                                        nghìn đồng / khối
                                                    </h2>
                                                </div>
        
                                            </div>
                                        </div>
        
                                        <div class="grid__column-10" style = {{
                                            paddingBottom: 10,
                                            paddingLeff: 80
                                        }}>
                                            <div class="grid__row" style={{
                                                backgroundColor: 'var(--white-color)',
                                                borderRadius: 35,
                                                border: '2px solid var(--main-color-bold)'
                                            }}>
                                                <div class="grid__column-3">
                                                    <div class="text-center" style={{
                                                        fontSize: '3rem',
                                                        color: 'var(--main-color-bold)',
                                                        lineHeight: 42
                                                    }}>
                                                        WIFI
                                                    </div>
                                                </div>
                                                
                                                <div class="grid__column-4">
                                                    <div class="text-center" style={{
                                                        fontSize: '3rem',
                                                        color: 'var(--main-color-bold)',
                                                        lineHeight: 42
                                                    }}>
                                                        tiền mạng
                                                    </div>
                                                </div>
                                                
                                                <div class="grid__column-4">
                                                    <h2 class="text-center">
                                                        nghìn đồng / phòng
                                                    </h2>
                                                </div>
        
                                            </div>
                                        </div>

                                        <div class="grid__column-10" style = {{
                                            paddingBottom: 10,
                                            paddingLeff: 80
                                        }}>
                                            <div class="grid__row" style={{
                                                backgroundColor: 'var(--white-color)',
                                                borderRadius: 35,
                                                border: '2px solid var(--main-color-bold)'
                                            }}>
                                                <div class="grid__column-3">
                                                    <div class="text-center" style={{
                                                        fontSize: '3rem',
                                                        color: 'var(--main-color-bold)',
                                                        lineHeight: 42
                                                    }}>
                                                        GỬI XE
                                                    </div>
                                                </div>
                                                
                                                <div class="grid__column-4">
                                                    <div class="text-center" style={{
                                                        fontSize: '3rem',
                                                        color: 'var(--main-color-bold)',
                                                        lineHeight: 42
                                                    }}>
                                                        tiền gửi xe
                                                    </div>
                                                </div>
                                                
                                                <div class="grid__column-4">
                                                    <h2 class="text-center">
                                                        nghìn đồng / xe
                                                    </h2>
                                                </div>
        
                                            </div>
                                        </div>

                                        <div class="grid__column-10" style = {{
                                            paddingBottom: 10,
                                            paddingLeff: 80
                                        }}>
                                            <div class="grid__row" style={{
                                                backgroundColor: 'var(--white-color)',
                                                borderRadius: 35,
                                                border: '2px solid var(--main-color-bold)'
                                            }}>
                                                <div class="grid__column-3">
                                                    <div class="text-center" style={{
                                                        fontSize: '3rem',
                                                        color: 'var(--main-color-bold)',
                                                        lineHeight: 42
                                                    }}>
                                                        DV CHUNG
                                                    </div>
                                                </div>
                                                
                                                <div class="grid__column-4">
                                                    <div class="text-center" style={{
                                                        fontSize: '3rem',
                                                        color: 'var(--main-color-bold)',
                                                        lineHeight: 42
                                                    }}>
                                                        tiền DV CHUNG
                                                    </div>
                                                </div>
                                                
                                                <div class="grid__column-4">
                                                    <h2 class="text-center">
                                                        nghìn đồng / phòng 
                                                    </h2>
                                                </div>
        
                                            </div>
                                        </div>

                                    </div>
                            </div> 
                                
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
