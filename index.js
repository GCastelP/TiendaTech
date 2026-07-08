// 1. Importar dependencias
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

// 2. Importar middlewares personalizados
import { notFoundHandler } from './src/middlewares/notFound.js';
import mainRoutes from './src/routes/index.routes.js';  // nueva importacion de rutas centralizadas

// 3. Cargar variables de entorno
dotenv.config();

// 4. Inicializar la aplicación Express
const app = express();
const PORT = process.env.PORT || 3000;

// 5. Configuración de Middlewares Globales (Librerías estándar)
app.use(cors());
app.use(bodyParser.json());

// 6. Ruta básica (Health Check)
app.get('/', (req, res) => {
    res.status(200).json({ 
        message: '¡Bienvenido a la API de Tienda TechLab!',
        status: 'Servidor operativo'
    });
});

// Conectar las rutas centralizadas
app.use(mainRoutes);   // nueva linea

// 7. Middleware para rutas desconocidas (404) - Importado desde la capa de middlewares
app.use(notFoundHandler);

// 8. Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor Tienda TechLab corriendo en http://localhost:${PORT}`);
});