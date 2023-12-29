import Layout from '../../Components/Layout/Layout'

export default function House() {
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
                            <div id= "DivRoom" class="Homepage__background" style={{
                                display: 'none'
                            }}>
                                
                            </div>  
                              
                        </div>
                    </div>
                </div>
            </div>

        </Layout>
    )
}
