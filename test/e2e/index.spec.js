'use strict';

describe('Test homepage (index.html)', function() {
    it('should have a title', function() {
        browser.get('http://dev-mind.fr/');
        expect(browser.getTitle()).toEqual('DevIsMyMind');
    });
});