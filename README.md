# Nest.js Demo

## Description

Please use watch mode spin up the service, to view the Swagger docs, here is the link: <http://localhost:3000/docs/>

![image](https://user-images.githubusercontent.com/3191573/123893201-8da64680-d98e-11eb-85ee-dd5fe36e4d1c.png)

## Project structure

``` sh
.
├── src # source code of typescript
│   ├── domains # all the routes separated based on DDD [domain-driven design]
│   │   └── block
│   │   └── ...
│   ├── configs # configurations of the project
│   ├── decorators # nest decorators (https://docs.nestjs.com/openapi/decorators)
│   ├── filters # nest filters (https://docs.nestjs.com/microservices/exception-filters)
│   ├── guards # nest guards (https://docs.nestjs.com/microservices/guards)
│   ├── libs # common libraries (ideally, they should be separated npm packages)
│   └── middlewares # nest middlewares (https://docs.nestjs.com/middleware)
├── test # test codes
├── Dockerfile
├── README.md
├── makefile
├── nest-cli.json
├── package.json
├── tsconfig.build.json
├── tsconfig.json
└── yarn.lock
```

## Installation

```bash
yarn
```

## Running the app

```bash
# development
yarn start

# watch mode
yarn start:dev

# production mode
yarn start:prod
```

## Test

```bash
# unit tests
yarn test

# e2e tests
yarn test:e2e

# test coverage
yarn test:cov
```
