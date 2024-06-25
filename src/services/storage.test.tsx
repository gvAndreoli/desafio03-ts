import { changeLocalStorage, clearLocalStorage, createLocalStorage, getAllLocalStorage } from "./storage"

const diobank = {
    login: false,
    userEmail: '',
    userPassword: ''
}
describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')

    it('retorna o objeto no localsorage com a chave diobank', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('Deve criar o objeto no localStorage', () => {
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })

    it('deve trocar o valor do login', () => {
        changeLocalStorage(diobank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(diobank))
    })
    
    it('Deve limpar todo o localStorage', () => {
        const mockClearLocalStorage = jest.spyOn(Storage.prototype, 'clear')
        clearLocalStorage()
        expect(mockClearLocalStorage).toHaveBeenCalled()
    })
})