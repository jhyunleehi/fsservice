import { useState, useEffect, useContext, createContext } from "react";
import { useWebSocket } from "react-use-websocket/dist/lib/use-websocket";
import useAuth from "./useJwt";


const wsURL = "ws://172.30.1.78:8080/ws";

const WebSocketContextProvider = createContext({})
const {jwt}= useAuth // it is gonna be used for the login and logout websocket connection


export const WebProvider = ({children})=>{
    const [isConnected , setIsConnected] = useState()
    const {sendJsonMessage, lastJsonMessage} = useWebSocket(wsURL, {
        onOpen: ()=>{
            setIsConnected(true)
        },
        shouldReconnect: (CloseEvent)=> true

        
    })
    return (
        <WebSocketContextProvider.Provider value ={{sendJsonMessage, lastJsonMessage}}>
            {children}
        </WebSocketContextProvider.Provider>
    )
}


const Ws = ()=>{
    return useContext(WebSocketContextProvider)
}

export default Ws