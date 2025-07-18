# Laboratorio Angular - Ibero

Este repositorio contiene dos proyectos Angular desarrollados como parte del laboratorio de desarrollo web. Incluye aplicaciones con componentes reutilizables, servicios API y funcionalidades interactivas.

## 📸 Capturas de Pantalla

### Laboratorio-Ibero-Angular

<div align="center">
  <img width="1858" height="1022" alt="image" src="https://github.com/user-attachments/assets/5ad493ff-0b0b-4f0b-bfc6-29ce230c9350" />
  <p><em>Vista general de la página Web Laboratorio-Ibero-Angular</em></p>
</div>

<div align="center">
<img width="1831" height="863" alt="image" src="https://github.com/user-attachments/assets/81fd1e98-af43-4924-90f2-c905ff59a95f" />
  <p><em>Sección Sobre Laboratorio</em></p>
</div>

<div align="center">
<img width="1852" height="1017" alt="image" src="https://github.com/user-attachments/assets/5c855dc4-63f8-454a-a454-7b6f674956b5" />
  <p><em>Sección Curso Angular</em></p>
</div>

<div align="center">
<img width="1837" height="1012" alt="image" src="https://github.com/user-attachments/assets/eb4bd9eb-5fd3-41fa-bd52-2735fd48be40" />
  <p><em>Formulario con validaciones en tiempo real</em></p>
</div>

<div align="center">
<img width="1847" height="1012" alt="image" src="https://github.com/user-attachments/assets/af61199e-446f-4cf5-8cc3-365cd6682790" />
  <p><em>Lista dinámica de personajes desde la API de Rick and Morty</em></p>
</div>


<div align="center">
<img width="1847" height="997" alt="image" src="https://github.com/user-attachments/assets/b4c55889-73f3-4078-8f55-920a6cd38fa6" />
  <p><em>Sección de agradecimientos</em></p>
</div>

<div align="center">
<h3> Seccion Movil Laboratorio </h3>
<img width="472" height="927" alt="image" src="https://github.com/user-attachments/assets/91bfa261-7fb6-467c-8bc6-f0895c9910f1" />
<em><p>Diseño adaptativo perfecto para dispositivos móviles*</p></em>
</div>


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


## 📄 Licencia

Este proyecto es parte del laboratorio académico de la Universidad Iberoamericana.

## 👨‍💻 Autor

**barbosa191919** - Estudiante de Desarrollo Web

