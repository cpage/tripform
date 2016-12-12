var envConfig = require('../../config/environment');
var proxyConfig = require('../../config/proxy');
var request = require('request-promise');
var logger = require('winston');
var xml2js = require('xml2js');

module.exports = function () {
    var beaconConfig = envConfig.beacon[process.env.NODE_ENV];

    var baseRequest = request.defaults({
        proxy: proxyConfig.server,
        strictSSL: false
    });

    var getDepartures = function () {
        logger.info('process env: ' + process.env.NODE_ENV);
        var getUrl = beaconConfig.baseUrl + beaconConfig.getDepartures;


        return baseRequest.get(getUrl, {
            'auth': {
                'user': beaconConfig.username,
                'password': beaconConfig.password,
                'sendImmediately': true
            }
        })
            .then(function (body) {
                // logger.info('Response code: ' + response.statusCode);
                // if (response.statusCode !== 200)
                //     reject(new Error('Server responded with statusCode ' + response.statusCode));
                var parser = new xml2js.Parser({
                    explicitArray: false,
                    explicitRoot: false,
                    mergeAttrs: true
                });


                return new Promise(function (resolve, reject) {
                    parser.parseString('<Departures>' + body + '</Departures>', function (err, result) {

                        if (err) {
                            logger.error('error parsing departure xml' + err);
                            reject(err);
                        } else {
                            logger.info('finished parsing xml, result: ' + result);
                            resolve(result.Departure);
                        }
                    });
                });
            })
            .error(function (err) {
                logger.error('ERROR: ' + err);
                throw err;
            });


    }

    return {
        getDepartures: getDepartures
    };
} ();