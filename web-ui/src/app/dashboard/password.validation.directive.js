"use strict";

const PasswordValidator = () => {
   
    return {
        restrict: 'A',
        require: 'ngModel',
        link: (scope, elem, attr, ctrl) => {
            debugger;
            ctrl.$validators.customValidation = (modelValue, viewValue) => {
                debugger;

                if (!viewValue) return false;
                return viewValue.length > 3;
            };

            
        }
    };
};

export default PasswordValidator;

