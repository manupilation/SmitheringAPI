FROM node:14-alpine

WORKDIR /api

COPY package*.json ./

RUN npm install

COPY . .

COPY prisma ./prisma

RUN npm install prisma

RUN npx prisma generate

EXPOSE 3000

CMD ["npm", "run", "db:start"]

RUN npm cache clean --force

RUN adduser -D dollynhe
USER dollynhe
