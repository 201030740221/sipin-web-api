module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /qrcode 二维码接口
         * @apiName  qrcode
         * @apiGroup tools
         * @apiParam {String} url 页面链接，需url_encode处理
         *     如: var url = 'http://www.link.com/abc'
         *         url = encodeURIComponent(url) //输出： "http%3A%2F%2Fwww.link.com%2Fabc"
         */
        qrcode: function(data) {
            return api.get('/qrcode', data);
        },
        /**
         * @api {get} /external-analytics/goodDetail 订单统计接口
         * @apiName  orderAnalytics
         * @apiGroup tools
         * @apiParam {String} order_no 订单号
         */
        orderAnalytics: function(data) {
            return api.get('/external-analytics/goodDetail', data);
        },
        /**
         * @api {get} /qiniu/uptoken 获取七牛直传图片所需要的token
         * @apiName  getQiniuToken
         * @apiGroup tools
         */
        getQiniuToken: function(data) {
            return api.get('/qiniu/uptoken', data);
        }
    };
};
