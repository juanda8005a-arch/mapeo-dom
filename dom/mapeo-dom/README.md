# Sistema de Gestión de Clientes

Proyecto sencillo de gestión de clientes construido con arquitectura en capas (MVC).

## 📁 Estructura del Proyecto

```
mapeo-dom/
├── model/
│   └── clientes.js          # Modelo de datos con arreglo de clientes
├── controller/
│   └── clienteController.js # Controlador (lógica de negocio - vacío)
├── styles/
│   └── styles.css           # Estilos minimalistas con animaciones
├── index.html               # Página principal con datos estáticos
└── README.md
```

## 🎨 Características

- **Diseño Minimalista**: Interfaz limpia y moderna
- **Animaciones Suaves**: Transiciones y efectos visuales atractivos
- **Responsive**: Adaptable a diferentes tamaños de pantalla
- **Arquitectura MVC**: Separación clara de responsabilidades

## 🚀 Cómo Usar

1. Abre el archivo `index.html` en tu navegador
2. La página mostrará los 6 clientes con datos estáticos
3. El controlador está listo para implementar lógica futura
4. El modelo contiene los datos de ejemplo

## 📊 Datos del Modelo

El archivo `model/clientes.js` contiene 6 clientes de ejemplo con:
- ID
- Nombre
- Email
- Teléfono
- Empresa
- Estado (activo/inactivo/pendiente)
- Fecha de registro

## 🎯 Próximos Pasos

El controlador está preparado para implementar:
- Filtrado de clientes por estado
- Búsqueda de clientes
- Renderizado dinámico del DOM
- Gestión de eventos
