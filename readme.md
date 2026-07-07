🚀 PROYECTO TIENDA
API Rest de Productos - Proyecto Final Obligatorio

Aplicación backend diseñada para administrar el catálogo de productos de la tienda oficial. Proporciona una API Rest segura y escalable que permite realizar operaciones CRUD (Crear, Leer, Actualizar, Eliminar) sobre productos almacenados en la nube, asegurando la integridad de los datos mediante autenticación JWT.

🛠️ Stack Tecnológico
Entorno: Node.js con ESModules.
Framework: Express.js.
Base de Datos: Firebase Firestore.
Seguridad: JSON Web Token (JWT).
Dependencias Adicionales: CORS, Body-Parser, Dotenv.
📁 Arquitectura del Proyecto
El proyecto sigue una arquitectura escalable basada en la separación de responsabilidades (Patrón MVC adaptado con capa de Servicios):

├── src/│   
├── config/           # Configuración de conexión con Firebase.│   
├── controllers/      # Manejo de peticiones HTTP y respuestas.│   
├── middlewares/      # Lógica de autenticación y validación de rutas.│   
├── models/           # Intercacción directa con la base de datos (Firestore).│   
├── routes/           # Definición de endpoints de la API.
│   └── services/         # Lógica de negocio centralizada.
├── .env                  # Variables de entorno (credenciales y secretos).
├── index.js              # Punto de entrada del servidor.
└── package.json          # Configuración del proyecto y scripts.

⚙️ Configuración Inicial y Ejecución
Prerrequisitos
Tener instalado Node.js (versión 18 o superior recomendada).
Contar con un proyecto creado en Firebase Console.
Haber generado una Clave Privada (Service Account) en Firebase para acceso administrativo.

Instalación

Clonar el repositorio (o copiar los archivos en un directorio local).
Instalar las dependencias:

