# Connect 4

This repository contains an implementation of the classic [Connect 4](https://en.wikipedia.org/wiki/Connect_Four) game as a full-stack web application. It uses ReactJS for the frontend and Spring Boot for the backend. PostgreSQL is used as the database. The entire game application has been containerized using Docker with Docker Compose.

![app-demo.gif](app-demo.gif)

## Requirements

* **Docker**

Docker is an open platform for developing, shipping, and running applications.

The instructions to install Docker is provided [here](https://docs.docker.com/get-docker/).

* **Docker Compose**

Docker Compose is a tool for defining and running multi-container applications.

The instructions to install Docker Compose is provided [here](https://docs.docker.com/compose/install/).

## Instructions

* In the root directory of the project, open a terminal and run the following command:
```
docker compose up --detach
```

* Open a web browser and go to [http://localhost:3000](http://localhost:3000) to access the running game application.
