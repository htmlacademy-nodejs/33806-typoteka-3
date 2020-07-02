'use strict';

class ArticleService {
  constructor(articles) {
    this._articles = articles;
  }

  find(articleID) {
    return this._articles.filter((article) => article.id === articleID)[0];
  }

  update(articleID) {
    return this._articles.filter((article) => article.id === articleID)[0];
  }

  delete(articleID) {
    const post = this._articles.filter((article) => article.id === articleID)[0];

    if (post) {
      return this._articles.filter((article) => article.id !== articleID);
    }

    return [];
  }
}

module.exports = ArticleService;
