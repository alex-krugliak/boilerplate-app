require('../styles/main.less');


import angular from 'angular';
import uiRouter from 'angular-ui-router';
import uiBootstrap from 'angular-ui-bootstrap';
import ngMessages from 'angular-messages';

import RunConfig from './run'
import RouterConfig from './routes'

import AppDashboard from './dashboard/dashboard.component'
import PasswordValidator from './dashboard/password.validation.directive'

import HttpDataProvider from './common/httpDataProvider.service'


const MODULE_NAME = 'app';

angular.module(MODULE_NAME, [uiRouter, uiBootstrap, ngMessages])
    .run(RunConfig)
    .config(RouterConfig)
    .service('HttpDataProvider', HttpDataProvider)
    .component('appDashboard', AppDashboard)
    .directive('passwordValidator', PasswordValidator);

angular.bootstrap(document, [MODULE_NAME]);

export default MODULE_NAME;