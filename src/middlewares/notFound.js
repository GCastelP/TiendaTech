/**
 * Middleware para manejar rutas desconocidas (Error 404).
 * Se ejecuta al final de la cadena de rutas si ninguna coincide.
 */
export const notFoundHandler = (req, res) => {
    res.status(404).json({
        error: 'Ruta no encontrada',
        message: `La ruta ${req.originalUrl} no está definida en el servidor.`
    });
};