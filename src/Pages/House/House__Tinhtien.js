import { useEffect, useState } from 'react'
import { Row, Col, Card, Input } from 'antd'
import Layout from '../../Components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import MyList from '../../Components/MyList/MyList'

const TongdichvutheoPhong = [
    {
        "IDPhong" : "1",
        "IDKhu" : "1",
        "TenPhong": "101",
        "SoDien" : "100",
        "GiaDien" "3.5",
        "SoNuoc" : "15",
        "GiaNuoc" : "25",
        "Soxe" : "2",
        "PhiGuiXe": "50",
        "PhiWIFI": "100",
        "PhiDVChung": "80",
        "TinhTrang": "Chưa đóng"      
    }
]

const House__Dichvu= () => {

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
                                backgroundColor: '#ffffff'
                            }}>
                                <div class="" style={{
                                    height: 100
                                }}>
                                    <h1 style={{
                                        fontSize: '3rem', 
                                        padding: 50,
                                        color:'var(--main-color-bold)'
                                    }}> TỔNG HÓA ĐƠN DỊCH VỤ CỦA PHÒNG THEO THÁNG</h1>
                                </div>    
                                
                        
                                <div class="selectRoomdiv grid__row" style={{
                                    width: '100%',
                                    paddingLeft: 50,
                                }}>
                                    <i class="fa-solid fa-magnifying-glass" style={{
                                        color: 'var(--main-color)',
                                        fontSize: '2.6rem',
                                        marginRight: 12
                                    }}></i>
                                    <select name="TenPhong" id="TenPhong" class="" style={{
                                        height: 40,
                                        width: 200,
                                        border: 'solid 2px var(--main-color)',
                                        borderRadius: 25,
                                        fontSize: '1.8rem',
                                        paddingLeft: 24
                                    }}> 
                                                  
                                        <option disabled selected hidden >Phòng số *</option>
                                        { 
                                            TongdichvutheoPhong && TongdichvutheoPhong.map((item, index) => {
                                            return (
                                                <option value={item.TenPhong}> {item.TenPhong} </option>
                                            )}
                                            )
                                        }
                                    </select>
                                </div>

                                {/*Cái div dưới đây là sau khi nó chọn phòng thì mới hiện div chứa database của phòng*/}

                                <div class="Chiso__Phong" style={{
                                    width: '90%',
                                    borderRadius: 25,
                                    border: '2px solid var(--main-color)',
                                    margin: 20,
                                    padding: 30
                                }}>
                                    <p style={{
                                        fontSize: '2.5rem',
                                        color: 'var(--main-color-bold)',
                                        marginLeft: 50,
                                        marginBottom: 40
                                    }}> Phòng --Tên phòng-- </p>
                                    <div class="grid__row " style ={{
                                        width: '100%'
                                    }}>                                
                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">Tổng số điện: </p>
                                                </div>

                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">ghi số điện ra </p>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">Tiền điện </p>
                                                </div>

                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">Tính ra số tiền </p>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">Tổng số nước:  </p>
                                                </div>

                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">ghi số nước ra </p>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">Tiền nước:  </p>
                                                </div>

                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">Tính tiền nước đê </p>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">Số xe đăng ký: </p>
                                                </div>

                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">Lấy database nào </p>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">Tiền gửi xe: </p>
                                                </div>

                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">Nghèo rớt xác  </p>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">Tiền WIFI:  </p>
                                                </div>

                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">Cái này không cần tính </p>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">Dịch vụ chung: </p>
                                                </div>

                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">cũng sẵn có luôn </p>
                                                </div>
                                                
                                            </div>
                                        </div>

                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">Tình trạng: </p>
                                                </div>

                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label">Đã đóng hay chưa </p>
                                                </div>
                                                
                                            </div>
                                        </div>


                                        <div class="grid__full-width">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-4" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label" style={{
                                                        fontSize: '2.8rem',
                                                        fontWeight: '500'
                                                    }}>Tổng dịch vụ : </p>
                                                </div>

                                                <div class="grid__column-5" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label" style={{
                                                        fontSize: '3.5rem',
                                                        fontWeight: '500',
                                                        color: 'var(--main-color)'
                                                    }}>Tính tổng tiền ở đây </p>
                                                </div>

                                                <div class="grid__column-3" style={{
                                                    padding:0
                                                }}>
                                                    <p class="form__addRoom-label" style={{
                                                        fontSize: '2rem',
                                                        fontWeight: '500',
                                                        color: 'var(--main-color)'
                                                    }}> nghìn đồng </p>
                                                </div>

                                            </div>
                                        </div>    
                                    </div>
                                </div>

                                <div class="" style={{
                                    height: 100,
                                    width: '90%',
                                    fontSize: '1.8rem',
                                    padding: '0 50px',
                                    color: '#c5c4c4',
                                    lineHeight: '2rem'
                                }}>
                                    <p > ** Các hộ vui lòng thanh toán đúng hạn mỗi tháng theo hợp đồng đã ghi rõ, mọi thắc mắc xin liên hệ trực tiếp chủ nhà để được giải đáp nhanh chóng **</p>
                                </div>
                            </div> 
                                
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
