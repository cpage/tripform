var Departure = require('../models/departure');
var beacon = require('../lib/beacon');
var userRepo = require('../lib/users/userRepoMongo');
var _ = require('lodash');
var envConfig = require('../config/environment');

module.exports = function () {


    var getAll = function (req, res) {
        beacon.getDepartures().then(function (departures) {
            res.json(departures);
        });
    };

    var getMyDepartures = function (req, res) {
        beacon.getDepartures().then(function (departures) {
            userRepo.getUsersByTeam(req.user.p15Team).then(function (teamUsers) {
                let teamIds = teamUsers.map(function (t) {
                    return t.p15Id;
                });

                _.remove(departures, function (departure) {
                    let allIds = _.concat(departure.SubmitterContactIDs.GuideContactID, departure.ApproversContactIDs.ApproverContactID);
                    let matchingIds = _.intersection(allIds, teamIds);

                    return matchingIds.length === 0;
                });

                res.json(departures);
            });


        })
            .catch(function (err) {
                console.log('departureController:Error:>>' + err + '<<');
                res.status(500).send(err.message);
            });

    };

    return {
        getAll: getAll,
        getMyDepartures: getMyDepartures

    };
} ();
