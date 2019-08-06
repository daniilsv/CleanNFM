const fp = require("fastify-plugin");
module.exports = fp(function (fastify, opts, next) {
  fastify.register(require('fastify-helmet'), { hidePoweredBy: { setTo: 'KIT PIDOR' } })
  next()
});
