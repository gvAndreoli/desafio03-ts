import { Center, Heading, Stack } from "@chakra-ui/react";
import { LoginCard } from "../components/Card/LoginCard"
import { InputComponent } from "../components/InputComponent/InputComponent";
import { useContext, useState } from "react";
import { BtnEnviar } from "../components/Buttons/ButtonEnviar";
import { login } from "../services/login";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../components/Context/AppContext";
import { changeLocalStorage } from "../services/storage";



const Home = () => {
  const [email, setEmail] = useState<string>('')
  const [senha, setSenha] = useState<string>('')
  const { userEmail, setUserEmail, userPassword,
     setUserPassword,  setIsLoggedIn } = useContext(AppContext)
  const navigate = useNavigate()
  
  if(userEmail && userPassword){
    setIsLoggedIn(true)
    navigate('/conta/1')
  }
  
  const validateUser = async (email: string, senha: string) => {
    if( await login(email ,senha)){
      setIsLoggedIn(true)
      setUserEmail(email)
      setUserPassword(senha)
      changeLocalStorage({ login:true, userEmail: email, userPassword: senha})
      navigate('/conta/1')
    }
  }


  return (
    <LoginCard>
      <Heading
        as='h2'
        size='lg'
        marginBottom={'1%'}
      >
        <Center>Realize o login</Center>
      </Heading>
      <Stack spacing={4}>
        <InputComponent
          label={"Email: "}
          htmlFor={"email"}
          type={"email"}
          placeholder="Digite seu email"
          value={email}
          onChange={setEmail}
        />
        <InputComponent
          label={"Senha: "}
          htmlFor={"log_password"}
          type={"password"}
          placeholder="Digite sua senha"
          value={senha}
          onChange={setSenha}
        />
        <BtnEnviar msg={"Enviar"} event={() => validateUser(email, senha)} />
      </Stack>
    </LoginCard>
  )
}

export default Home;