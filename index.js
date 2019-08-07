const config = require("./configs");
process.title = config.process;

const fastify = require('fastify/fastify')({
  logger: {
    prettyPrint: true,
  },
  ignoreTrailingSlash: true
});

const AutoLoad = require('fastify-autoload/fastify-autoload');

fastify.register(AutoLoad, {
  dir: require('path').join(__dirname, 'plugins'),
  options: {}
});

fastify.register(AutoLoad, {
  dir: require('path').join(__dirname, 'services'),
  options: {}
});

fastify.listen({port: config.web_port, host: config.web_host}, function () {
  fastify.swagger();
});

fastify.ready(() => {
  log.i(fastify.printRoutes());
});