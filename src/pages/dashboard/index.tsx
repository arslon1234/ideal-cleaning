import { useEffect } from "react"
import {auth} from "@service"
const Index = () => {
  useEffect(()=>{
    auth.get_service({page: 1, limit: 10, owner_email: "arslonbek_ruziboyev7777@mail.ru"})
  },[])
  return (
    <div>
        <h1>Dashboard</h1>
    </div>
  )
}

export default Index
