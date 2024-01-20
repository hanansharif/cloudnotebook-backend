FROM node:21-alpine3.18

COPY package.json /app/
COPY index.js /app/
COPY db.js /app/
COPY routes /app/
COPY models /app/
COPY middleware /app/
COPY .gitignore /app/

WORKDIR /app/

RUN npm install 

CMD ["node","index.js"]
