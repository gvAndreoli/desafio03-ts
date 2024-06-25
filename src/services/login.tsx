import { api } from "../api"

export const validateEmail = async (email: string): Promise<boolean> => {
    const data: any = await api
    if(email !== data.email){
        return false
    }
    return true
} 

export const validatePassword = async (password: string): Promise<boolean> => {
    const data: any = await api
    if(password !== data.password){
        return false
    }
    return true
}

export const login = async (email: string, password: string): Promise<boolean> => {
    if(await validateEmail(email) && await validatePassword(password)){
        return true
    }
    alert('Email ou senha incorretos')
    return false
}