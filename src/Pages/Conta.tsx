import { useEffect, useState } from "react"
import { InfoCard } from "../components/Card/InfoCard"
import { useNavigate, useParams } from "react-router-dom"
import { api } from "../api"
import { Box, Button, Center, Heading, Spacer, Spinner } from "@chakra-ui/react"
import { InfoBox } from "../components/Boxes/InfoBox"


interface UserData {
  name: string
  email: string
  password: string
  balance: number
  dt: string
  id: string
}

const Conta = () => {
  const [userData, setUserData] = useState<null | UserData>()
  const localDate: Date = new Date()
  const { id } = useParams()
  const navigate = useNavigate()

  const infoNavegate = () => {
    navigate('/conta/1/info')
  }

  useEffect(() => {
    const getData = async () => {
      const data: any | UserData = await api
      setUserData(data)
    }
    getData()
  }, [])

  if (userData && id !== userData.id) {
    navigate('/')
  }

  return (
    <InfoCard>
      <Center marginBottom={3}>
        <Heading as={'h2'} size={'lg'}>Seja Bem Vindo(a)</Heading>
      </Center>
      <Box display={"flex"}>
        {
          userData === null || userData === undefined ?
            (<Spinner marginLeft={"45%"} />)
            :
            (<>
              <InfoBox title="Informação de acesso"
                info1={`Horário de acesso`}
                info2={`${localDate.getDate()} /
              ${localDate.getMonth()} /
              ${localDate.getFullYear()} |
              ${localDate.getHours()}:${localDate.getMinutes()}`} />
              <Spacer />
              <InfoBox title="Informação da conta"
                info1={"Saldo"}
                info2={`R$: ${userData?.balance}`} />
            </>
            )
        }
      </Box>
      <Button onClick={infoNavegate}>+ Info</Button>
    </InfoCard>
  )
}

export default Conta