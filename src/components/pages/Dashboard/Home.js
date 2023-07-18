import { useEffect } from "react"
import KakaoMap from "./KakaoMap"
import useAuth from "../../hook/useJwt"
import { useNavigate } from "react-router-dom"
import Ws from "../../hook/useWebsocket"

const Home = () => {
    const {jwt} = useAuth()
    const navigate = useNavigate()
    const {sendJsonMessage, lastJsonMessage} = Ws()
    
    useEffect(()=>{
        if(jwt.length<1) {
            navigate("login")
        }

    },[])
    return (
        <div className="text-center">
            <h2>Dashboard</h2>
            
            <hr />
            <KakaoMap />
        </div>
    )
}

export  default Home