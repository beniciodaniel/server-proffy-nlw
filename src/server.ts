import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
// para poder ler json vindo no corpo da requisicao
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || 3333, () => console.log('server running'));
