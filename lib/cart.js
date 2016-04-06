module.exports = function(options) {
    var api = require('./api')(options);
    return {
        get: function() {
            return api.get('/cart');
        },
        add: function(data) {
            return api.post('/cart/add', data);
        },
        update: function(data) {
            return api.put('/cart/update', data);
        },
        remove: function(data) {
            return api.remove('/cart/delete', data);
        },
        empty: function(data) {
            return api.post('/cart/empty', data);
        },
        select: function(data) {
            return api.put('/cart/select', data);
        },
        checkout: function(data) {
            return api.post('/cart/checkout', data);
        },
        /**
         * @api {post} cart/quickbuy 立即购买
         * @apiName quickbuy
         * @apiGroup cart
         * @apiParam {Number} is_multiple
         * @apiParam {Number} quantity
         * @apiParam {Number} item id.
         * @apiParam {Number} region_id 市或者区ID.
         */
        quickbuy: function(data) {
            return api.post('/cart/quickbuy', data);
        },
        /**
         * @api {post} cart/exchange 立即购买
         * @apiName exchange
         * @apiGroup cart
         * @apiParam {Number} is_multiple
         * @apiParam {Number} quantity
         * @apiParam {Number} item id.
         * @apiParam {Number} region_id 市或者区ID.
         */
        exchange: function(data) {
            return api.post('/cart/exchange', data);
        },
    };
};
