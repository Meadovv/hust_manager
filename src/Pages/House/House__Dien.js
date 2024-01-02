import { useEffect, useState } from 'react'
import { Row, Col, Card, Input } from 'antd'
import Layout from '../../Components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import MyList from '../../Components/MyList/MyList'

//Nơi này chỉ để nhập chỉ số điện và tính số điện, **Tính tiền ở mục tính tiền**
const ChisoDienTheoPhong = [
    {
        "IDPhong" : "1",
        "TenPhong": "101",
        "Before": "1126.2",
        "Now": "1234.5"        
    },
    {
        "IDPhong" : "2",
        "TenPhong": "102",
        "Before": "1126.2",
        "Now": "1234.5"        
    },
    {
        "IDPhong" : "3",
        "TenPhong": "103",
        "Before": "1126.2",
        "Now": "1234.5"        
    }
]

const House__Dien= () => {

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
                                        }}> THÔNG TIN CHỈ SỐ ĐIỆN CÁC PHÒNG</h1>
                                </div>    
                                
                                <div class="Dichvu__Chiso" style={{
                                    marginTop: 20
                                }}>
                                    {
                                        ChisoDienTheoPhong && ChisoDienTheoPhong.map((item, index) => {
                                            return (
                                                <div class="Chiso__Phong" style={{
                                                    width: '90%',
                                                    borderRadius: 25,  
                                                    border: '2px solid var(--main-color)',
                                                    margin: 20
                                                }}>
                                                    <p style={{
                                                        fontSize: '2.5rem',
                                                        color: 'var(--main-color-bold)',
                                                        marginLeft: 50,
                                                        marginBottom: 40
                                                    }}> Phòng {item.TenPhong}</p>
                                                    <div class="grid__row " style ={{
                                                        width: '80%'
                                                    }}>
                                                        <div class="grid__column-6">
                                                            <div class="form__addroom-group grid__row">
                                                                <div class="grid__column-5" style={{
                                                                    padding:0
                                                                }}>
                                                                    <label for="before" class="form__addRoom-label">Tháng trước: </label>
                                                                </div>
                                                                <div class="grid__column-5">
                                                                    <input id="before" name ="before" type="text" class="form__addRoom-input" value required data-format="stringNumber" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="grid__column-6">
                                                            <div class="form__addroom-group grid__row">
                                                                <div class="grid__column-5" style={{
                                                                    padding:0
                                                                }}>
                                                                    <label for="now" class="form__addRoom-label" >Tháng này: </label>
                                                                </div>
                                                                <div class="grid__column-5">
                                                                    <input id="now" name ="now" type="text" class="form__addRoom-input" value required data-format="stringNumber" />
                                                                </div>
                                                            </div>
                                                        </div>

                                                        <div class="grid__column-6">
                                                            <div class="form__addroom-group grid__row">
                                                                <div class="grid__column-5" style={{
                                                                    padding:0
                                                                }}>
                                                                    <p class="form__addRoom-label">Tổng tiêu thụ: </p>
                                                                </div>

                                                                <div class="grid__column-5" style={{
                                                                    padding:0
                                                                }}>
                                                                    <p class="form__addRoom-label">Tính toán trừ đi </p>
                                                                </div>
                                                                
                                                            </div>
                                                        </div>

                                                        
                                                    </div>

                                                </div>
                                            )
                                        })
                                    }
                                    
                                </div>
                            </div> 
                                
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
