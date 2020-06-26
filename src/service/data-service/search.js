'use strict';

class SearchService {
  constructor(articles) {
    this._articles = articles;
  }

  find(title) {
    return this._articles.filter((article) => article.title.includes(title));
  }
}

module.exports = SearchService;
