const fp = require("fastify-plugin/fastify-plugin");
module.exports = fp(function (fastify, opts, next) {
    fastify.register(require('fastify-metrics/dist/index'), {endpoint: '/metrics'});
  next()
});
