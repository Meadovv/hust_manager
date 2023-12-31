import Layout from "../../Components/Layout/Layout";
import { CheckCircleFilled } from '@ant-design/icons'

const backgroundUrl = "/images/about-background.jpg"

export default function About() {

    return (
        <Layout>
            <div class="web__container">

                {/*--Mục Hướng dẫn sử dụng--*/}

                <div class="instruction">
                    <div class="grid">
                        <div class="instruction__header">
                            <h1 class="grid__row instruction__header-item" >
                                <i class="fa-solid fa-chalkboard-user " style={{
                                    fontSize: '3.5rem',
                                    marginRight: 12,
                                    marginLeft: 16
                                }}></i>
                                Hướng dẫn sử dụng quản lý nhà trọ
                            </h1>
                        </div>

                        <div class="grid__row">
                            <div class="grid__column-3">
                                <nav class="category">
                                    <h3 class="category__heading">
                                        <i class="category__heading-icon fa-solid fa-list-ul" ></i>
                                        Danh mục
                                    </h3>

                                    <ul class="category-list">
                                        <li class="category-item category-item--active">
                                            <a href="" class="category-item__link">
                                                1. Hướng dẫn đăng ký và đăng nhập
                                            </a>
                                        </li>
                                        <li class="category-item category-item--active">
                                            <a href="" class="category-item__link">
                                                2. Hướng dẫn tạo và chỉnh sửa nhà trọ
                                            </a>
                                        </li>
                                        <li class="category-item category-item--active">
                                            <a href="" class="category-item__link">
                                                3. Hướng dẫn lập phiếu thu và thu tiền phòng trọ
                                            </a>
                                        </li>
                                        <li class="category-item category-item--active">
                                            <a href="" class="category-item__link">
                                                4. Hướng dẫn thanh lý phòng trọ
                                            </a>
                                        </li>
                                        <li class="category-item category-item--active">
                                            <a href="" class="category-item__link">
                                                5. Hướng dẫn cài đặt dịch vụ phòng trọ
                                            </a>
                                        </li>
                                    </ul>

                                </nav>
                            </div>

                            <div class="grid__column-9">
                                <div class="instruction__content">

                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </Layout>
    )
}