# ResponsiveAI App
This project is built with Node version 18.19.1, Typescript was configured as the base language and these are some of the libraries it uses:

**Cors**
- A white list of possible sites that can consume the APIs of this application was created
- In addition, other characteristics such as access methods and types of files received can be configured

**Helmet**
- The main function of this library is NOT to expose sensitive headers in the headers that can be used for attacks

**Morgan**
- It is a logger where we can even create queries if we are looking for something specific

**Express**
- It is a framework that runs under Node, in my opinion it is the most popular, that is why it was included in the app, but in my opinion Nest.js would be better

**Mongoose**
- Controller to connect to MongoDB and interact with the database

**Type ORM**
- An ORM for databases was also included SQL data only as an example

## Run proyect dev
- to run the project:
``npm run:dev ``

## Docker
- a docker file was included in the project to do an automated deployment

