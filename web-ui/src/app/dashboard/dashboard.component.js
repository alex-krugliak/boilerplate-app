'use strict';

class DashboardCtrl {
    constructor($rootScope) {
        debugger;
        this.$rootScope = $rootScope;
        this.testText = 'dashboard component';
        
    }

    $onDestroy() {
        console.log("component destroy");
    }

    $onInit() {
        debugger;
        console.log(this.resolvedData);
        console.log("component init");
    }

}

DashboardCtrl.$inject = ['$rootScope'];

const AppDashboard = {
    controller: DashboardCtrl,
    template: require('./dashboard.html'),
    bindings: {
        resolvedData: '<'
    }
};

export default AppDashboard;