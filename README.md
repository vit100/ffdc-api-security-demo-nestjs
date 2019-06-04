<p align="center">
  <a href="https://developer.fusionfabric.cloud/" target="blank"><img src="https://www.finastra.com/themes/custom/kickstart/logo.png" width="120" alt="Finastra Logo" /></a>
</p>



## Description

[Finastra fusion](https://developer.fusionfabric.cloud) security demo implemented in [Nestjs](https://nestjs.com/).

Same functionality implemented in NodeJS pure JavaScript is [here](https://github.com/vit100/dh-serviceProvider-api).

Web API Application protected with JWT token and providing B2C, B2B, B2E flows. Data is mocked.


## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Running in docker. Test

$ docker build -t ffdc-api-security .
$ docker run --rm -it -e PORT=100 -p 100:100/tcp ffdc-api-security:latest

open browser and point to http://localhost:100

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Stay in touch

- Website - [https://developer.fusionfabric.cloud](https://developer.fusionfabric.cloud)
- Twitter - [@FinastraFS](https://twitter.com/FinastraFS)
- Twitter - [@basilio100](https://twitter.com/basilio100)

