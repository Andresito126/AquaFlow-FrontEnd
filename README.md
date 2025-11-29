# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
# AquaFlow-FrontEnd


Este proyecto está construido sobre una pila moderna y eficiente:TecnologíaDescripciónFrontendReact.js con TypeScript (TSX)EstilosTailwind CSS para un diseño ágil y responsivoEstadoMobX para la gestión reactiva y escalable del estado de la aplicaciónRoutingReact Router DOMOtrosi18next para la internacionalización (i18n)📦 InstalaciónSigue estos pasos para configurar y ejecutar el proyecto en tu entorno local.1. Clonar el RepositorioBashgit clone <URL_DE_TU_REPOSITORIO>
cd <nombre-del-repositorio>
2. Instalar DependenciasUsa npm para instalar todas las dependencias del proyecto:Bashnpm install
3. Configuración del Entorno (.env)El proyecto requiere variables de entorno específicas para conectarse a los servicios de backend y a APIs externas.Crea un archivo llamado .env en la raíz del proyecto y añade las siguientes variables, reemplazando los valores por tus credenciales y URLs de servicio:Fragmento de código# URL base para la conexión de WebSockets (Sensores en tiempo real)
VITE_SOCKET_URL=ws://<tu_url_de_websocket>

# URL base para la API de los sensores
VITE_APISENSORS_URL=http://<tu_url_api_sensores>/api

# Key de una API de clima (Ej. OpenWeatherMap)
VITE_WEATHER_API_KEY=<tu_clave_de_api_externa>

# URL base para la API principal de autenticación y lógica de negocio
VITE_API_URL=http://<tu_url_api_principal>/api

# URL de autenticación específica
VITE_API_AUTH=http://<tu_url_api_auth>/auth
🏃 Ejecución del ProyectoUna vez configurado el archivo .env, puedes iniciar la aplicación en modo desarrollo:Bashnpm run dev
La aplicación se ejecutará en tu navegador, generalmente en http://localhost:5173. Cualquier cambio que realices en el código se reflejará automáticamente (Hot Reload).📄 Estructura del ProyectoEl proyecto sigue una arquitectura modular donde los componentes de presentación y la lógica de estado (MobX ViewModels) están separados:src/
├── core/             # Recursos estáticos, assets, iconos
├── features/         # Módulos de la aplicación (ej. users, sensors, filter)
│   ├── modules/
│   │   └── Presentation/  # Componentes de React
│   │   └── ViewModels/    # MobX Store/ViewModel (Lógica de estado)
├── shared/           # Componentes genéricos, hooks, layouts compartidos
└── App.tsx           # Configuración de rutas
