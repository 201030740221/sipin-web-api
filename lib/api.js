var api, reqwest;

reqwest = require('reqwest');

api = function(method, url, data, options) {
    var config = {
        method: method || 'get',
        url: url,
        data: data || null,
        headers:{
            "X-Requested-With": 'XMLHttpRequest'
        },
        success: function(res){
            if(options.success)
                options.success.call(this,{
                    data: res,
                    url: options.baseUrl,
                    method: method
                });
        }
    }

    if (options.crossDomain){
        config.crossOrigin = true;
        config.withCredentials = true;
    }

    return reqwest(config);
};

module.exports = function(options) {
    return {
        get: function(url, data) {
            options.baseUrl = url;
            if(options.filter)
                data = options.filter.call(this,{
                    data: data,
                    url: options.baseUrl,
                    method: "get"
                });

            return api('get', options.host + url, data, options);
        },
        post: function(url, data) {
            options.baseUrl = url;
            if(options.filter)
                data = options.filter.call(this,{
                    data: data,
                    url: options.baseUrl,
                    method: "get"
                });

            return api('post', options.host + url, data, options);
        },
        patch: function(url, data) {
            options.baseUrl = url;
            if(options.filter)
                data = options.filter.call(this,{
                    data: data,
                    url: options.baseUrl,
                    method: "get"
                });

            return api('patch', options.host + url, data, options);
        },
        put: function(url, data) {
            options.baseUrl = url;
            if(options.filter)
                data = options.filter.call(this,{
                    data: data,
                    url: options.baseUrl,
                    method: "get"
                });

            return api('put', options.host + url, data, options);
        },
        // 约定 remove 代表 delete，因为delete是js关键词
        remove: function(url, data) {
            options.baseUrl = url;
            if(options.filter)
                data = options.filter.call(this,{
                    data: data,
                    url: options.baseUrl,
                    method: "get"
                });

            return api('delete', options.host + url, data, options);
        }
    };
};
