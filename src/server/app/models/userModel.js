var hasher = require('password-hash');

exports.User = function (data) {
    this._id = data._id;
    this.username = data.username || '';
    this.password = data.password || '';
    this.p15Id = data.p15Id || '';
    this.p15Team = data.p15Team || '';
    this.role = data.role || 'User';
    
    this.validatePassword = function (pw) {
        return hasher.verify(pw, this.password);
    };

    this.updatePassword = function (pw) {
        if (!pw) return;

        if (hasher.isHashed(pw)) {
            this.password = pw;
        }
        else {
            this.password = hasher.generate(pw, { iterations: 10 });
        }
    };
};
