import express from 'express';
import cors from 'cors';
import todoRoutes from './Routes/todo.routes';
import helmet from 'helmet';
import morgan from 'morgan';
import logger from './utils/logger';
import 'reflect-metadata';
import { AppDataSource } from './config/data-source';
import mongoose from 'mongoose';
import dotenv from 'dotenv';




const app = express();
const PORT = 3000;
// Usar Helmet para seguridad evitamos que cabeceras vulnerables en el header sean enviadas al cliente
app.use(helmet({
  hidePoweredBy: true, // Oculta el encabezado X-Powered-By
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "trusted-scripts.example.com"],
      objectSrc: ["'none'"],
    },
  },
}));
app.use(helmet.hsts({ maxAge: 63072000, includeSubDomains: true, preload: true }));
app.use(helmet.frameguard({ action: 'deny' }));

const allowedOrigins = ['http://localhost:4200/', 'http://another.com'];

const corsOptions = {
  origin: (origin: string | undefined, callback: Function) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
};

app.use(cors(corsOptions));

app.use(morgan('combined'));//logg

app.use(cors());
app.use(express.json());

app.use('/api/todos', todoRoutes); // podriamos implementar un middleware para funciones de authenticacion 
dotenv.config();
try{
app.listen(PORT, () => {
  
  logger.info('Servidor iniciado');
// conectarse a una BD SQL
  AppDataSource.initialize()
  .then(() => {
    console.log('Base de datos conectada');
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
      logger.info('coneccion a BD exitosa');
    });
// para conectar con alguna BD orientada a docs
    mongoose.set('strictQuery', true);
    mongoose.connect(process.env.MONGODB_KEY?process.env.MONGODB_KEY:'', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
      .then(() => console.log('Conectado a MongoDB'))
      .catch((err) => console.error('Error conectando a MongoDB:', err));
      
  })
  .catch((error) => {
    console.error('Error conectando la base de datos:', error)
    logger.error(`Error al intentar conectar con BD ${error}`);
});

})}
catch(err){
  logger.error(`Error crítico en la aplicación ${err}`);
};
