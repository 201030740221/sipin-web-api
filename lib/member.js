module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /member/getMemberInformation
         * @apiName 获取登录用户的信息
         * @apiGroup member
         * @return {member} 用户信息
         */
        getInfo: function() {
            return api.get('/member/getMemberInformation');
        },
        /**
         * @api {get} /member/checkCaptcha 验证图形验证码
         * @apiName checkCaptcha
         * @apiGroup member
         * @apiParam {String} captcha 图形验证码.
         */
        checkCaptcha: function(data) {
            return api.get('/member/checkCaptcha', data);
        },
        /**
         * @api {get} /member/checkEmail 检测邮箱是否存在
         * @apiName checkEmail
         * @apiGroup member
         * @apiParam {String} email 邮箱地址.
         */
        checkEmail: function(data) {
            return api.get('/member/checkEmail', data);
        },
        /**
         * @api {get} /member/checkMobile 检测手机号码是否存在
         * @apiName checkMobile
         * @apiGroup member
         * @apiParam {String} mobile 手机号码.
         */
        checkMobile: function(data) {
            return api.get('/member/checkMobile', data);
        },
        /**
         * @api {get} /member/checkName 用户名是否存在
         * @apiName checkName
         * @apiGroup member
         * @apiParam {String} name 用户名字.
         */
        checkName: function(data) {
            return api.get('/member/checkName', data);
        },
        /**
         * @api {get} /member/checkSms 验证手机验证码
         * @apiName checkSms
         * @apiGroup member
         * @apiParam {String} sms_code 手机验证码.
         * @apiParam {mobile} mobile 手机.
         * @apiParam {type} type 类型. 见 sendSms接口
         * @apiParamExample {json} Request-Example:
         *     {
         *       "sms_code": 471122,
         *       "mobile": 23232
         *       "type": 1
         *     }
         */
        checkSms: function(data) {
            return api.get('/member/checkSms', data);
        },
        /**
         * @api {get} /member/changeName 修改用户名
         * @apiName changeName
         * @apiGroup member
         * @apiParam {String} name 用户名.
         */
        changeName: function(data) {
            return api.post('/member/changeName', data);
        },
        /**
         * @api {get} /member/changeMobile 修改手机号码
         * @apiName changeMobile
         * @apiGroup member
         * @apiParam {Number} mobile 手机号码.
         * @apiParam {String} sms_code 手机验证码.
         */
        changeMobile: function(data) {
            return api.post('/member/changeMobile', data);
        },
        /**
         * @api {post} /member/changeEmail 修改电子邮箱
         * @apiName changeEmail
         * @apiGroup member
         * @apiParam {String} email 邮箱地址.
         * @apiParam {Number} member_id 用户ID.
         */
        changeEmail: function(data) {
            return api.post('/member/changeEmail', data);
        },
        /**
         * @api {post} /member/changePassword 修改密码
         * @apiName changePassword
         * @apiGroup member
         * @apiParam {String} old_password 原密码.
         * @apiParam {String} password 新密码.
         */
        changePassword: function(data) {
            return api.post('/member/changePassword', data);
        },
        /**
         * @api {get} /member/sendMail 发送电子邮件
         * @apiName sendMail
         * @apiGroup member
         * @apiParam {String} email 邮箱地址.
         * @apiParam {String} type  类型.
         */
        sendMail: function(data) {
            return api.post('/member/sendMail', data);
        },
        /**
         * @api {get} /member/checkMobile 发送手机验证码
         * @apiName sendSms
         * @apiGroup member
         * @apiParam {String} mobile 手机号码.
         * @apiParam {String} captcha 图形验证码.
         * @apiParam {type} type 类型. 0注册短信 1修改密码 2重置手机 3通用验证码 4找回密码 5修改手机号码 6验证手机号码 7送货提醒 8换货申请受理 9换货申请通过 10收到客户售后商品 11已安排换货  12退货申请受理  13退货申请通过  14收到客户退货商品 15客服电话用户未接听  16付款成功  17物流提醒   18 优惠劵提醒
         */
        sendSms: function(data) {
            return api.post('/member/sendSms', data);
        },
        /**
         * @api {get} /member/checkMobile 发送手机验证码
         * @apiName sendSms
         * @apiGroup member
         * @apiParam {String} mobile 手机号码.
         * @apiParam {type} type 类型. 0注册短信 1修改密码 2重置手机 3通用验证码 4找回密码 5修改手机号码 6验证手机号码 7送货提醒 8换货申请受理 9换货申请通过 10收到客户售后商品 11已安排换货  12退货申请受理  13退货申请通过  14收到客户退货商品 15客服电话用户未接听  16付款成功  17物流提醒   18 优惠劵提醒
         */
        sendSms2: function(data) {
            return api.post('/sendSms', data);
        },
        /**
         * @api {post} /member/login 用户登录
         * @apiName login
         * @apiGroup member
         * @apiParam {String} account 帐号.
         * @apiParam {String} password 密码.
         * @apiParam {String} remember 记住用户名.
         */
        login: function(data) {
            return api.post('/member/login', data);
        },
        /**
         * @api {get} /member/logout 用户退出登录
         * @apiName logout
         * @apiGroup member
         */
         logout: function(data) {
            return api.post('/member/logout', data);
        },
        /**
         * @api {post} /member/register 用户注册
         * @apiName register
         * @apiGroup member
         * @apiParam {String} account 帐号.
         * @apiParam {String} password 密码.
         * @apiParam {String} password_confirmation 重复密码.
         * @apiParam {String} sms_code 短信验证码.
         */
        register: function(data) {
            return api.post('/member/register', data);
        },
        /**
         * @api {post} /member/resetPassword 用户注册
         * @apiName resetPassword
         * @apiGroup member
         * @apiParam {String} account 帐号.
         * @apiParam {String} password 密码.
         * @apiParam {String} password_confirmation 重复密码.
         * @apiParam {String} sms_code 短信验证码.
         */
        resetPassword: function(data) {
            return api.post('/member/resetPassword', data);
        },
        /**
         * @api {get} /member/favorite 收藏夹列表
         * @apiName favorite
         * @apiGroup member
         * @apiParam {Number} member_id 会员.
         * @apiParam {Number} page 页数.
         */
        favorite: function(data) {
            return api.get('/member/favorite', data);
        },
        /**
         * @api {post} /member/favorite/delete 删除收藏
         * @apiName favorite-delete
         * @apiGroup member
         * @apiParam {Number} member_id 会员.
         * @apiParam {Number} goods_ids 商品ID.
         */
        favoriteDelete: function(data) {
            return api.post('/member/favorite/delete', data);
        },
        /**
         * @api {post} /api/member/favorite/add 添加收藏
         * @apiName addGoodsFavorite
         * @apiGroup goods
         */
        favoriteAdd: function (data) {
            return api.post('/member/favorite/add',data);
        },
        /**
         * @api {get} /member/hello 获取登录后的用户信息
         * @apiName hello
         * @apiGroup member
         */
        hello: function(data) {
            return api.get('/member/hello', data);
        },
        /**
         * @api {get} /member/sendMailWithAccount 重置密码邮箱
         * @apiName sendMailWithAccount
         * @apiGroup member
         */
        sendMailWithAccount: function(data) {
            return api.post('/member/sendMailWithAccount', data);
        }
    };
};
