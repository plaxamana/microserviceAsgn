// Index controller
const index = require('../controllers/index.server.controller');

// Routes module method
module.exports = function(app) {

    app.get('/', (req, res) =>{
        res.render('index.ejs');
    });

    app.post('/api/students', index.render);
}