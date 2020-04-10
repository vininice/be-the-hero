const express = require("express");
const cors = require("cors");

const routes = require("./routes");

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(3333);

//Rota recurso

//metodos http:
/*GET: busca uma info do backend  */
/**POST: criar uma nova informação */
/**PUT: editar a informação */
/**DElETAR: deletar uma informação */

// tipos de param'

/**Query =  enviadosna rota apos ? (filtros, paginação) */
/**
 * Route : utilizados para identificar recursos
 * request body: corpo da reqisição, utilizados para criar ou alterar recursos
 */

/**
 * SLQ: mySQL, SQlite, postgreSQL, Oracle
 * noSQL: mongoDb, CouchDB
 */

/**
 * Driver: SELECT * from users
 *
 * Query builder: table('users").select('*').where()
 */
