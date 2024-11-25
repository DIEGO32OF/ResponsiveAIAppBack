# TodoList App
Este proyecto esta construido con la version 18.19.1 de Node, se configuro Typescript como lenguaje base y estas son algunas de las librerias utiliza:

**Cors**
- Se creo una lista blanca de posibles sitios que pueden consumir las apis de esta aplicacion
- Ademas se pueden configurar otras caracteristicas como los metodos de acceso y tipos de archivos que se reciben

**Helmet**
- La funcion principal de esta libreria es NO exponer cabeceras sensibles en los headers que pueden se utilizadas para ataques

**Morgan**
- Es un logger donde podemos incluso crear querys si se busca algo especifico

**Express**
- es un framework que corre bajo Node a mi gustao es el mas popular por eso se incluyo en la app pero a mi gusto estaria mejor Nest.js

**Mongoose**
- Controlador para conectarse a MongoDB e interactuar con la base de datos

**Type ORM**
- Tambien se incluyo un ORM para bases de datos SQL solo como ejemplo

## Run proyect dev
- para ejecutar el proyecto:
``npm run:dev ``

## Docker
- se incluyo en el proyecto un docker file para hacer un deploy automatizado

