var webapi,assign;

assign = require('object-assign');
webapi = function(options){
    return assign(
        {
            member: require('./lib/member')(options),
            goods: require('./lib/goods')(options),
            cart: require('./lib/cart')(options),
            checkout: require('./lib/checkout')(options),
            address: require('./lib/address')(options),
            region: require('./lib/region')(options),
            invoice: require('./lib/invoice')(options),
            order: require('./lib/order')(options),
            coupon: require('./lib/coupon')(options),
            referral: require('./lib/referral')(options),
            tools: require('./lib/tools')(options),
            lottery: require('./lib/lottery')(options),
            point: require('./lib/point')(options),
            activity: require('./lib/activity')(options),
            comment: require('./lib/comment')(options)
        }
    );
};

module.exports = webapi;
