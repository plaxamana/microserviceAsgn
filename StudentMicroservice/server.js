require('seneca')()

    .use('product')
    .use('entity')
    .use('mongo-store', {
        name: 'students',  
        host: '127.0.0.1', //localhost
        port: 30401
        })
    .listen({ type: 'tcp', pin: 'role:student' })
