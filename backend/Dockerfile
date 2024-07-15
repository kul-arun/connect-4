FROM eclipse-temurin:21-alpine AS build
WORKDIR /tmp
COPY . .
RUN ./mvnw clean package -DskipTests


FROM eclipse-temurin:21-alpine
COPY --from=build /tmp/target/*.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","app.jar"]