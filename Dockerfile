FROM cypress/base:18.15.0
WORKDIR /tests

COPY ./package.json .
COPY ./cypress.config.js .
COPY ./cypress ./cypress
COPY ./libs ./libs

RUN npm i

ENTRYPOINT ["npx", "cypress", "run"]