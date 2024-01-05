import { useEffect, useState } from 'react'
import { Row, Col, Card, Input } from 'antd'
import Layout from '../../Components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'


const UpdateHouse= () => {

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
                                            Chỉnh sửa thông tin khu trọ: 
                                        </h2>
                                    </div>

                                    <div class="Search__lable">
                                        <h1 class="" style={{
                                            padding: '16px 42px', 
                                            color: 'var(--main-color-bold)'
                                        }}>
                                            THÔNG TIN CHI TIẾT: 
                                        </h1>
                                    </div>
                                    
                                    <div class="grid__row grid__full-width">
                                        <div class="Hidden-div ">
                                            <input type="text" name="IDChu" class="" value=""/>
                                        </div>
                                        <div class="grid__full-width">
                                            <div class="form__addroom-group grid__row">
                                                <div class="" style={{
                                                    width: '29%',
                                                    padding: '6px 12px'
                                                }}>
                                                    <label for="DIACHI" class="form__addRoom-label">Địa chỉ:  *</label>
                                                </div>
                                                <div class="" style={{
                                                    width: '71%',
                                                    padding: '0 18px'
                                                }}>
                                                    <input 
                                                        id="DIACHI" 
                                                        name ="DIACHI" 
                                                        type="text" 
                                                        class="form__addRoom-input"
                                                        value="database-diachi" />                                                    
                                                </div>
                                            </div>
                                        </div>
                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-7" style={{
                                                    padding:0
                                                }}>
                                                    <label for="GiaDien" class="form__addRoom-label">
                                                        Điện (nghìn đồng/ số) :</label>
                                                </div>
                                                <div class="grid__column-5">
                                                    <input 
                                                        id="GiaDien" 
                                                        name ="GiaDien" 
                                                        type="text" 
                                                        class="form__addRoom-input"
                                                        value="DB gia dien"  />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-7" style={{
                                                    padding:0
                                                }}>
                                                    <label for="GiaNuoc" class="form__addRoom-label">
                                                        Nước (nghìn đồng/ khối) :</label>
                                                </div>
                                                <div class="grid__column-5">
                                                    <input 
                                                        id="GiaNuoc" 
                                                        name ="GiaNuoc" 
                                                        type="text" 
                                                        class="form__addRoom-input"
                                                        value="DB gia nuoc" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-7" style={{
                                                    padding:0
                                                }}>
                                                    <label for="GuiXe" class="form__addRoom-label">Gửi xe (nghìn đồng/ xe) :</label>
                                                </div>
                                                <div class="grid__column-5">
                                                    <input 
                                                        id="GuiXe" 
                                                        name ="GuiXe" 
                                                        type="text" 
                                                        class="form__addRoom-input"
                                                        value="DB Phi xe" />
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-7" style={{
                                                    padding:0
                                                }}>
                                                    <label for="WIFI" class="form__addRoom-label">WiFi (nghìn đồng/ phòng) :</label>
                                                </div>
                                                <div class="grid__column-5">
                                                    <input 
                                                        id="WIFI" 
                                                        name ="WIFI" 
                                                        type="text" 
                                                        class="form__addRoom-input"
                                                        value="DB WIFI" />
                                                </div>
                                            </div>
                                        </div>

                                        <div class="grid__column-6">
                                            <div class="form__addroom-group grid__row">
                                                <div class="grid__column-7" style={{
                                                    padding:0
                                                }}>
                                                    <label for="DVChung" class="form__addRoom-label">DV Chung (nghìn đồng):</label>
                                                </div>
                                                <div class="grid__column-5">
                                                    <input 
                                                        id="DVChung" 
                                                        name ="DVChung" 
                                                        type="text" 
                                                        class="form__addRoom-input"
                                                        value="DB DVChung" />
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
                                                        style ={{ minHeight: 80 }}/>
                                                </div>
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