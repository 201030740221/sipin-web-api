module.exports = function(options) {
    var api = require('./api')(options);
    return {
        get: function() {
            return api.get('/member/address', {});
        },
        setDefault: function(id) {
            return api.post('/member/address/default', {
                id: id
            });
        },
        create: function(data) {
            return api.post('/member/address/create', data);
        },
        update: function(data) {
            return api.post('/member/address/update', data);
        },
        remove: function(id) {
            return api.post('/member/address/delete', {
                id: id
            });
        },
        checkDelivery: function(data) {
            return api.get('/checkDelivery', data);
        }
    };
};
