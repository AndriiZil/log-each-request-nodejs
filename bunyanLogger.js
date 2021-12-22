const bunyan = require('bunyan');

const reqSerializer = req => {
    return {
        method: req.method,
        url: req.url
    };
}

const resSerializer = res => {
    return {
        statusCode: res.statusCode
    };
}

const log = bunyan.createLogger({
    name: 'request and response',
    serializers: {
        formattedRequest: reqSerializer,
        formattedResponse: resSerializer,
    },
    streams: [{
        path: './logs.log',
    }]
});

module.exports = { log };
