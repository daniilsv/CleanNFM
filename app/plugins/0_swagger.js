const config = require("../configs");
const fp = require("fastify-plugin");
module.exports = fp(function (fastify, opts, next) {
  fastify.register(require('fastify-swagger'), {
    routePrefix: '/documentation',
    exposeRoute: true,
    swagger: {
      info: {
        title: config.title,
        description: config.description,
        version: config.version,
      },
      externalDocs: {
        url: 'https://itis.team',
        description: 'Find more info here'
      },
      host: config.web_host + ":" + config.web_port.toString(),
      schemes: [config.web_scheme],
      consumes: ['application/json'],
      produces: ['application/json'],
      tags: [
        { name: 'code', description: 'Code related end-points' }
      ],
      securityDefinitions: {
        apiKey: {
          type: 'apiKey',
          name: 'apiKey',
          in: 'header'
        },
      }
    }
  });
  next();
});
