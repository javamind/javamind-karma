'use strict';

describe("HelloService ", function() {
    it("ask 'who are you?' when no name is sent to the function", function() {
        expect(helloService()).toBe('Who are you ?');
    });

    it("ask 'Hello Guillaume' when i call function with Guillaume", function() {
        expect(helloService('Guillaume')).toBe('Hello Guillaume');
    });
});
