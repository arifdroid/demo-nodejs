import express from 'express';
import helmet from "helmet";
import cors from 'cors';
import databaseMiddleWare from '../middlewares/databaseMiddlewares';



const app = express();

app.use(cors({origin:true}));
app.use(databaseMiddleWare);

app.use(helmet());
app.use(express.json());


const routes = express.Router();

require('./tasks_test').default(routes);

app.use('/api', routes);

export default app;