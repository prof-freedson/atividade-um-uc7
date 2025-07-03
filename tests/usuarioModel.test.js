// Importando os pacotes
const usuarioModel = require('../models/usuarioModel')

describe("usuarioModel", () => {
// Escrevendo-se os testes
// Testando a função criarUsuario()
// test('Deve criar um usuário', () => { 
//     // Constante com dados fictícios do usuário
// const usuario = usuarioModel.criarUsuario("João", "joao@email.com")

// // Funções para valores obtidos e esperados
// expect(usuario.nome).toBe("João")
// expect(usuario.email).toBe("joao@email.com")
//  })

 // Testando a função listarUusuarios()
//  test("Deve listar usuários", () => {
    // // Simular usuários já criados
    // usuarioModel.criarUsuario("Maria", "maria@email.com")
    // usuarioModel.criarUsuario("José", "jose@email.com")
    // usuarioModel.criarUsuario("Antônio", "antonio@email.com")

    //Constante para listar os usuários
    const usuarios = usuarioModel.listarUsuarios()

    // Função para valores obtidos e esperados
    // OBS: Nesse caso, será a quantidade de usuários
    expect(usuarios.length).toBe(28)

    // Testando a função para listarUsuarioPeloId()
    test("Deve listar somente um usuário", ()=>{
        // Criar o usuário
    //  
    const usuarios = usuarioModel.listarUsuarios()

        // Listar só o usuário criado
        const listado = usuarioModel.listarUsuarioPeloId(usuarios[0].id)

        // Funções para valores obtidos e esperados
        expect(listado).toBeDefined() // Verificar se o usuário foi criado
        expect(listado.nome).toBe("João")
        expect(listado.email).toBe("joao@email.com")
    })


 })
// })

// it("Deve somar dois números", ()=>{
//     expect().toBe()
// })