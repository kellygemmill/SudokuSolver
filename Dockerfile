# Build the React application
FROM node:14.15.4-alpine3.12 AS node_builder
ADD . ./
RUN npm install --silent
RUN npm run build

# Final Stage Build
FROM nginx:1.17.2-alpine
COPY --from=node_builder /build /usr/share/nginx/html
EXPOSE 80