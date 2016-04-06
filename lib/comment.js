module.exports = function(options) {
    var api = require('./api')(options);
    return {
        getList: function(data) {
            return api.get('/comment/goods', data);
        },
        add: function(data) {
            return api.post('/comment/goods', data);
        },
        getTag: function (data) {
            return api.get('/comment/goods/tag', data);
        },
        remove: function(data) {
        }
    };
};
