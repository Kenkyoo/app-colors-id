App Colors ID

App Colors ID es una aplicación web que te permite buscar cualquier color del mundo, ya sea por su código hexadecimal o por su nombre. Combina un servidor Express con un frontend interactivo para ofrecer una experiencia rápida y visualmente atractiva.
Funcionalidades

    Búsqueda de colores: Ingresa el nombre de un color (por ejemplo, "Red") o su código hexadecimal (por ejemplo, "#ff0000") para obtener detalles como el nombre y el código del color.
    Actualización dinámica: El fondo y los elementos de la página cambian para reflejar el color buscado.
    Animaciones: Animaciones visuales al mostrar resultados.
    Portapapeles: Copia fácilmente el código hexadecimal del color buscado con un botón.

Tecnologías utilizadas
Backend

    Node.js con Express: Servidor que lee un archivo JSON con datos de colores y los sirve como API.
    CORS: Permite el acceso a la API desde el frontend.

Frontend

    Parcel: Empaquetador para simplificar el desarrollo.
    TailwindCSS y daisyUI: Para el diseño y la estilización.
    jQuery: Para manipulación DOM.
    Axios: Para realizar solicitudes HTTP.
    Lodash: Para manipulación de datos.
    Animate.css: Para animaciones.
    ClipboardJS: Para copiar al portapapeles.


Uso

    Escribe el nombre o código hexadecimal de un color en el campo de búsqueda.
    Presiona el botón "Buscar".
    La página mostrará el nombre y el código del color, actualizando el fondo y estilización para reflejarlo.
    Usa el botón "Copiar" para copiar el código hexadecimal al portapapeles.

Estructura del proyecto

   app-colors-id/
├── server/
│   ├── index.js          # Servidor Express
│   ├── colornames.json   # Archivo con datos de colores
├── src/
│   ├── app.js            # Lógica del frontend
│   ├── index.html        # Página principal
├── package.json          # Configuración del proyecto
├── tailwind.config.js    # Configuración de TailwindCSS


Contribuciones

Si deseas contribuir al proyecto, no dudes en abrir un pull request o enviar sugerencias mediante issues.
Licencia

Este proyecto se encuentra bajo la licencia MIT.
