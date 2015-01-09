'use strict';

function ArticleService(){
    this.getById = function(id){
        //Ici on appelle le serveur par exemple
        //...
        return {id : id, name : 'Implem reelle'};
    };
}

function getArticleTitle(articleService, id){
    //Je recherche un article
    var article = articleService.getById(id);
    return article ? article.name : "Article not found id=" + id;
}
