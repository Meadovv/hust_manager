import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from "react-router-dom"
import ApartmentProfile from './ApartmentProfile'
import ApartmentAdmin from './ApartmentAdmin'
import axios from 'axios'
import { message } from 'antd'

export default function ApartmentView () {

    const { user } = useSelector(state => state.user)
    const param = useParams()
    const navigate = useNavigate()

    const [apartment, setApartment] = useState(null)
    const [apartmentImage, setApartmentImage] = useState([])

    const getApartment = async (apartmentId) => {
        await axios.post('/apartment/get-apartment',
        {
            apartmentId: apartmentId
        }).then(res => {
            if(res.data.success) {
                setApartment(res.data.apartment)
            } else {
                message.error(res.data.message)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    const getApartmentImage = async (apartmentId) => {
        await axios.post('/apartment/get-apartment-image',
        {
            apartmentId: apartmentId
        }).then(res => {
            if(res.data.success) {
                setApartmentImage(res.data.images)
            }
        }).catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        getApartment(param.apartmentId)
        getApartmentImage(param.apartmentId)
    }, [param])

    if(apartment?.userId === user?.userId) {
        return <ApartmentAdmin apartment={apartment} apartmentImage={apartmentImage}/>
    } else {
        return <ApartmentProfile apartment={apartment} apartmentImage={apartmentImage}/>
    }
}