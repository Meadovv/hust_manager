import { useNavigate } from "react-router-dom"
import './Header.css'
import { useSelector } from 'react-redux'


const menuItems = [
    {
        name: 'Trang chủ',
        link: '/'
    },
    {
        name: 'Giới thiệu',
        link: '/about'
    },
    {
        name: 'Hướng dẫn',
        link: '/guide'
    },
    {
        name: 'Liên hệ',
        link: '/contact'
    }
]

const Header = () => {

    const navigate = useNavigate()
    const { user } = useSelector(state => state.user)

    return (
        <div style={{
            width: '100%',
            height: '7vh',
            backgroundImage: 'linear-gradient(110deg,#2dca3a,#ccfdc8)',
            display: 'flex',
            justifyContent: 'center'
        }}>
            <div style={{
                display: 'flex',
                height: '100%',
                width: '90%'
            }}>
                <div style={{
                    display: 'flex',
                    height: '100%',
                    width: '50%',
                    alignItems: 'center'
                }}>
                    {
                        menuItems && menuItems.map((item, index) => {
                            return (
                                <div key={index} className="menuItem" onClick={() => {
                                    navigate(item.link)
                                }}>
                                    {
                                        item.name
                                    }
                                </div>
                            )
                        })
                    }
                </div>
                <div style={{
                    display: 'flex',
                    height: '100%',
                    width: '50%',
                    justifyContent: 'flex-end',
                    alignItems: 'center'
                }}>
                    <div className='myBtn' onClick={() => {
                        if(user?.userId === -1) {
                            navigate('/login')
                        } else {
                            navigate(`/profile/${user?.userId}`)
                        }
                    }}>
                        {
                            user?.userId === -1 ? 'Đăng nhập' : user?.lastName
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header