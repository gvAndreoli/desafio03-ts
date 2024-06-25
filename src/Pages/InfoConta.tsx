import { useEffect, useState } from "react"
import { InfoBox } from "../components/Boxes/InfoBox"
import { InfoCard } from "../components/Card/InfoCard"
import { api } from "../api"
import { useNavigate } from "react-router-dom"
import { Button, Center, Spinner } from "@chakra-ui/react"

interface UserData {
    name: string
    email: string
    password: string
    balance: number
    dt: string
    id: string
  }

const InfoConta = () => {
    const [userData, setUserData] = useState<null | UserData>()
    const navigate = useNavigate()

    useEffect(() => {
        const getData = async () => {
          const data: any | UserData = await api
          setUserData(data)
        }
        getData()
      }, [])

      const voltarConta = () => {
        navigate(`/conta/${userData?.id}`)
      }


    return(
        <InfoCard>
            { userData? 
            <>
            <InfoBox 
            title={"Informações de usuário"}
            info1={`Nome: ${userData?.name}`}
            info2={`Email: ${userData?.email}`} />
            </> :
            <Center>
                <Spinner />
            </Center>
            }
            <Button onClick={voltarConta}>Voltar para conta</Button>
        </InfoCard>
    )
}

export default InfoConta