# 🎨 Generador Didáctico de Arquitecturas de Software

![Generador de Arquitecturas](https://img.shields.io/badge/Estado-Completado-success)
![Tecnologías](https://img.shields.io/badge/Tecnologías-HTML%20%7C%20CSS%20%7C%20JS%20%7C%20Tailwind-blue)

## 🎯 Finalidad Didáctica del Proyecto

Este sitio web es una **plataforma interactiva y multimodal** diseñada específicamente para **enseñar y facilitar la comprensión de 12 patrones fundamentales de arquitectura de software**. 

Nació con el propósito de resolver un problema común en la educación tecnológica: las arquitecturas suelen explicarse con diagramas estáticos aburridos y terminología excesivamente compleja. Para solucionarlo, este generador aborda el aprendizaje desde tres frentes:

1. **Analogías del Mundo Real**: Explica cada concepto técnico (ej. Microservicios) asociándolo a una experiencia cotidiana (ej. Una plaza de comidas), facilitando el aprendizaje para estudiantes, perfiles de negocio (Product Managers) y desarrolladores junior.
2. **Simulación Práctica (Aprendizaje Visual)**: A través del "Simulador de Caos", los alumnos pueden presionar un botón y ver exactamente qué nodo falla en cada arquitectura y cómo reacciona el resto del sistema, comprendiendo la resiliencia en tiempo real.
3. **Creación de Material Educativo**: Permite a profesores, mentores y creadores de contenido técnico exportar automáticamente infografías de alta calidad listas para compartir en presentaciones, clases o redes sociales (LinkedIn, Twitter, etc.).

## ✨ Funcionalidades Principales

- **🌍 12 Patrones Estudiados**: Monolítica, Microservicios, Orientada a Eventos, Hexagonal, Serverless, SOA, Peer-to-Peer, etc.
- **⚔️ Modo Versus**: Permite comparar dos arquitecturas cara a cara (ej. Monolito vs Microservicios), mostrando ventajas, desventajas y métricas de complejidad, escalabilidad y costo inicial.
- **🔥 Simulador de Caos**: Inyecta fallos controlados visualmente para enseñar los conceptos de *Single Point of Failure (SPOF)* y *Degradación Parcial*.
- **📦 Motor de Exportación**: Renderiza el DOM y descarga infografías en `.png` (alta resolución) o crea un archivo `.zip` con un carrusel completo (ideal para posts educativos).
- **🌐 Multilingüe y Tematizable**: Contenido disponible en Español y Portugués. Soporta Modo Oscuro/Claro.

## 🚀 Cómo ejecutarlo localmente

Este proyecto no utiliza ningún framework reactivo pesado ni requiere de un entorno Node.js, por lo que su ejecución es instantánea:

1. Clona este repositorio.
2. Abre el archivo `index.html` en tu navegador favorito.
3. ¡Listo! Todo el sistema funcionará perfectamente (el uso de CDN provee Tailwind CSS, html2canvas y JSZip).

## 🌐 Cómo desplegarlo en GitHub Pages

Al ser un sitio web completamente estático, puedes tenerlo online de forma gratuita usando **GitHub Pages**:

1. Sube tu código a un repositorio público en tu cuenta de GitHub.
2. Dirígete a la pestaña **"Settings"** (Configuración) de tu repositorio.
3. En la barra lateral izquierda, selecciona **"Pages"**.
4. En la sección "Build and deployment", bajo **"Branch"**, selecciona `main` (o `master`) y la carpeta `/ (root)`.
5. Haz clic en **Save**. En un par de minutos, GitHub te proveerá una URL pública (ej. `https://tu-usuario.github.io/tu-repositorio/`) donde la plataforma estará disponible en vivo.

## 📂 Estructura del Proyecto

```text
/
├── index.html        # Estructura principal y plantillas visuales
├── css/
│   └── styles.css    # Reglas de renderizado, animaciones neon y estilos de exportación
├── js/
│   ├── data.js       # Base de datos didáctica centralizada (Textos, diccionarios, configs de Chaos)
│   └── app.js        # Lógica de renderizado dinámico, motor de exportación y UI
└── README.md
```

---

*Desarrollado para transformar la manera en que aprendemos y enseñamos ingeniería de software.*