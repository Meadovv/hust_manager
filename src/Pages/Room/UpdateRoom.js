import { useEffect, useState } from 'react'
import { Row, Col, Card, Input } from 'antd'
import Layout from '../../Components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UpdateRoom= () => {

    const navigate = useNavigate()

    return(
        <Layout>
            <div class="modal__overlay" >
                <div class="grid">
                    <form action="" method="">
                        <div class="form__container grid__row" style={{
                            width: '85%',
                            margin: '50px auto'
                        }}>
                            <div class="grid__column-4" style = {{
                                backgroundImage: 'linear-gradient(110deg,#116c19,#b2d84a)',
                                borderTopLeftRadius: 25,
                                borderBottomLeftRadius: 25
                            }}>
                                <div class="form__header ">
                                    <h1 class="h1__font-size form__heading-h1">
                                        NHÀ TRỌ - KÝ TÚC XÁ - CHUNG CƯ
                                    </h1>
                                    <h2 class="h2__font-size form__heading-h2">
                                        Quản lý chuyên nghiệp!
                                    </h2>
                                </div>
                            </div>  
                            
                            <div class="grid__column-8">
            
                                <div class="form__body ">
                                    <div class="form__title">
                                        <h2 class="form__title text-gradient ">
                                            Cập nhật thông tin phòng trọ
                                        </h2>
                                    </div>

                                    <div class="Search__lable">
                                        <h1 class="" style={{
                                            padding: '16px 42px', 
                                            color: 'var(--main-color-bold)'
                                        }}>
                                            KHU TRỌ: (lấy địa chỉ khu trọ)
                                        </h1>
                                    </div>
                                    
                                    <div class="grid__row grid__full-width">
                                        <div class="Hidden-div ">
                                            <input type="text" name="IDKhu" class="" value=""/>
                                        </div>
                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-7" style={{
                                                    padding:0
                                                }}>
                                                    <label for="TenPhong" class="form__addRoom-label">Phòng số *</label>
                                                </div>
                                                <div class="grid__column-5">
                                                    <input 
                                                        id="TenPhong" 
                                                        name ="TenPhong" 
                                                        type="text" 
                                                        class="form__addRoom-input" 
                                                        value="tên phòng" />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-7" style={{
                                                    padding:0
                                                }}>
                                                    <label for="Tang" class="form__addRoom-label">Tầng (1,2,3,..)</label>
                                                </div>
                                                <div class="grid__column-5">
                                                    <input 
                                                        id="Tang" 
                                                        name ="Tang" 
                                                        type="text" 
                                                        class="form__addRoom-input" 
                                                        value="tầng nào" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-7" style={{
                                                    padding:0
                                                }}>
                                                    <label for="Dientich" class="form__addRoom-label">Diện tích (m²)</label>
                                                </div>
                                                <div class="grid__column-5">
                                                    <input 
                                                        id="Dientich" 
                                                        name ="Dientich" 
                                                        type="text" 
                                                        class="form__addRoom-input"
                                                        value="dt bao nhiêu" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-7" style={{
                                                    padding:0
                                                }}>
                                                    <label for="Gia" class="form__addRoom-label">Giá (triệu đồng / tháng)</label>
                                                </div>
                                                <div class="grid__column-5">
                                                    <input 
                                                        id="Gia" 
                                                        name ="Gia" 
                                                        type="text" 
                                                        class="form__addRoom-input"
                                                        value="giá nhiêu" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-7" style={{
                                                    padding:0
                                                }}>
                                                    <label for="NumBed" class="form__addRoom-label">Số phòng ngủ *</label>
                                                </div>
                                                <div class="grid__column-5">
                                                    <input 
                                                        id="NumBed" 
                                                        name ="NumBed" 
                                                        type="text" 
                                                        class="form__addRoom-input"
                                                        value="bao nhiêu" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-7" sstyle={{
                                                    padding:0
                                                }}>
                                                    <label for="NumToi" class="form__addRoom-label">Số Toilet *</label>
                                                </div>
                                                <div class="grid__column-5">
                                                    <input 
                                                        id="NumToi" 
                                                        name ="NumToi" 
                                                        type="text" 
                                                        class="form__addRoom-input"
                                                        value="how many" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="" style="width: 100%;">
                                            <div class="form__addroom-group grid__row">
                                                <div style={{
                                                    width: '29%',
                                                    padding: '6px 12px'
                                                }}>
                                                    <label for="NoiThat" class="form__addRoom-label">Nội Thất</label>
                                                </div>
                                                <div style={{
                                                    width: '71%',
                                                    padding: '0 18px'
                                                }}>
                                                    <input 
                                                        id="NoiThat" 
                                                        name ="NoiThat" 
                                                        type="text" 
                                                        class="form__addRoom-input" 
                                                        value="mấy cái này lấy trong database ra" 
                                                        style ={{ minHeight: 80 }}/>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="" style="width: 100%;">
                                            <div class="form__addroom-group grid__row">
                                                <div style={{
                                                    width: '29%',
                                                    padding: '6px 12px'
                                                }}>
                                                    <label for="MOTA" class="form__addRoom-label">Mô tả </label>
                                                </div>
                                                <div style={{
                                                    width: '71%',
                                                    padding: '0 18px'
                                                }}>
                                                    <input 
                                                        id="MOTA" 
                                                        name ="MOTA" 
                                                        type="text" 
                                                        class="form__addRoom-input" 
                                                        value="cả cái này lấy trong database ra nốt" 
                                                        style ={{ minHeight: 80 }}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-7" style={{
                                                    padding: 0
                                                }}>
                                                    <label for="TinhTrang" class="form__addRoom-label">Tình trạng *</label>
                                                </div>
                                                <div class="grid__column-5">
                                                    <select id="TinhTrang" name ="TinhTrang" class="form__addRoom-input">
                                                        <option value="Chủ trọ">Còn trống</option>
                                                        <option value="Khách thuê">Đã thuê</option>
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid__full-width">
                                            <div class="form__switch">
                                                <p class="text__size" style={{
                                                    textAlign: 'center'
                                                }}>
                                                    Thêm thông tin 
                                                    <a href="" class="form__switch-text">Khách thuê </a>
                                                    cho phòng trọ.
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="form__controls">
                                        <button class="form__controls-btn btn call_back-btn header__navbar-item--strong" >
                                                <a href="" style = {{
                                                    textDecoration: 'none'
                                                }}>QUAY LẠI</a>
                                        </button>
                                        <button type="submit" class="form__controls-btn btn btn-primary header__navbar-item--strong" style={{
                                            height: '4rem',
                                            borderRadius: 15,
                                            padding: '2px 16px'
                                        }}>CẬP NHẬT</button>
                                    </div>
                                </div>
                            </div>
                        </div>
            
                    </form>    
                </div>
            </div>


        </Layout>
    )
}