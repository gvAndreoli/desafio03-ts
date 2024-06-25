interface IDioBank{
    login: boolean
    userEmail: string
    userPassword: string
}

const diobank = {
    login: false,
    userEmail: '',
    userPassword : ''
}

export const getAllLocalStorage = ():string | null=> {
    return localStorage.getItem('diobank')
}

export const createLocalStorage = (): void => {
    localStorage.setItem('diobank', JSON.stringify(diobank))
}

export const changeLocalStorage = (dioBank: IDioBank): void => {
    localStorage.setItem('diobank', JSON.stringify(dioBank))
}

export const clearLocalStorage = (): void => {
    localStorage.clear()
}