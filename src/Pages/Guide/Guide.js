import Layout from "../../Components/Layout/Layout";
import { useNavigate } from "react-router-dom";
import { useSelector } from 'react-redux'
import "./Guide.css"

export default function Guide() {

    const navigate = useNavigate()
    const { user } = useSelector(state => state.user)
    
    return (
        <Layout>
            <div style={{
                width: '100%',
                minHeight: '90vh'
            }}>
                
            </div>
        </Layout>
    )
}