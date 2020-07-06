// Initializes the `test-service` service on path `/test-service`
const { TestService } = require('./test-service.class');
const createModel = require('../../models/test-service.model');
const hooks = require('./test-service.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/test-service', new TestService(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('test-service');

  service.hooks(hooks);
};
