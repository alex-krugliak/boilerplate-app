import app from '../app';

describe('httpDataProvider', () => {

    let HttpDataProvider;

    beforeEach(() => {
        angular.mock.module(app);

        angular.mock.inject((_HttpDataProvider_) => {
            HttpDataProvider = _HttpDataProvider_;

        })
    });

    it('test method should return text - some text ', () => {

        assert.equal(HttpDataProvider.testSomeText(), 'some text', 'method return wrong text');
    });

});