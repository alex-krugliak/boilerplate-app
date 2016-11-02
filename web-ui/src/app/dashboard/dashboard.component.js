'use strict';

class DashboardCtrl {
    constructor($rootScope) {
        this.$rootScope = $rootScope;
        this.testText = 'dashboard component';
        
    }

    $onDestroy() {
        console.log("component destroy");
    }

    $onInit() {
        console.log("component init");
    }

}


const AppDashboard = {
    controller: DashboardCtrl,
    template: require('./dashboard.html'),
    bindings: {
        resolvedData: '<'
    }
};

export default AppDashboard;