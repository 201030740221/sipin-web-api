module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {post} order/createOrder 创建订单
         * @apiName createOrder
         * @apiGroup order
         * @apiParam {Number} member_address_id 市或者区ID.
         * @apiParam {String} reserve_delivery_time 配送时间.
         * @apiParam {String} reserve_installation_time 安装时间.
         * @apiParam {Number} invoice_id 发票ID.
         * @apiParam {String} note 备注.
         * @apiParam {Number} coupon_ids 优惠券ID.
         */
        submit: function(data) {
            return api.post('/order/createOrder', data);
        },
        /**
         * @api {get} price/getSettlement 获取价格
         * @apiName getCheckoutPrice
         * @apiGroup price
         * @apiParam {Number} region_id 市或者区ID.
         * @apiParam {Array} item_keys
         */
        getCheckoutPrice: function(data) {
            return api.get('/price/getSettlement', data);
        },
        /**
         * @api {get} cart/predictDelivery 获取价格
         * @apiName getGredictDelivery
         * @apiGroup checkout
         * @apiParam {Number} region_id 市或者区ID.
         * @apiParam {Array} item_keys
         */
        getPredictDelivery: function(data) {
            return api.get('/cart/predictDelivery', data);
        },
        /**
         * @api {get} 从后端获取微信支付接口所需的参数
         * @apiName getWechatPayParams
         * @apiGroup checkout
         * @apiParam {Number} order_id 订单ID.
         */
        getWechatPayParams: function (data) {
            return api.get('/weixin/js/pay', data)
        },
        /**
         * @api {get} 从后端获取订单支付状态
         * @apiName getOrderStatus
         * @apiGroup checkout
         * @apiParam {Number} order_id 订单ID.
         */
        getOrderStatus: function (data) {
            return api.get('/order/getOrderStatus', data)
        }
    };
};
