

const RunConfig = ($rootScope, $location) => {

    $rootScope.$on('$stateChangeError', (e, toState, toParams, fromState, fromParams) => {
        console.error('state change error', arguments);
    });

    $rootScope.$on('$stateChangeSuccess', (event, current) => {
        console.log('state change success', arguments);
    });

    $rootScope.$on('$stateChangeStart', (e, toState, toParams) => {
        console.log('state change start', arguments);

    });


};

RunConfig.$inject = ['$rootScope', '$location'];

export default RunConfig;