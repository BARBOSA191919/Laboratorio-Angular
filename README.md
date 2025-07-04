# Laboratorio Angular - Ibero

Este repositorio contiene dos proyectos Angular desarrollados como parte del laboratorio de desarrollo web. Incluye aplicaciones con componentes reutilizables, servicios API y funcionalidades interactivas.

## 📁 Estructura del Proyecto

```
barbosa191919-laboratorio-angular/
├── Laboratorio-Ibero-Angular/    # Aplicación principal del laboratorio
└── mi_app/                       # Aplicación complementaria con funcionalidades avanzadas
```

## 🚀 Proyectos Incluidos

### 1. Laboratorio-Ibero-Angular
Aplicación Angular básica con componentes fundamentales:

**Componentes principales:**
- `app`: Componente raíz de la aplicación
- `navbar`: Barra de navegación
- `footer`: Pie de página
- `saludo`: Componente de saludo interactivo

**Características:**
- Estructura modular con componentes reutilizables
- Configuración para Server-Side Rendering (SSR)
- Routing configurado
- Estilos CSS personalizados

### 2. mi_app
Aplicación Angular avanzada con integración de APIs y componentes complejos:

**Componentes principales:**
- `hero`: Sección hero con imagen destacada
- `navbar` y `footer`: Navegación y pie de página
- `about-labs`: Información sobre el laboratorio
- `character-list`: Lista de personajes (integración con API)
- `example-form`: Formulario de ejemplo
- `thank-you`: Página de agradecimiento
- `youtube-course`: Componente para cursos de YouTube

**Servicios API:**
- `api.service`: Servicio genérico para llamadas API
- `rick-and-morty.service`: Servicio específico para la API de Rick and Morty

**Características:**
- Integración con API externa (Rick and Morty)
- Formularios reactivos
- Routing avanzado
- Gestión de assets (imágenes)
- Arquitectura basada en módulos

## 🛠️ Tecnologías Utilizadas

- **Angular**: Framework principal
- **TypeScript**: Lenguaje de programación
- **HTML5 & CSS3**: Marcado y estilos
- **Angular CLI**: Herramientas de desarrollo
- **Server-Side Rendering**: Para mejor SEO y rendimiento

## 📋 Requisitos Previos

- Node.js (versión 16 o superior)
- npm o yarn
- Angular CLI (`npm install -g @angular/cli`)

## 🔧 Instalación y Configuración

### Para Laboratorio-Ibero-Angular:

```bash
# Navegar al directorio del proyecto
cd Laboratorio-Ibero-Angular

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
ng serve

# La aplicación estará disponible en http://localhost:4200
```

### Para mi_app:

```bash
# Navegar al directorio del proyecto
cd mi_app

# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
ng serve

# La aplicación estará disponible en http://localhost:4200
```

## 🏗️ Scripts Disponibles

En cada proyecto, puedes ejecutar:

- `ng serve`: Inicia el servidor de desarrollo
- `ng build`: Construye el proyecto para producción
- `ng test`: Ejecuta las pruebas unitarias
- `ng lint`: Ejecuta el linter para revisar el código
- `ng serve:ssr`: Ejecuta la aplicación con SSR

## 🎯 Funcionalidades Principales

### Laboratorio-Ibero-Angular
- ✅ Componentes básicos de Angular
- ✅ Navegación entre secciones
- ✅ Componente de saludo interactivo
- ✅ Estilos personalizados

### mi_app
- ✅ Integración con API de Rick and Morty
- ✅ Lista dinámica de personajes
- ✅ Formularios reactivos
- ✅ Sección hero con imagen
- ✅ Componentes reutilizables
- ✅ Routing avanzado

## 📱 Componentes Destacados

### Character List Component
Muestra una lista de personajes obtenidos desde la API de Rick and Morty con:
- Carga dinámica de datos
- Manejo de estados de carga
- Interfaz responsive

### Example Form Component
Formulario de ejemplo que demuestra:
- Validaciones en tiempo real
- Manejo de eventos
- Integración con servicios

### Hero Component
Sección principal con:
- Imagen hero optimizada (WebP)
- Diseño responsive
- Call-to-action

## 🧪 Testing

Cada componente incluye archivos de prueba (`.spec.ts`) con:
- Pruebas unitarias
- Pruebas de integración
- Mocks para servicios

Para ejecutar las pruebas:
```bash
ng test
```

## 📦 Estructura de Archivos

- `src/app/`: Código fuente de la aplicación
- `src/app/components/`: Componentes reutilizables
- `src/app/api/`: Servicios para consumo de APIs
- `public/assets/`: Recursos estáticos (imágenes, etc.)
- `src/styles.css`: Estilos globales

## 🌐 APIs Utilizadas

- **Rick and Morty API**: https://rickandmortyapi.com/
  - Endpoint de personajes
  - Manejo de paginación
  - Filtros y búsqueda

## 🤝 Contribuir

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -m 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## 📄 Licencia

Este proyecto es parte del laboratorio académico de la Universidad Iberoamericana.

## 👨‍💻 Autor

**barbosa191919** - Estudiante de Desarrollo Web

---

*Este README fue generado para el laboratorio de Angular - Universidad Iberoamericana*
