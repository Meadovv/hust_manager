import { useEffect, useState } from 'react'
import { Row, Col, Card, Input } from 'antd'
import Layout from '../../Components/Layout/Layout'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import MyList from '../../Components/MyList/MyList'

const apartmentList = [
    {
        "address": "BBBB",
        "roomNumber": "30",
        "gia": "1000",
        "imageLink": "https://cdn.chotot.com/e4NgWU54xfhSenEqi10Q2FlkWED2Zxb8Vqhp0nOJX30/preset:view/plain/7a8939bf4b227b2120dab69f3fe2317c-2856973439879225097.jpg"
    },
    {
        "address": "CCCC",
        "roomNumber": "30",
        "gia": "1000"
    },
    {
        "address": "DDDD",
        "roomNumber": "30",
        "gia": "1000"
    },
    {
        "address": "DDDD",
        "roomNumber": "30",
        "gia": "1000"
    },
    {
        "address": "AAAA",
        "roomNumber": "30",
        "gia": "1000"
    },
    {
        "address": "BBBB",
        "roomNumber": "30",
        "gia": "1000"
    },
    {
        "address": "CCCC",
        "roomNumber": "30",
        "gia": "1000"
    },
    {
        "address": "DDDD",
        "roomNumber": "30",
        "gia": "1000"
    },
    {
        "address": "DDDD",
        "roomNumber": "30",
        "gia": "1000"
    },
    {
        "address": "AAAA",
        "roomNumber": "30",
        "gia": "1000"
    },
    {
        "address": "BBBB",
        "roomNumber": "30",
        "gia": "1000"
    },
    {
        "address": "CCCC",
        "roomNumber": "30",
        "gia": "1000"
    },
    {
        "address": "DDDD",
        "roomNumber": "30",
        "gia": "1000"
    },
    {
        "address": "DDDD",
        "roomNumber": "30",
        "gia": "1000"
    }
]

const Home = () => {

    const navigate = useNavigate()

    // const [apartmentList, setApartmentList] = useState([])
    // const [page, setPage] = useState(1)

    // const navigate = useNavigate()

    // const getApartmentList = async () => {
    //     await axios.post('/apartment/get-apartment-list',
    //     {
    //         userId: 0,
    //         page: page
    //     }).then(res => {
    //         if(res.data.success) {
    //             setApartmentList(res.data.list)
    //         } else {
    //             console.log(res.data.message)
    //         }
    //     }).catch(err => {
    //         console.log(err)
    //     })
    // }

    // useEffect(() => {
    //     getApartmentList()
    // }, [])

    return (
        <Layout>
            <MyList apartmentList={apartmentList}/>
        </Layout>
    )
}

export default Home