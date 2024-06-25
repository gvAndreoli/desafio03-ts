import { Flex, Heading, Image, Spacer,  Button } from "@chakra-ui/react"
import { useContext } from "react"
import { AppContext } from "../Context/AppContext"
import { clearLocalStorage } from "../../services/storage"
import { useNavigate } from "react-router-dom"



export const Header = () => {
    const {isLoggedIn, setIsLoggedIn, setUserEmail, setUserPassword} = useContext(AppContext)
    const navigate = useNavigate()

    const logout = () =>{
        setIsLoggedIn(false)
        setUserEmail('')
        setUserPassword('')
        clearLocalStorage()
        navigate('/')
    }

    return (
        <Flex padding={'1% 5%'}>
        <Heading as={'h2'} size={'xl'}>DIO Bank</Heading>
        <Spacer />
        { isLoggedIn? 
        <>
        <Button onClick={logout} marginRight={"8%"}>sair</Button>
        <Spacer />
        </> :
        ''
        }
        <Image boxSize={'50px'} borderRadius={'full'} src="https://avatars.githubusercontent.com/u/26231823?s=200&v=4" alt="Logo da dio"/>
        </Flex>
    )
}