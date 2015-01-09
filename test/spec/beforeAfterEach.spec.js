'use strict';


describe("Test beforeEach and afterEach", function() {
    var hello = 0;

    beforeEach(function() {
        hello += 1;
    });

    afterEach(function() {
        hello = 0;
    });

    it("hello have to be incremented", function() {
        expect(hello).toEqual(1);
    });

    it("hello have always the same value", function() {
        expect(hello).toEqual(1);
    });
});

describe("Test beforeEach and afterEach with this keyword", function() {
    beforeEach(function() {
        this.hello = !this.hello ? 1 : this.hello + 1;
    });

    afterEach(function() {
        this.hello = 0;
    });

    it("hello have to be incremented", function() {
        expect(this.hello).toEqual(1);
    });

    it("hello have always the same value", function() {
        expect(this.hello).toEqual(1);
    });
});