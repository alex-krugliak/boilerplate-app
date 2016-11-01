const RouterConfig = ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {

    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('home', {
            url: '/home',
            template: '<app-dashboard url-data="$resolve.urlData"></app-dashboard>',
            title: 'Home',
            resolve: {
                urlData: function ($stateParams) {
                    return 'http://127.0.0.1:8080/api/test';
                }
            }
        });


    let interceptor = ['$rootScope', '$q', '$injector', function ($rootScope, $q, $injector) {
        return {
            response: function (response) {
                return response;
            },
            responseError: function (rejection) {
                var status = rejection.status;
                if (status === 401) {
                    console.log('error 401');
                }
                // otherwise
                return $q.reject(rejection);
            }
        };
    }];

    $httpProvider.interceptors.push(interceptor);
};

export default RouterConfig;