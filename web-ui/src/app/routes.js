const RouterConfig = ($stateProvider, $urlRouterProvider, $locationProvider, $httpProvider) => {

    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
    $urlRouterProvider.otherwise('/404');

    $stateProvider
        .state('home', {
            url: '/',
            template: '<app-dashboard resolved-data="$resolve.resolvedData"></app-dashboard>',
            title: 'Home',
            resolve: {
                resolvedData: ['HttpDataProvider', (HttpDataProvider) => {
                    return HttpDataProvider.get('/api/test', null, null, false);
                }]
            }
        });


    let interceptor = ['$rootScope', '$q', '$injector', ($rootScope, $q, $injector)=> {
        return {
            response: (response)=> {
                return response;
            },
            responseError: (rejection)=> {
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

RouterConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider', '$httpProvider'];

export default RouterConfig;