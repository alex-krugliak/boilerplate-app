import '../css/main.css';

import 'jquery';

import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';

import RunConfig from './run'
import RouterConfig from './routes'

import AppDashboard from './dashboard/dashboard.component'

import HttpDataProvider from './common/httpDataProvider.service'


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uiRouter, uiBootstrap])
    .run(RunConfig)
    .config(RouterConfig)
    .service('HttpDataProvider', HttpDataProvider)
    .component('appDashboard', AppDashboard);

angular.bootstrap(document, [MODULE_NAME]);

export default MODULE_NAME;