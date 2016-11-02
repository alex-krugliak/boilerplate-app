import app from '../app';



describe('dashboard component', () => {
    let element;
    let scope;

    beforeEach(() => {
        angular.mock.module(app);

        angular.mock.inject(($compile, $rootScope)=> {
            let parentScope = $rootScope.$new();
            parentScope.testVar = 'test text';

            element = angular.element('<app-dashboard resolved-data="testVar"></app-dashboard>');

            let compiledElement = $compile(element)(parentScope);
            parentScope.$digest();

            scope = compiledElement.isolateScope();

        });
    });

    it('check component property value', () => {
        
        assert.equal(scope.$ctrl.resolvedData,'test text', 'wrong component binding');

        assert.equal(scope.$ctrl.testText,'dashboard component', 'wrong component field value');
        
    });
});
