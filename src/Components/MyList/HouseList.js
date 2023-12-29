import { useNavigate } from "react-router-dom"

export default function HouseList({ houseList }) {

    const navigate = useNavigate()

    return (
        houseList && houseList.map((item, index) => {

        return (
            <div class="Search__list-item  grid__row"> 
                <div class="Hidden-div">{item.IDKhu }</div>
                <div  class="grid__column-2" style={{
                    color: 'var(--main-color-bold)',
                    paddingTop: 5 
                }}>
                    <h2>CƠ SỞ {index+1} : </h2>
                </div>
                <div class="grid__column-6" >
                    <p class="text__size">{item.DIACHI }</p>  
                </div>
                <a href="" class="grid__column-4" style={{
                    paddingTop: 10
                }}>
                    <button class=" form__controls-btn btn btn-primary header__navbar-item--strong" style={{
                        height: '4rem',
                        borderRadius: 15
                    }}>
                    CHI TIẾT</button>
                </a>
                    
            </div>
            )
                
        })  
                          
    )
}