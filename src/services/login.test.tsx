import { login, validatePassword } from "./login";

// const mockSetIsLoggedIn = jest.fn();
// const mockNavigate = jest.fn()

// jest.mock("react", () => ({
//     ...jest.requireActual('react'),
//     useContext: () => ({
//         setIsLoggedIn: mockSetIsLoggedIn
//     })
// }));

// jest.mock("react-router-dom", () => ({
//     ...jest.requireActual('react-router-dom') as any,
//     useNavigate: () => mockNavigate
// }));

describe('login', () =>{
    const mockEmail = 'gabriel@andreoli';
    const mockSenha = '123456'

    it('testa se o loggedIn foi alterado e se a pagina navegou para o id', async () => {
        const response = await login(mockEmail, mockSenha);
        expect(response).toBeTruthy()
    });

    it('testa se o loggedIn foi chamado', async () => {
        const response = await login("Inválido", '31231');
        expect(response).toBeFalsy()
    });

    it('testa se a senha foi validada', async () => {
        const response = await validatePassword(mockSenha)
        expect(response).toBeTruthy
    })

    it('Deve retornar false caso a senha informada seja diferenta', async ()=> {
        const response = await validatePassword('41231')
        expect(response).toBeFalsy()
    })
})