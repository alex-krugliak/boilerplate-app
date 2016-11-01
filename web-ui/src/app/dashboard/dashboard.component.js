'use strict';

class DashboardCtrl {
    constructor($rootScope) {
        this.$rootScope = $rootScope;
        // this.url = url;
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
        urlData: '<'
    }
};

export default AppDashboard;