const log = require('pino')({
  level: 'info',
  prettyPrint: {
    translateTime: true
  }
})
const fastify = require('fastify')({
  logger: log,
});

const path = require('path');
const AutoLoad = require('fastify-autoload');

fastify.register(AutoLoad, {
  dir: require('path').join(__dirname, 'plugins'),
  options: {}
});


const baseServicesFolder = path.join(__dirname, 'services').replace(/\\/g, '/');
for (const folder of require("glob").sync(baseServicesFolder + "/**/"))
  fastify.register(AutoLoad, {
    dir: folder,
    options: {
      prefix: folder.replace(baseServicesFolder, '')
    }
  });

fastify.ready(function () {
  process.title = fastify.config.process;
  fastify.swagger();
  Log(fastify.printRoutes());
  fastify.listen({ port: fastify.config.web_port, host: fastify.config.web_host });
});