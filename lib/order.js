module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /order/getOrderList 获取订单列表
         * @apiName getOrderList
         * @apiGroup order
         * @apiParam {Number} [status_id] 状态ID
         * 1：等待付款
         * 2：付款成功
         * 3：等待发货
         * 4：等待收货
         * 5：已完成
         * 6：已取消
         */
        getOrderList: function(data) {
            return api.get('/order/getOrderList', data);
        },
        /**
         * @api {get} /order/getOrderDetail 获取订单详情
         * @apiName getOrderDetail
         * @apiGroup order
         * @apiParam {Number} order_id order_id
         */
        getOrderDetail: function(data) {
            return api.get('/order/getOrderDetail', data);
        },
        /**
         * @api {get} /order/confirmReceiving 确认收货
         * @apiName confirmReceiving
         * @apiGroup order
         */
        confirmReceiving: function(data) {
            return api.post('/order/confirmReceiving', data);
        },
        /**
         * @api {get} /order/cancelOrder 取消订单
         * @apiName cancelOrder
         * @apiGroup order
         */
         cancelOrder: function(data) {
            return api.post('/order/cancelOrder', data);
        },
        /**
         * @api {get} /order/cancelOrder 删除订单
         * @apiName cancelOrder
         * @apiGroup order
         * @apiParam {Number} order_id order_id
         */
         deleteOrder: function(data) {
            return api.post('/order/deleteOrder', data);
        },
        /**
         * @api {get} /order/getOrderStatistics 获取订单状态
         * @apiName getOrderStatistics
         * @apiGroup order
         */
         getOrderStatistics: function(data) {
            return api.get('/order/getOrderStatistics', data);
        },
    };
};
