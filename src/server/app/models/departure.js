var uuid = require('node-uuid');

module.exports = function (data) {
    if (!data) {
        data = {};
    }


    this.departureId = data.departureId || uuid.v4();
    this.depatureCode = data.depatureCode || '';
    this.tripReprotFilename = data.tripReprotFilename || '';
    this.tripSubType = data.tripSubType || '';
    this.tripSupportLevel = data.tripSupportLevel || '';
    this.startDate = data.startDate || new Date();
    this.endDate = data.endDate || new Date();
    this.tripName = data.tripName || '';
    this.departureName = data.departureName || '';
    this.bookedGuestCount = data.bookedGuestCount || 0;
    this.approvedTripReportDL = data.approvedTripReportDL || '';
    this.submitCompanyEvalAsGuestId = data.submitCompanyEvalAsGuestId || '';
    this.tripManager = data.tripManager || '';
    this.tripPlanner = data.tripPlanner || '';

    this.showPlanningFields = function () {
        return (this.tripSubType === "Private" && tripSupportLevel !== "Self-Guided") || tripSupportLevel === "Locally-Supported";
    };
};