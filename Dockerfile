FROM node:16

WORKDIR /app

COPY . .

RUN --mount=type=secret,id=DB_HOST \
    --mount=type=secret,id=DB_NAME \
    --mount=type=secret,id=DB_PASS \
    --mount=type=secret,id=DB_PORT \
    --mount=type=secret,id=DB_USER \
    --mount=type=secret,id=EXPIRES_IN \
    --mount=type=secret,id=JWT_SECRET \
    export DB_HOST=$(cat /run/secrets/DB_HOST) && \
    export DB_NAME=$(cat /run/secrets/DB_NAME) && \
    export DB_PASS=$(cat /run/secrets/DB_PASS && \
    export DB_PORT=$(cat /run/secrets/DB_PORT && \
    export DB_USER=$(cat /run/secrets/DB_USER) && \
    export EXPIRES_IN=$(cat /run/secrets/EXPIRES_IN) && \
    export JWT_SECRET=$(cat /run/secrets/JWT_SECRET)

RUN printenv 

RUN npm install -g npm@8.5.4

RUN npm install

RUN npm run build

EXPOSE 3000

CMD ["npm", "run", "start:prod"]