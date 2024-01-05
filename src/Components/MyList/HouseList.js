import { useNavigate } from "react-router-dom"

export default function HouseList({ houseList }) {

    const navigate = useNavigate()

    return (
        houseList && houseList.map((item, index) => {

        return (
            <div class="Search__list-item  header__navbar"> 
                <div class="Hidden-div">{item.IDKhu }</div>
                <ul class="header__navbar-list">
                    <li class="header__navbar-item ">
                        <div  class="" style={{
                            color: 'var(--main-color-bold)',
                            paddingTop: 5 
                        }}>
                            <h2 style={{
                                fontSize: '2.2rem'
                            }}>CƠ SỞ {index+1} : </h2>
                        </div>
                    </li>
                    <li class="header__navbar-item ">
                        <div class="" >
                            <p class="text__size" style={{
                                fontSize: '2rem'
                            }}>{item.DIACHI }</p>  
                        </div>
                    </li>
                </ul>

                <ul class="header__navbar-list" style={{
                    marginTop: 20
                }}>
                    <li class="header__navbar-item ">
                        <a href="" class="header__navbar-item header__navbar-item--strong btn btn-primary " style={{
                            padding: 10
                        }}> 
                            CHI TIẾT
                        </a>
                    </li>
                    <li class="header__navbar-item ">
                        <a href="" class="header__navbar-item header__navbar-item--strong btn btn-primary " style={{
                            padding: 10
                        }}>
                            <i class="fa-solid fa-pen-to-square" style={{
                                color: 'var(--white-color)',
                                marginRight: 12
                            }}></i>
                            SỬA 
                        </a>
                    </li>
                    <li class="header__navbar-item ">
                        <a href="" class="header__navbar-item header__navbar-item--strong btn btn-primary " style={{
                            padding: 10
                        }}>
                            <i class="fa-regular fa-trash-can" style={{
                                color: 'var(--white-color)'
                            }}></i>
                        </a>
                    </li>
                </ul>

                    
            </div>
            )
                
        })  
                          
    )
}