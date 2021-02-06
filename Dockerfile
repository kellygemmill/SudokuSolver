# Build the Spring Boot API
FROM maven:3.6.1-jdk-8-alpine AS builder
ADD . /app
WORKDIR /app
RUN mvn clean package

# Final Stage Build
FROM openjdk:8-jre-alpine3.9
COPY --from=builder /app/target/sudokusolverreact-0.0.1-SNAPSHOT.jar /demo.jar
CMD ["java", "-jar", "/demo.jar"]