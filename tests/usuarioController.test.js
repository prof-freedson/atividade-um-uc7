// Importação da model e da controller
const usuarioModel = require('../models/usuarioModel')
const usuarioController = require('../controllers/usuarioController')

// Permitir o uso de dados fictícios dentro desse teste e que não sejam da outra fonte
jest.mock("../models/usuarioModel")

// Estrutura do teste da controller
describe("usuarioController", () => {
    // Definindo a requisição e resposta com variáveis
    let req, res

    // Definir formatos de dados esperados para dados fictícios
    beforeEach(() => {
        req = { headers: {}, params: {}, body: {}, is: () => false }
        res = {
            status: jest.fn().mockReturnThis(),
            json: jest.fn(),
            type: jest.fn().mockReturnThis(),
            send: jest.fn()
        }
    })

    // Testando a função listarUsuarios()
    test('Deve retornar uma lista de usuários', () => {
        // Constante de usuários já criados
        // exibindo id, nome e email

        const usuarios = [
            { id: 1, nome: "João", email: "joao@email.com" },
            { id: 2, nome: "Izabel", email: "izabel@email.com" }
        ]

        // Listando os usuários já criados dentro desse teste
        usuarioModel.listarUsuarios.mockReturnValue(usuarios)

        // Solicitando a listagem dos usuários pela controller
        usuarioController.listarUsuarios(req, res)

        // Funções para valores obtidos e esperados
        // para usuarios criados nesse teste
        expect(res.json).toHaveBeenCalledWith(usuarios)
    })
})