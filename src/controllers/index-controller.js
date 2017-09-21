'use strict';

exports.get = ('/', (req, res, next) => {
    res.status(201).send({
        titulo: 'API - GET INDEX',
        version: '0.0.1'
    });
});