//var ObjectID = require('mongodb').ObjectID;
var config = require('../../config');

exports.getAll = function() {
    return getTripReportConfigCollection().find({}).toArray();
}

exports.create = function (tripReportConfig) {
    return getTripReportConfigCollection().insertOne(tripReportConfig);
};

exports.update = function (tripReportConfig) {
    //tripReportConfig._id = new ObjectID(tripReportConfig._id);
    return getTripReportConfigCollection().updateOne({ _id: tripReportConfig._id },
        {
            $set: tripReportConfig
        });

};

exports.delete = function (id) {
    return getTripReportConfigCollection().deleteOne({ _id: parseInt(id) });
};

function getTripReportConfigCollection() {
    return require('../../db').getCollection('tripReportConfig');
}