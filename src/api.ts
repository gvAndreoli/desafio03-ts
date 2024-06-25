const conta = {
    name: 'gabriel vidal',
    email: 'gabriel@andreoli',
    password: '123456',
    balance: 20000,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(()=>{
        resolve(conta)
    }, 3000)
})