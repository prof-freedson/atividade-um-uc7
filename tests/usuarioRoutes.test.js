// Importando pacotes, models e controllers
const request = require('supertest')
const express = require('express')

const usuarioModel = require('../models/usuarioModel')
const usuarioController = require('../controllers/usuarioController')
const usuarioRoutes = require('../routes/usuarioRoutes')



//Isolando a model para testar as rotas

// Estrutura do test das rotas
describe("usuarioRoutes", ()=>{
// Definir uma variável que vai herdar o pacote express
// e configurar partes do servidor com Node.js
    let app

    beforeAll(()=>{
        app = express()
        app.use(express.json)
        app.use("/usuarios", usuarioRoutes)
    })

        beforeEach(()=>{
            usuarioModel.listarUsuarios = jest.fn().mockReturnValue([])
            usuarioModel.criarUsuario = jest.fn()
        })

        test("GET /usuarios - deve retornar o status 200", async ()=>{
            usuarioModel.listarUsuarios.mockReturnValue([])
            const res = await request(app).get("/usuarios")
            expect(res.statusCode).toBe(200)
        })
        })