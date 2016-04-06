module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} member/invoice 获取发票列表
         * @apiName getInvoiceList
         * @apiGroup member
         */
        getInvoiceList: function() {
            return api.get('/member/invoice', null);
        },
        /**
         * @api {post} member/invoice/create 创建发票
         * @apiName createInvoice
         * @apiGroup member
         * @apiParam {String} type
         * @apiParam {String} title_type
         * @apiParam {String} content_type
         * @apiParam {String} company_name
         */
        createInvoice: function(data) {
            return api.post('/member/invoice/create', data);
        },
        /**
         * @api {post} member/invoice/update 创建发票
         * @apiName updateInvoice
         * @apiGroup member
         * @apiParam {Number} id
         * @apiParam {String} type
         * @apiParam {String} title_type
         * @apiParam {String} content_type
         * @apiParam {String} company_name
         */
        updateInvoice: function(data) {
            return api.post('/member/invoice/update', data);
        },
        /**
         * @api {post} member/invoice/delete 创建发票
         * @apiName deleteInvoice
         * @apiGroup member
         * @apiParam {Number} id
         */
        deleteInvoice: function(id) {
            return api.post('/member/invoice/delete', {
                id: id
            });
        }
    };
};
