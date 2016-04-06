module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /member/getPointList 获取积分明细列表
         * @apiName getPointList
         * @apiGroup member
         */
        getPointList: function(data) {
            return api.get('/member/getPointList', data);
        },
        /**
         * @api {get} /member/getPointStatistics 获取总积分可用积分
         * @apiName getPointStatistics
         * @apiGroup member
         */
       getPointStatistics: function(data) {
           return api.get('/member/getPointStatistics', data);
       }
    };
};
