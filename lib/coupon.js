module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /coupon 获取优惠券列表
         * @apiName getCheckoutCouponList
         * @apiGroup member
         */
        getCheckoutCouponList: function(data) {
            return api.get('/coupon', data);
        },
        /**
         * @api {get} /coupon/mine 获取优惠券列表
         * @apiName getMineCouponList
         * @apiGroup member
         */
       getCouponMine: function(data) {
           return api.get('/coupon/mine', data);
       },
       /**
        * @api {put} /coupon 兑换码激活优惠券
        * @apiName activateCoupon
        * @apiGroup member
        */
      activateCoupon: function(data) {
          return api.put('/coupon', data);
      }
    };
};
