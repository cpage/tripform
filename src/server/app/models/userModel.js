var hasher = require('password-hash');

exports.User = function(data) {
    this._id = data._id || '';
    this.username = data.username || '';
    this.password = data.password || '';
    this.manage = data.manage || false;
    this.p15Id = data.p15Id || '';
    this.p15Team = data.p15Team || '';

    this.validatePassword = function(pw) {

    };

    this.updatePassword = function(pw) {
        this.password = hasher.generate(pw, {iterations:10});
    };
};
