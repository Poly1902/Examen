import express from 'express';
import { sequelize } from './DB/conexiondb.js';
import { PORT } from './config/config.js';
import {routerP} from './router/profesorrouter.js';
import {routeres} from './router/estudianterouter.js';
import {routercl} from './router/califrouter.js';
const app = express()
const port = PORT

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/Examen', routerP);
app.use('/Examen', routeres);
app.use ('/Examen', routercl);

const main = async () => {
  try {
    await sequelize.authenticate();
    console.log('Conectado a la base de datos');
    await sequelize.sync ({alter:true})
    app.listen(port, () => {
      console.log(`Servidor escuchando en el puerto ${port}`);
      });
      } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        }
}
main();