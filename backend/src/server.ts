import express from 'express';
import 'express-async-errors';
import routes from './routes';
import path from 'path';
import './database/connection';
import errorHandler from './errors/handler';
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);
app.use('/uploads', express.static(path.join(__dirname, '..', 'uploads')))
app.use(errorHandler);

app.listen(3333);




//Rota = conjunto
//Recurso = usuário

//Métodos HTTP = GET, POST, PUT, DELETE
//GET = Buscar uma informação (lista, item)
//POST = Criar uma nova informação
//PUT = Editar uma informação
//DELETE = Deletar uma informação

//Parâmetros
//Query Params: http://localhost:3333/users?search=thalita&page=2
//Route Params: http://localhost:3333/users/1 (Identificar um recurso)
//Body

//Sobre o banco:
//Driver nativo: (sintaxe de banco normal)
//Query builder: (utilizando o knex que vc faz em js e ele converte para o nativo)
//ORM: relaciona os objetos do código com a tabela do banco