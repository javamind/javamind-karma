'use strict';

describe("BlogService ", function () {
    var articleService;

    beforeEach(function () {
        articleService = new ArticleService();
    });

    afterEach(function () {
        articleService = undefined;
    });

    it("find article name without spy", function () {
        expect(getArticleTitle(articleService, 1)).toBe('Implem reelle');
    });

    it("find article name with a spy", function () {
        spyOn(articleService, 'getById').and.returnValue({name : 'Test en Javascript'});
        expect(getArticleTitle(articleService, 1)).toBe('Test en Javascript');1
    });


    it("don't find article name", function () {
        spyOn(articleService, 'getById').and.returnValue(undefined);
        expect(getArticleTitle(articleService, 1)).toBe('Article not found id=1');1
    });

    it("find article name throw exception", function () {
        spyOn(articleService, 'getById').and.throwError('Erreur service');

        expect(function(){
            getArticleTitle(articleService, 1);
        }).toThrowError('Erreur service');1
    });
});
