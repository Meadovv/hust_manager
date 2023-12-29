import { useNavigate } from "react-router-dom"

export default function MyList({ apartmentList }) {

    const navigate = useNavigate()

    return (
        <div class="Homepage__background-container grid__row">
        {
            apartmentList && apartmentList.map((item, index) => {


                return (
                    <div class="grid__column-3" >
                        <div class="Room-list">

                            <div class="Room__list-item grid__row" style={{
                                padding: 10
                            }}>

                                <img src={item.imageLink} alt="" style={{
                                    width: '100%',
                                    borderRadius: 10
                                }} />

                                <h1 class="text-gradient" style={{
                                    width: '100%',
                                    textAlign: 'center',
                                    fontSize: '3rem',
                                    lineHeight: '3.5rem',
                                    marginBottom: 10
                                    }}>{index+1}
                                </h1>
                                <p class="" style={{
                                    fontSize: '1.5rem',
                                    textAlign: 'center'
                                    }}>
                                    {item.gia}
                                </p>
                                <div class="grid__row" style={{
                                    width: '100%',
                                    justifyContent: 'center'
                                }}>
                                    <div class="Room__switch-button" onClick={() => {
                                        navigate(`/Phong/${item.IDPhong}`)
                                    }}>
                                        <p class="Room__switch-text">Chi tiết</p>
                                    </div>
                                    <div class="Room__change-button" style={{
                                        justifyContent: 'center'
                                    }} onClick={() => {
                                        navigate(`/Sua-thong-tin-phong/${item.IDPhong}`)
                                    }}>
                                        <i class="fa-solid fa-wrench" style={{
                                            marginLeft: 5,
                                            fontSize: '2.5rem',
                                            color: 'white'
                                        }}></i>
                                    </div>

                                </div>

                            </div>
                        </div>

                    </div>

                )
            })
        }
    </div>

    )
}