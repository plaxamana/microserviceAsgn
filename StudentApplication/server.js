// Set the 'NODE_ENV' variable
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

// Load the module dependencies
const configureExpress = require('./config/express');

// Create a new Mongoose connection instance


// Create a new Express application instance
const app = configureExpress();

//Express example to connect with api microservice
var SenecaWeb = require('seneca-web')


var context = app //new Router()
//

var senecaWebConfig = {
    context: context,
    adapter: require('seneca-web-adapter-express'),
    options: { parseBody: false } // so we can use body-parser
}

//var app = Express()
    app
    .use(require('body-parser').json())
    //.use(context)
    .listen(3000)
//
var seneca = require('seneca')()
    .use(SenecaWeb, senecaWebConfig)
    .use('entity')
    .use('api')
    .client({ type: 'tcp', pin: 'role:student' })
