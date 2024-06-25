import { createContext, useEffect, useState } from "react";
import { getAllLocalStorage } from "../../services/storage";


interface IAppContext {
  userEmail: string
  setUserEmail: (userEmail: string) => void
  userPassword: string
  setUserPassword: (userPassword: string) => void
  isLoggedIn: boolean
  setIsLoggedIn: (isLoggedIn: boolean) => void
}


export const AppContext = createContext({} as IAppContext)

export const AppContextProvider = ({ children }: any) =>{
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
  const [userEmail, setUserEmail] = useState<string>('')
  const [userPassword, setUserPassword] = useState<string>('')
  const storage: string | null = getAllLocalStorage()

  useEffect(() => {
    if (storage){
      const {login, userEmail, userPassword} = JSON.parse(storage)
      console.log(login, typeof login)
      if (login === true){
        setUserEmail(userEmail)
        setUserPassword(userPassword)
        setIsLoggedIn(login)
      }
    }
  })
  
  return(
    <AppContext.Provider value={{ userEmail, setUserEmail, userPassword, setUserPassword, isLoggedIn, setIsLoggedIn }}>
      {children}
    </AppContext.Provider>
  )
}