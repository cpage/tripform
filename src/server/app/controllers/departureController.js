var Departure = require('../models/departure');
var beacon = require('../lib/beacon');

module.exports = function () {


    var getAll = function (req, res) {
        beacon.getDepartures().then(function (data) {

            // var departureList = [
            //     new Departure({
            //         departureName: 'dep 1'
            //     }),
            //     new Departure({
            //         departureName: 'dep 2'
            //     }),
            //     new Departure({
            //         departureName: 'dep 3'
            //     })
            // ];

            //res.json(departureList)
            res.json(data);

        })
        .catch(function(err) {
            console.log('departureController:Error:>>' + err + '<<');
            res.status(500).send(err.message);
        });
    };

    return {
        getAll: getAll
    };
} ();
