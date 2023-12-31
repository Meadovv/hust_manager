import Layout from "../../Components/Layout/Layout";
//import './About.css'
import { CheckCircleFilled } from '@ant-design/icons'

const backgroundUrl = "/images/pngabout__background.jpg"


export default function About() {

    return (
        <Layout>
            {/*<!--Mục Giới thiệu-->*/}
            <div class="Introduce">
                <section class="Introduce__banner">
                    <div class="Introduce__container grid__row">
                        <div class="Introduce__container-column-7 text-center align-content-center align-self-center align-baseline">

                            <h1 class="Introduce__title">
                                
                                <p style={{
                                    fontSize: '4rem', 
                                    color: 'var(--main-color)'
                                }}>
                                    Phần mềm quản lý nhà cho thuê 
                                </p>
                                <span class="text-gradient" style={{
                                    fontSize: '3.5rem'
                                 }}>
                                    Điện thoại - iPad - Máy tính
                                </span>
                                 🎉

                            </h1>
                            <article>
                                <br />
                                <h2 class="" style={{
                                    fontSize: '2.2rem'
                                }}>
                                    <span class="wrap">Quản lý nhẹ nhàng như chiếc smartphone trong tay của bạn!</span>
                                </h2>
                                <br />
                                <p class="text__size" style={{
                                    width: '78%',
                                    margin: 'auto'
                                }}>
                                    Chúng tôi mang đến một ứng dụng tuyệt vời giúp bạn có thể dễ dàng 
                                    <b>quản lý nhà trọ, nhà cho thuê, chung cư mini, chuỗi căn hộ, ký túc xá, văn phòng cho thuê... </b>
                                    Dù bạn chỉ có vài đơn vị hay cho đến hàng 100 đơn vị cho thuê. 
                                    Với công nghệ 4.0 không còn thời quản lý phòng trọ bằng excel, HaHaHome sẽ hỗ trợ bạn giải quyết các vấn về như lưu trữ thông tin, hợp đồng, khách hàng, hóa đơn tiền thuê nhà tự động... 
                                    Giúp ban quản trị quản lý một cách nhanh chóng, dễ dàng, hiệu quả với chiếc điện thoại thông minh.
                                </p>
                            </article>
                        </div>

                        {/*<div className="Introduce__container-column-5 align-content-center align-self-center align-baseline logoInIntroduce" style={{ 
                            backgroundImage: 'url(${backgroundUrl})',
                            backgroundSize: 'cover'    
                            }}>
                        </div>
                        */}
                        <div class="Introduce__container-column-5 align-content-center align-self-center align-baseline logoInIntroduce" style={{
                            paddingTop: 100
                        }}>
                            <img src={backgroundUrl} style={{
                                width: '120%'
                            }}/>
                        </div>


                    </div>
                </section>

                <section class="Introduce__menu">
                    <div class="Introduce__container" style={{
                        textAlign: 'center'
                    }}>

                        <h2>
                            <p class="text-gradient" style={{
                                fontSize: '3.5rem',
                                color: 'var(--main-color)', 
                                lineHeight: '4rem'
                            }}>
                                Giới thiệu phần mềm quản lý phòng trọ
                            </p>
                            <span class="text-gradient " style={{
                                fontSize: '3rem'
                            }}>
                                Tại sao bạn nên sử dụng phần mềm quản lý nhà trọ, phòng trọ?
                            </span>
                        </h2>

                        <div class="Introduce__container-menu" style={{
                            marginTop: 50
                        }}>
                            <p class="text__size">
                                Với sự phát triển của thời đại 4.0 như hiện nay thì việc sử dụng các ứng dụng hay phần mềm thông minh là xu hướng được khách hàng lựa chọn... 
                                Đứng trước nhu cầu đó, 
                                <b>ứng dụng quản lý phòng trọ </b>
                                được tạo ra nhằm hỗ trợ người dùng trong việc 
                                <b>quản lý nhà trọ, phòng trọ, chung cư, ký túc xá</b>
                                … với hệ thống phần mềm đa nền tảng (điện thoại, máy tính, iPad).
                            </p>

                            <p class="text__size">
                                Có thể thấy, phương thức 
                                <b>quản lý nhà trọ </b>
                                truyền thống đang dần được thay thế bằng các ứng dụng quản lý chuyên dụng với sự hỗ trợ của công nghệ hiện đại. Bởi lẽ cách quản lý thông qua sổ sách, 
                                <b>quản lý nhà trọ bằng Excel </b>
                                dường như chưa đáp ứng được hết nhu cầu của các chủ nhà trọ.
                            </p>

                            <p class="text__size">
                                Gạt đi những bất lợi của các phương pháp quản lý truyền thống, ứng dụng 
                                <b>HaHaHome - Quản lý trọ </b>
                                sẽ giúp người dùng tối ưu hóa nghiệp vụ quản lý.
                            </p>

                            <ul class="Introduce__container-list grid__row">
                                <li class=" grid__column-6" data-aos="fade-right">
                                    <div class="Introduce__container-item">

                                        <div class="grid__row">
                                            <div class="grid__column-1">
                                                <i class="Introduce__container-item-icon fa-solid fa-circle-check"></i>
                                            </div>
                                            <div class="grid__column-11">
                                                <p class="text__size">
                                                    <b style={{
                                                        color: 'var(--main-color-bold)', 
                                                        fontSize: '1.8rem',
                                                        fontWeight: '500'
                                                    }}>
                                                        Tránh sai sót trong quản lý: 
                                                    </b>
                                                    Công việc <b>quản lý nhà trọ </b>
                                                    đòi hỏi phải xử lý hàng tá thông tin, hồ sơ cần thiết như thông tin khách thuê, ngày tháng, số điện nước… 
                                                    <b>Ứng dụng quản lý phòng trọ </b>
                                                    sẽ giúp bạn tính toán mọi chi phí thu, chi một cách tự động và chính xác.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
            
                                <li class=" grid__column-6" data-aos="fade-left">
                                    <div class="Introduce__container-item">

                                        <div class="grid__row">
                                            <div class="grid__column-1">
                                                <i class="Introduce__container-item-icon fa-solid fa-circle-check"></i>
                                            </div>
                                            <div class="grid__column-11">
                                                <p class="text__size">
                                                    <b style={{
                                                        color: 'var(--main-color-bold)', 
                                                        fontSize: '1.8rem',
                                                        fontWeight: '500'
                                                    }}>
                                                        Tiết kiệm thời gian: 
                                                    </b>
                                                    Không phải tốn hàng giờ để ghi chép thông tin khách thuê, các khoản thu chi phát sinh, tính toán, ghi hóa đơn tiền phòng… Với sự giúp sức của 
                                                    <b>phần mềm quản lý trọ, </b>
                                                    bạn chỉ cần cung cấp dữ liệu cần thiết, mọi thứ còn lại hãy để ứng dụng lo. 
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
            
                                <li class=" grid__column-6" data-aos="fade-right">
                                    <div class="Introduce__container-item">

                                        <div class="grid__row">
                                            <div class="grid__column-1">
                                                <i class="Introduce__container-item-icon fa-solid fa-circle-check"></i>
                                            </div>
                                            <div class="grid__column-11">
                                                <p class="text__size">
                                                    <b style={{
                                                        color: 'var(--main-color-bold)', 
                                                        fontSize: '1.8rem',
                                                        fontWeight: '500'
                                                    }}>Quản lý khách thuê hiệu quả: </b>
                                                    Với tính năng quản lý khách thuê, chủ nhà sẽ dễ dàng hơn trong việc nắm thông tin, số lượng khách thuê, tình trạng tạm trú, quê quán... 
                                                    Ngoài ra, chủ nhà còn có thể tiết kiệm thời gian với tính năng chia sẻ đường dẫn để khách có thể tự cập nhật thông tin cá nhân của mình.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
            
                                <li class=" grid__column-6" data-aos="fade-left">
                                    <div class="Introduce__container-item">

                                        <div class="grid__row">
                                            <div class="grid__column-1">
                                                <i class="Introduce__container-item-icon fa-solid fa-circle-check"></i>
                                            </div>
                                            <div class="grid__column-11">
                                                <p class="text__size">
                                                    <b style={{
                                                        color: 'var(--main-color-bold)', 
                                                        fontSize: '1.8rem',
                                                        fontWeight: '500'
                                                    }}>Tiếp cận khách thuê: </b>
                                                    Ngoài quản lý nhà trọ, phần mềm còn hỗ trợ chức năng đăng tin giúp chủ nhà tìm kiếm khách thuê nhanh chóng và dễ dàng thông qua các hệ thống trên các kênh mạng xã hội, nền tảng tìm trọ 
                                                    <b>HaHaHome - Tìm phòng trọ, nhà ở. </b>
                                                    Giúp chủ nhà lấp đầy các phòng trống hiệu quả.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
            
                                <li class=" grid__column-6" data-aos="fade-right">
                                    <div class="Introduce__container-item">

                                        <div class="grid__row">
                                            <div class="grid__column-1">
                                                <i class="Introduce__container-item-icon fa-solid fa-circle-check"></i>
                                            </div>
                                            <div class="grid__column-11">
                                                <p class="text__size">
                                                    <b style={{
                                                        color: 'var(--main-color-bold)', 
                                                        fontSize: '1.8rem',
                                                        fontWeight: '500'
                                                    }}>Tránh thất lạc, mất thông tin: </b>
                                                    Mọi thông tin, dữ liệu bạn cập nhật sẽ được hệ thống tự động lưu trữ, đồng thời hỗ trợ truy xuất, tìm kiếm thông tin khi cần.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class=" grid__column-6" data-aos="fade-left">
                                    <div class="Introduce__container-item">

                                        <div class="grid__row">
                                            <div class="grid__column-1">
                                                <i class="Introduce__container-item-icon fa-solid fa-circle-check"></i>
                                            </div>
                                            <div class="grid__column-11">
                                                <p class="text__size">
                                                    <b style={{
                                                        color: 'var(--main-color-bold)', 
                                                        fontSize: '1.8rem',
                                                        fontWeight: '500'
                                                    }}>Quản lý linh hoạt: </b>
                                                    Với hệ thống quản lý đa nền tảng từ điện thoại, iPad đến laptop, máy tính bảng, bạn có thể quản lý nhà trọ của mình ở mọi lúc, mọi nơi.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class=" grid__column-6" data-aos="fade-right">
                                    <div class="Introduce__container-item">

                                        <div class="grid__row">
                                            <div class="grid__column-1">
                                                <i class="Introduce__container-item-icon fa-solid fa-circle-check"></i>
                                            </div>
                                            <div class="grid__column-11">
                                                <p class="text__size">
                                                    <b style={{
                                                        color: 'var(--main-color-bold)', 
                                                        fontSize: '1.8rem',
                                                        fontWeight: '500'
                                                    }}>Thống kê, báo cáo tổng quan: </b>
                                                    Thống kê tất cả mọi thông tin về nhà trọ bao gồm số phòng đang thuê, số phòng đang có cọc giữ chỗ, số phòng đang nợ tiền… 
                                                    giúp chủ nhà trọ có cái nhìn tổng quan, đồng thời nắm được tình trạng hiện tại của nhà trọ mình.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li class=" grid__column-6" data-aos="fade-left">
                                    <div class="Introduce__container-item">

                                        <div class="grid__row">
                                            <div class="grid__column-1">
                                                <i class="Introduce__container-item-icon fa-solid fa-circle-check"></i>
                                            </div>
                                            <div class="grid__column-11">
                                                <p class="text__size">
                                                    <b style={{
                                                        color: 'var(--main-color-bold)', 
                                                        fontSize: '1.8rem',
                                                        fontWeight: '500'
                                                    }}>Hỗ trợ xuất, đối chiếu hóa đơn: </b>
                                                    Hóa đơn tiền phòng mỗi tháng sẽ được hệ thống lập ra, đồng thời hỗ trợ nhắc nhở thu tiền, chia sẻ, in, xuất hóa đơn cho khách thuê hoặc khi cần.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </li>
            
                            </ul>
                        </div>

                    </div>

                </section>

                <section class="Introduce__footer">
                    <div class="Introduce__container">
                        <p style={{
                            fontSize: '2rem',
                            fontWeight: '400', 
                            lineHeight: 2,
                            textAlign: 'center'
                        }}>
                            <i class="Introduce__footer-icon fa-solid fa-quote-left"></i>
                            <b style={{
                                fontSize: '2.2rem',
                                fontWeight: '450', 
                                color: 'var(--main-color-bold)'
                            }}>  HaHaHome </b>
                            cam kết mang lại sản phẩm hoàn thiện nhất cho khách hàng. Đội ngũ phát
                            triển vẫn đang và cố gắng không ngừng để hoàn thiện và nâng cao chất lượng sản phẩm. Chúng
                            tôi luôn coi sự hài lòng của khách hàng là thành công, đặt lợi ích khách hàng lên hàng đầu.
                            Luôn nỗ lực hết mình, sáng tạo, đổi mới để ứng dụng có thể hoàn thiện từng ngày nhằm hỗ trợ
                            những giá trị đích thực đến người dùng.
                            <i class="Introduce__footer-icon fa-solid fa-quote-right"></i>
                        </p>
                    </div>
                </section>

            </div>
            {/*
            <div style={{
                backgroundImage: `url(${backgroundUrl})`,
                backgroundSize: 'cover',
                height: '50vh',
                width: '100%',
                display: 'flex',
                justifyContent: 'center'
            }}>
                <div style={{
                    width: '40%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                    <div style={{
                        color: '#3c9e47',
                        fontSize: 40,
                        fontWeight: 'bold',
                    }}>Phần mềm quản lý nhà cho thuê</div>
                    <span className="text-gradient" style={{
                        fontSize: 35
                    }}>
                        Điện thoại - iPad - Máy tính
                    </span>
                    <div style={{
                        marginTop: 20,
                        fontSize: 20,
                        fontWeight: 'bold'
                    }}>Quản lý nhẹ nhàng như chiếc smartphone trong tay của bạn!</div>
                    <p style={{
                        marginTop: 20,
                        fontSize: 16,
                        textIndent: 20,
                        lineHeight: 2,
                        textAlign: 'justify',
                        width: '90%'
                    }}>
                        Chúng tôi mang đến một ứng dụng tuyệt vời giúp bạn có thể dễ dàng quản lý nhà trọ, nhà cho thuê, chung cư mini, chuỗi căn hộ, ký túc xá, văn phòng cho thuê... Dù bạn chỉ có vài đơn vị hay cho đến hàng 100 đơn vị cho thuê. Với công nghệ 4.0 không còn thời quản lý phòng trọ bằng excel, HaHaHome sẽ hỗ trợ bạn giải quyết các vấn về như lưu trữ thông tin, hợp đồng, khách hàng, hóa đơn tiền thuê nhà tự động... Giúp ban quản trị quản lý một cách nhanh chóng, dễ dàng, hiệu quả với chiếc điện thoại thông minh.
                    </p>
                </div>
                <div style={{
                    width: '40%'
                }}>

                </div>
            </div>

            <div className="text-gradient" style={{
                fontSize: 30,
                display: 'flex',
                justifyContent: 'center',
                marginTop: 20
            }}>Tại sao bạn nên sử dụng phần mềm quản lý nhà trọ, phòng trọ?</div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <p style={{
                    marginTop: 20,
                    fontSize: 20,
                    textIndent: 20,
                    lineHeight: 2,
                    textAlign: 'justify',
                    width: '80%'
                }}>Với sự phát triển của thời đại 4.0 như hiện nay thì việc sử dụng các ứng dụng hay phần mềm thông minh là xu hướng được khách hàng lựa chọn... Đứng trước nhu cầu đó, ứng dụng quản lý phòng trọ được tạo ra nhằm hỗ trợ người dùng trong việc quản lý nhà trọ, phòng trọ, chung cư, ký túc xá … với hệ thống phần mềm đa nền tảng (điện thoại, máy tính, iPad).</p>

                <p style={{
                    marginTop: 20,
                    fontSize: 20,
                    textIndent: 20,
                    lineHeight: 2,
                    textAlign: 'justify',
                    width: '80%'
                }}>Có thể thấy, phương thức quản lý nhà trọ truyền thống đang dần được thay thế bằng các ứng dụng quản lý chuyên dụng với sự hỗ trợ của công nghệ hiện đại. Bởi lẽ cách quản lý thông qua sổ sách, quản lý nhà trọ bằng Excel dường như chưa đáp ứng được hết nhu cầu của các chủ nhà trọ.</p>

                <p style={{
                    marginTop: 20,
                    fontSize: 20,
                    textIndent: 20,
                    lineHeight: 2,
                    textAlign: 'justify',
                    width: '80%'
                }}>Gạt đi những bất lợi của các phương pháp quản lý truyền thống, ứng dụng HaHaHome - Quản lý trọ sẽ giúp người dùng tối ưu hóa nghiệp vụ quản lý.</p>
            </div>

            <div className="text-gradient" style={{
                fontSize: 30,
                display: 'flex',
                justifyContent: 'center',
                marginTop: 20
            }}>Ưu điểm của HaHaHome - Quản lý phòng trọ</div>

            <div style={{
                marginTop: 30,
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <div style={{
                    width: '70%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div className="myCard">
                        <div style={{
                            fontSize: 40,
                            color: '#3c9e47',
                        }}>
                            <CheckCircleFilled />
                        </div>
                        <p style={{
                            marginLeft: 10,
                            fontSize: 20,
                            textIndent: 20,
                            lineHeight: 1.5,
                            textAlign: 'justify',
                        }}>
                            <b style={{
                                color: '#3c9e47'
                            }}>Tránh sai sót trong quản lý: </b>
                            Công việc quản lý nhà trọ đòi hỏi phải xử lý hàng tá thông tin, hồ sơ cần thiết như thông tin khách thuê, ngày tháng, số điện nước… Ứng dụng quản lý phòng trọ sẽ giúp bạn tính toán mọi chi phí thu, chi một cách tự động và chính xác.
                        </p>
                    </div>

                    <div className="myCard">
                        <div style={{
                            fontSize: 40,
                            color: '#3c9e47',
                        }}>
                            <CheckCircleFilled />
                        </div>
                        <p style={{
                            marginLeft: 10,
                            fontSize: 20,
                            textIndent: 20,
                            lineHeight: 1.5,
                            textAlign: 'justify',
                        }}>
                            <b style={{
                                color: '#3c9e47'
                            }}>Tiết kiệm thời gian: </b>
                            Không phải tốn hàng giờ để ghi chép thông tin khách thuê, các khoản thu chi phát sinh, tính toán, ghi hóa đơn tiền phòng… Với sự giúp sức của phần mềm quản lý trọ, bạn chỉ cần cung cấp dữ liệu cần thiết, mọi thứ còn lại hãy để ứng dụng lo.
                        </p>
                    </div>
                </div>

                <div style={{
                    width: '70%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div className="myCard">
                        <div style={{
                            fontSize: 40,
                            color: '#3c9e47',
                        }}>
                            <CheckCircleFilled />
                        </div>
                        <p style={{
                            marginLeft: 10,
                            fontSize: 20,
                            textIndent: 20,
                            lineHeight: 1.5,
                            textAlign: 'justify',
                        }}>
                            <b style={{
                                color: '#3c9e47'
                            }}>Quản lý khách thuê hiệu quả: </b>
                            Với tính năng quản lý khách thuê, chủ nhà sẽ dễ dàng hơn trong việc nắm thông tin, số lượng khách thuê, tình trạng tạm trú, quê quán... Ngoài ra, chủ nhà còn có thể tiết kiệm thời gian với tính năng chia sẻ đường dẫn để khách có thể tự cập nhật thông tin cá nhân của mình.
                        </p>
                    </div>

                    <div className="myCard">
                        <div style={{
                            fontSize: 40,
                            color: '#3c9e47',
                        }}>
                            <CheckCircleFilled />
                        </div>
                        <p style={{
                            marginLeft: 10,
                            fontSize: 20,
                            textIndent: 20,
                            lineHeight: 1.5,
                            textAlign: 'justify',
                        }}>
                            <b style={{
                                color: '#3c9e47'
                            }}>Tiếp cận khách thuê: </b>
                            Ngoài quản lý nhà trọ, phần mềm còn hỗ trợ chức năng đăng tin giúp chủ nhà tìm kiếm khách thuê nhanh chóng và dễ dàng thông qua các hệ thống trên các kênh mạng xã hội, nền tảng tìm trọ HaHaHome - Tìm phòng trọ, nhà ở. Giúp chủ nhà lấp đầy các phòng trống hiệu quả.
                        </p>
                    </div>
                </div>

                <div style={{
                    width: '70%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                    <div className="myCard">
                        <div style={{
                            fontSize: 40,
                            color: '#3c9e47',
                        }}>
                            <CheckCircleFilled />
                        </div>
                        <p style={{
                            marginLeft: 10,
                            fontSize: 20,
                            textIndent: 20,
                            lineHeight: 1.5,
                            textAlign: 'justify',
                        }}>
                            <b style={{
                                color: '#3c9e47'
                            }}>Tránh thất lạc, mất thông tin: </b>
                            Mọi thông tin, dữ liệu bạn cập nhật sẽ được hệ thống tự động lưu trữ, đồng thời hỗ trợ truy xuất, tìm kiếm thông tin khi cần.
                        </p>
                    </div>

                    <div className="myCard">
                        <div style={{
                            fontSize: 40,
                            color: '#3c9e47',
                        }}>
                            <CheckCircleFilled />
                        </div>
                        <p style={{
                            marginLeft: 10,
                            fontSize: 20,
                            textIndent: 20,
                            lineHeight: 1.5,
                            textAlign: 'justify',
                        }}>
                            <b style={{
                                color: '#3c9e47'
                            }}>Quản lý linh hoạt:  </b>
                            Với hệ thống quản lý đa nền tảng từ điện thoại, iPad đến laptop, máy tính bảng, bạn có thể quản lý nhà trọ của mình ở mọi lúc, mọi nơi.
                        </p>
                    </div>
                </div>

                <div style={{
                    width: '70%',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                }}>
                    <div className="myCard">
                        <div style={{
                            fontSize: 40,
                            color: '#3c9e47',
                        }}>
                            <CheckCircleFilled />
                        </div>
                        <p style={{
                            marginLeft: 10,
                            fontSize: 20,
                            textIndent: 20,
                            lineHeight: 1.5,
                            textAlign: 'justify',
                        }}>
                            <b style={{
                                color: '#3c9e47'
                            }}>Thống kê, báo cáo tổng quan: </b>
                            Thống kê tất cả mọi thông tin về nhà trọ bao gồm số phòng đang thuê, số phòng đang có cọc giữ chỗ, số phòng đang nợ tiền… giúp chủ nhà trọ có cái nhìn tổng quan, đồng thời nắm được tình trạng hiện tại của nhà trọ mình.
                        </p>
                    </div>

                    <div className="myCard">
                        <div style={{
                            fontSize: 40,
                            color: '#3c9e47',
                        }}>
                            <CheckCircleFilled />
                        </div>
                        <p style={{
                            marginLeft: 10,
                            fontSize: 20,
                            textIndent: 20,
                            lineHeight: 1.5,
                            textAlign: 'justify',
                        }}>
                            <b style={{
                                color: '#3c9e47'
                            }}>Hỗ trợ xuất, đối chiếu hóa đơn: </b>
                            Hóa đơn tiền phòng mỗi tháng sẽ được hệ thống lập ra, đồng thời hỗ trợ nhắc nhở thu tiền, chia sẻ, in, xuất hóa đơn cho khách thuê hoặc khi cần.
                        </p>
                    </div>
                </div>
            </div>
                        */}
        </Layout>
    )
}