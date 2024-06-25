import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Conta from "./Pages/Conta"
import { useContext } from "react"
import { AppContext } from "./components/Context/AppContext"
import InfoConta from "./Pages/InfoConta"


const MainRoutes = () => {
    const { isLoggedIn } = useContext(AppContext)

    return (
        <Routes>
              <Route path="/" element={ <Home/> } />
              <Route path="/conta/:id" element={isLoggedIn? <Conta/> : <Home/>} />
              <Route path="/conta/:id/info" element={isLoggedIn? <InfoConta/> : <Home/>} />
        </Routes>
    )
}

export default MainRoutes