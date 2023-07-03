import { useEffect } from "react"
import KakaoMap from "./KakaoMap"
import useAuth from "../../hook/useJwt"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const {jwt} = useAuth()
    const navigate = useNavigate()
    
    return (
        <div className="text-center">
            <h2>Dashboard</h2>
            
            <hr />
            <KakaoMap />
        </div>
    )
}

export  default Home