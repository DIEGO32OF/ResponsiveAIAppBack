import { createLogger, format, transports } from 'winston';

const logger = createLogger({
  level: 'info',
  format: format.combine(
    format.timestamp(),
    format.json() // Guarda los logs en formato JSON
  ),
  transports: [
    new transports.Console(), // Logs en consola
    new transports.File({ filename: 'logs/error.log', level: 'error' }), // Logs de errores
    new transports.File({ filename: 'logs/combined.log' }), // Todos los logs
  ],
});

export default logger;
