import { useEffect, useState } from 'react'
import { Row, Col, Card, Input } from 'antd'
import Layout from '../../Components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const ViewRoom= () => {

    const navigate = useNavigate()

    return(
        <Layout>
            <div class="grid">

                <div class="Phong__main grid__row">
                    <div class="grid__column-7">
                        <div class="Phong__image">

                        </div>

                        <div>
                            <h1 class="Phong__name text-gradient" >
                                Phòng số database
                            </h1>
                        </div>

                        <div class="Phong__price">
                            <nav class="Phong__price-navbar">
                                <ul class="Phong__navbar-list">
                                    <li class="Phong__navbar-item " style={{
                                        textAlign: 'center'
                                    }}>
                                        Mức giá
                                        <br/>
                                        <h2 class=""> database</h2>
                                    </li>

                                    <li class="Phong__navbar-item ">
                                        Diện tích
                                        <br/>
                                        <h2 class=""> database</h2>
                                    </li>

                                    <li class="Phong__navbar-item ">
                                        Phòng ngủ
                                        <br/>
                                        <h2 class=""> database</h2>
                                    </li>

                                </ul>

                            </nav>

                        </div>
    
                    </div>
    
                    <div class="grid__column-5">
                        <div class="Phong__right">
                            <div class="Phong__infor">
                                <span class="Phong__section-title">Thông tin mô tả</span>
                                <div class="Phong__infor-text text__size">
                                database
                                    
                                </div>
                            </div>

                            
                            <div class="Phong__feat">
                                <span class="Phong__section-title">Đặc điểm bất động sản</span>

                                <div class="Phong__feat-list">
                                    <div class="Phong__feat-item grid__row">
                                
                                        <span class="Phong__feat-item-icon">
                                            <i class="fa-solid fa-stairs"></i>
                                        </span>
                                        <span class="Phong__feat-item-title">Tầng</span>
                                        <span class="Phong__feat-item-value">database</span>
                                    
                                    </div>

                                    <div class="Phong__feat-item ">
                                            <span class="Phong__feat-item-icon">
                                                <i class="fa-solid fa-expand"></i>
                                            </span>
                                            <span class="Phong__feat-item-title">Diện tích</span>
                                            <span class="Phong__feat-item-value">database m²</span>
                                            
                                        
                                    </div>

                                    <div class="Phong__feat-item ">
                                        <span class="Phong__feat-item-icon">
                                            <i class="fa-solid fa-coins"></i>
                                        </span>
                                        <span class="Phong__feat-item-title">Mức giá</span>
                                        <span class="Phong__feat-item-value">database triệu/tháng</span>
                                    
                                    </div>

                                    <div class="Phong__feat-item ">
                                        <div class="re__pr-specs-content-item">
                                            <span class="Phong__feat-item-icon">
                                                <i class="fa-solid fa-bed"></i>
                                            </span>
                                            <span class="Phong__feat-item-title">Số phòng ngủ</span>
                                            <span class="Phong__feat-item-value">database phòng</span>
                                        </div>
                                    </div>

                                    <div class="Phong__feat-item ">
                                        <div class="re__pr-specs-content-item">
                                            <span class="Phong__feat-item-icon">
                                                <i class="fa-solid fa-bath"></i>
                                            </span>
                                            <span class="Phong__feat-item-title">Số toilet</span>
                                            <span class="Phong__feat-item-value">database phòng</span>
                                        </div>
                                    </div>

                                    <div class="Phong__feat-item ">
                                        <div class="re__pr-specs-content-item">
                                            <span class="Phong__feat-item-icon">
                                                <i class="fa-solid fa-couch"></i>
                                            </span>
                                            <span class="Phong__feat-item-title">Nội thất</span>
                                            <span class="Phong__feat-item-value">database</span>
                                        </div>
                                    </div>

                                    
                                </div>
                            </div>

                            <div class="Phong__contact">
                                <div class="Phong__contact-container">
                                    
                                </div>
                            </div>

                        </div>
    
                    </div>
    
                </div>
    
                <div class="Phong__des">
    
                </div>

            </div>
        </Layout>
    )
}

        