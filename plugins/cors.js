const fp = require("fastify-plugin/fastify-plugin");
module.exports = fp(function (fastify, opts, next) {
    fastify.register(require('fastify-cors/index'), {});
  next()
});
