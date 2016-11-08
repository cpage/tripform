module.exports = function(data) {
    this.id = data.id || '';
    this.username = data.username || '';
    this.manage = data.manage || false;
    this.p15Id = data.p15Id || '';
    this.p15Team = data.p15Team || '';
};
