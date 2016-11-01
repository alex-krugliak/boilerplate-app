'use strict';

class HttpDataProvider {
    constructor($http, $q) {
        this.$q = $q;
        this.$http = $http;

    }


    get(url, params, headers, isRawDataReturn) {
        return this.$q((resolve, reject) => {
            this.$http({
                url: url,
                method: "GET",
                params: params,
                headers: headers
            }).then(function (response) {
                
                if (isRawDataReturn) {
                    resolve(response);
                }

                resolve(response.data);

            }, function (reason) {
                resolve(null);
            })
        });

    }


}

export default HttpDataProvider;