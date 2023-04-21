# each direction is a layer in the dockerfile

# base image
# official parent pulled from dockerhub, which stores official images to build up out application from 
FROM node:14-alpine

# app source code within the docker container
# any subsequent commands will start form this work directory
WORKDIR /app

# Cache package and package lock files
# first argument: what you want to copy
# second argument: where you want to copy to
COPY package*.json ./

# command to run which runs in the workding directory
RUN npm install

# previous layers will be pulled from the cache every time unless we change package json
# any changes to the code will rebuild the layers below

# copy everything within the app
COPY . .

# Run the seed command
RUN npm run build

# tells Docker that a container listens for traffic on the specified port.
# port 80 is the default port of the HTTP web traffic whcih means the container can recieve incoming traffic from that port outide of the container from the web browser
EXPOSE 80

# reach app using "http://yourdomain.com:80" specifying the port at the end of the domain

# Start the application
CMD ["npm", "run", "start"]
