import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();

app.use(cors());
// para poder ler json vindo no corpo da requisicao
app.use(express.json());
app.use(routes);

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json'
  );
  next();
});

app.listen(process.env.PORT || 3333, () => console.log('server running'));
