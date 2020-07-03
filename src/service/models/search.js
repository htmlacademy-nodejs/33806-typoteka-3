'use strict';

class SearchService {
  constructor(articles) {
    this._articles = articles;
  }

  find(title) {
    return this._articles.filter((article) => article.title.toLowerCase().includes(title.toLowerCase()));
  }
}

module.exports = SearchService;
