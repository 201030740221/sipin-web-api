module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {post} page/july 7月秒杀活动
         * @apiName activity
         * @apiGroup activity
         */
        july: function(data) {
            return api.get('/page/july', data);
        },
        /**
         * @api {get} /frame/getPageFrame 商品推荐位
         * @apiName getPageFrame
         * @apiGroup activity
         */
        getPageFrame: function(data) {
            return api.get('/frame/getPageFrame', data);
        },
        /**
         * @api {get} /frame/getPageFrame 秒杀商品详情
         * @apiName getPageFrame
         * @apiGroup activity
         */
        flashSaleDetail: function(data){
            return api.get('/flash-sale/show', data);
        },
        /**
         * @api {get} flash-sale/noticeRegister 秒杀提醒
         * @apiName noticeRegister
         * @apiGroup activity
         * @param
         * 参数：
            mobile 手机号
            sid 秒杀id
         */
        noticeRegister: function(data){
            return api.post('/flash-sale/noticeRegister', data);
        }
    };
};
