module.exports = function(options) {
    var api = require('./api')(options);
    return {
        /**
         * @api {get} /member/getDelivery 获取物流费
         * @apiName getDelivery
         * @apiGroup price
         * @apiParam {Number} goods_sku_id sku id.
         * @apiParam {Number} region_id 市或者区ID.
         */
        getDelivery: function(data) {
            return api.get('/price/getDelivery', data);
        },
        /**
         * @api {get} /goods/getSku 商品详情
         * @apiName getGoodDetails
         * @apiGroup data
         */
        getGoodDetails: function(data) {
            return api.get('/goods/getSku', data);
        },
        /**
         * @api {get} /api/goods/getList 获取商品列表
         * @apiName getGoodsList
         * @apiGroup goods
         * @apiParam {Number} category_id 商品类别id.
         * @apiParam {Number} max_price 价格区间的最大价格.
         * @apiParam {Number} min_price 价格区间的最小价格.
         * @apiParam {Number} keyword 搜索的关键词.
         * @apiParam {Number} sort 排序条件，可选值 [price-desc | price-asc | update-desc | update-asc].
         * @apiParam {Number} page 页码
         * @apiParam {Number} page_size 单页的数量大小
         */
        getGoodsList: function (data) {
            return api.get('/goods/getList', data);
        },
        /**
         * @api {get} /api/goods/getCategories 获取商品类目
         * @apiName getGoodsCategories
         * @apiGroup goods
         */
        getGoodsCategories: function () {
            return api.get('/goods/getCategories');
        },
        /**
         * @api {get} /api/getSuggestion 获取关键词相似结果
         * @apiName suggestion
         * @apiGroup goods
         * @apiParam {String} q 关键词
         */
        suggestion: function (data) {
            return api.get('/getSuggestion', data);
        },
        /**
         * @api {get} /api/goods-collocation/getList 获取商品搭配套餐
         * @apiName getCollocation
         * @apiGroup goods
         * @apiParam {Number} goods_id 商品id
         */
        getCollocation: function (data) {
            return api.get('/goods-collocation/getList', data);
        },
        /**
         * @api {get} /api/comment/goods 获取商品评论
         * @apiName getComment
         * @apiGroup goods
         * @apiParam {Number} sku_sn
         * @apiParam {Number} goods_id
         * @apiParam {Number} page
         * @apiParam {Number} size
         */
        getComment: function (data) {
            return api.get('/comment/goods', data);
        },
        /**
         * @api {get} /api/theme-collocation/view 获取商品搭配套餐
         * @apiName getThemeCollocation
         * @apiGroup goods
         * @apiParam {Number} id 主题搭配id
         */
        getThemeCollocation: function (data) {
            return api.get('/theme-collocation/view', data);
        },
        /**
         * @api {get} /api/theme-collocation/getList 获取商品搭配套餐
         * @apiName getThemeList
         * @apiGroup goods
         * @apiParam {Array} tag_ids 标签筛选
         * @apiParam {Number} size 单页列表数
         */
        getThemeList: function (data) {
            return api.get('/theme-collocation/getList', data);
        }

    };
};
