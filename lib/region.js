module.exports = function(options) {
    var api = require('./api')(options);
    return {
        get: function() {
            return api.get('/region/region');
        },
        getIp: function() {
            return api.get('/region/current');
        }
    };
};
