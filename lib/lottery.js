module.exports = function (options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /lottery/getResult
         * @apiName 获取抽奖结果
         * @apiGroup lottery
         * @return {Number} resultId 奖品ID
         * @return {Number} count  抽奖剩余次数
         * @return {String} prizeType 奖品类型（积分、优惠券）
         * @return {String} prizeName 奖品名称
         * @return {boolean} isAddressRequired 是否需要填写地址（true or false）
         */
        getResult: function() {
            return api.get('/lottery/getResult');
        },
        /**
         * @api {get} /lottery/sendContactInfo
         * @apiName sendContactInfo
         * @apiGroup lottery
         * @apiParam {String} name 用户名
         * @apiParam {String} phone 联系电话
         * @apiParam {String} address 地址
         */
        sendContactInfo: function(data) {
            return api.post('/lottery/sendContactInfo', data);
        },
        /**
         * @api {get} /lottery/prize
         * @apiName getPrizeList
         * @apiGroup lottery
         * @apiParam {Number} lottery_id 活动id
         */
        getPrizeList: function(id) {
            data = {
                lottery_id: id
            }
            return api.get('/lottery/prize', data);
        },
        /**
         * @api {get} /lottery/eligibility
         * @apiName getEligibility
         * @apiGroup lottery
         * @apiParam {Number} lottery_id 活动id
         */
        getEligibility: function(id) {
            data = {
                lottery_id: id
            }
            return api.get('/lottery/eligibility', data);
        },
        /**
         * @api {get} /lottery/result/public
         * @apiName getPublicResult
         * @apiGroup lottery
         * @apiParam {Number} lottery_id 活动id
         */
        getPublicResult: function(id, size) {
            data = {
                lottery_id: id,
                size: size || 20
            }
            return api.get('/lottery/result/public', data);
        },
        /**
         * @api {get} /lottery/result/mine
         * @apiName getMyResult
         * @apiGroup lottery
         * @apiParam {Number} lottery_id 活动id
         */
        getMyResult: function(id, size) {
            data = {
                lottery_id: id,
                size: size || 50
            }
            return api.get('/lottery/result/mine', data);
        },
        /**
         * @api {get} /getLottery/:id
         * @apiName getLottery
         * @apiGroup lottery
         */
        getLottery: function(id) {
            return api.get('/lottery/'+id);
        },
        /**
         * @api {post} /lottery/result/draw
         * @apiName draw
         * @apiGroup lottery
         * @apiParam {Number} lottery_id 活动id
         */
        draw: function(id) {
            data = {
                lottery_id: id
            }
            return api.post('/lottery/draw', data);
        },
        /**
         * @api {patch} /lottery/result/:id
         * @apiName setAddress
         * @apiGroup lottery
         * @apiParam {Number} result_id 中奖记录id
         * @apiParam {Number} address_id 地址id
         */
        setAddress: function(result_id, address_id) {
            data = {
                address_id: address_id
            }
            return api.patch('/lottery/result/'+result_id, data);
        },
        /**
         * @api {post} /lottery/attendance
         * @apiName setAttendance
         * @apiGroup lottery
         * @apiParam {Number} lottery_id 活动id
         */
        setAttendance: function(id, type) {
            data = {
                lottery_id: id,
                type: type
            }
            return api.post('/lottery/attendance', data);
        },
        /**
         * @api {get} /lottery/attendance/status
         * @apiName checkAttendance
         * @apiGroup lottery
         * @apiParam {Number} lottery_id 活动id
         */
        checkAttendance: function(id, type) {
            data = {
                lottery_id: id,
                type: type
            }
            return api.get('/lottery/attendance/status', data);
        }
    }
};
