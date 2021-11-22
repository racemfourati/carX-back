This repo is part of the thesis project of RBK
it's the back end part of the carx mobile app 
# You need
- NPM
- Node.js
- NestJS
- Docker

# Start Commands for docker-compose file
Builds, (re)creates, starts, and attaches to containers for a service.  
`docker-compose up`

# Start Commands for Docker
Build your image:  
`docker build <your path> -t <<user>/project-name>`  

Run:  
`docker run -p 8080:5050 <<user>/project-name>`  

For Example:  
`docker build <your path> -t thomas-oliver/nestjs-dockerized`  
`docker run -p 8080:5050 thomas-oliver/nestjs-dockerized`  

Basic Docker Commands:  
List your docker images: `docker images`  
List your running containers: `docker ps`  
List also stopped containers: `docker ps -a`
Kill a running container: `docker kill <id of container from docker ps (first 3 letters)>`, eg `docker kill fea`  
client:
        build: 
            dockerfile: client/Dockerfile
            context: .
        depends_on:
            - api
        environment:s   
