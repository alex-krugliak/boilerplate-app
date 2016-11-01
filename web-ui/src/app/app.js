import 'jquery';
import 'bootstrap/dist/css/bootstrap.min.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

import RunConfig from './run'
import RouterConfig from './routes'

import AppDashboard from './dashboard/dashboard.component'

import HttpDataProvider from './common/httpDataProvider.service'

import '../css/main.css';

const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uiRouter])
    .run(RunConfig)
    .config(RouterConfig)
    .service('HttpDataProvider', HttpDataProvider)
    .component('appDashboard', AppDashboard);

angular.bootstrap(document, [MODULE_NAME]);

export default MODULE_NAME;