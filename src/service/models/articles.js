'use strict';

const nanoid = require(`nanoid`).nanoid;

class ArticlesService {
  constructor(articles) {
    this._articles = articles;
  }

  findAll() {
    return this._articles;
  }

  find(articleID) {
    return this._articles.filter((article) => article.id === articleID)[0];
  }

  add(data) {
    return {...data, id: nanoid()};
  }

  edit(articleID) {
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

module.exports = ArticlesService;
