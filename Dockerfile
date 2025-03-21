FROM node:22.11.0
WORKDIR /e-commerce-website
COPY package*.json ./
RUN npm install -g @angular/cli
RUN npm install

COPY . .

EXPOSE 4200
# Since containers have their own isolated network, localhost inside the container is not the same as localhost on the host machine.
# 0.0.0.0 makes Angular listen on all network interfaces, including the Docker network
ENTRYPOINT ["ng", "serve", "--host", "0.0.0.0"]
