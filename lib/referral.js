module.exports = function(options) {
    var api = require('./api')(options);
    return {
    	/**
         * @api {get} /weixin/js/config 微信JS配置
         * @apiName wechatCongig
         * @apiGroup share
         * @apiParam {String} url 页面链接，需url_encode处理，如: http%3A%2F%2Ftest.com.
         */
        getWeixinConfig: function(data) {
            return api.get('/weixin/js/config', data);
        },
        /**
         * @api {get} /referral/log 获取推荐列表
         * @apiName wechatCongig
         * @apiGroup share
         * @apiParam {number} page 当前页.
         * @apiParam {number} size 分页大小.
         */
        getReferralLog: function(data) {
            return api.get('/referral/log', data);
        },
        getShareLink: function() {
            return api.get('/referral/link');
        }
    };
};
