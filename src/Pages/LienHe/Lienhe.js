import Layout from "../../Components/Layout/Layout";
import { CheckCircleFilled } from '@ant-design/icons'

const backgroundUrl = "/images/about-background.jpg"

export default function About() {

    return (
        <Layout>
            <div class="web__container">
                {/*--Mục liên hệ--*/}
    
                <div class="contact">
                    <div class="contact__container">
                        <div class="contact__container-header">
                            <p>
                                <h1 class="text-center" style={{
                                    fontSize: '3.8rem', 
                                    color: 'var(--main-color-bold)',
                                    lineHeight: 42
                                }}>
                                    Liên hệ qua các kênh tư vấn của chúng tôi
                                </h1>
                                <h2 class="text-center text-gradient" style={{
                                    fontSize: '1.5rem',
                                    fontWeight: '450', 
                                    lineHeight: 32
                                }}>
                                    Chúng tôi luôn luôn sẵn sàng hỗ trợ 
                                    <b>24/7</b>
                                </h2>
                            </p>

                        </div>

                        <div class="grid__row contact__container-list">
                            <div class=" grid__column-4">
                                <div class="contact__container-item">

                                    <div class="contact__container-item-icon">
                                        <i class="fa-solid fa-location-dot icon__sizeXL"></i>
                                        <br />
                                        <p class="text__light">
                                            VĂN PHÒNG
                                        </p>
                                    </div>
        
                                    <div class="">
                                        <p class="text__light" >
                                            Số 1 Đại Cồ Việt, P. Bách Khoa
                                            <br />
                                            Q. Hai Bà Trưng, Tp. Hà Nội
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div class=" grid__column-4">
                                <div class="contact__container-item">

                                    <div class="contact__container-item-icon">
                                        <i class="fa-brands fa-facebook icon__sizeXL"></i>
                                        <p class="text__light">
                                            FACEBOOK
                                        </p>
                                    </div>
                                    
                                    <div class="">
                                        <p class="text__size text__light">
                                            
        
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <div class="grid__column-4">
                                <div class="contact__container-item">

                                    <div class="contact__container-item-icon">
                                        <i class="fa-regular fa-envelope icon__sizeXL"></i>
                                        <p class="text__light">
                                            EMAIL
                                        </p>
                                    </div>
                                    
                                    <div class="">
                                        <p class="text__size text__light">
                                            
        
                                        </p>
                                    </div>
                                </div>

                            </div>

                        </div>

                    </div>

                    <div class="contact__footer">

                    </div>

                </div>

                

            </div>
        </Layout>
    )
}