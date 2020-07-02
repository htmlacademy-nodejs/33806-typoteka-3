'use strict';

class CommentsService {
  constructor(articles) {
    this._articles = articles;
  }

  findAll(articleID, commentsCount) {
    const post = this._articles.filter((article) => article.id === articleID)[0];

    if (post) {
      return post.comments.slice(0, commentsCount);
    }

    return [];
  }

  delete(articleID, commentID) {
    const post = this._articles.filter((article) => article.id === articleID)[0];

    if (post) {
      const comment = post.comments.filter((item) => item.id === commentID);

      if (comment) {
        return post.comments.filter((item) => item.id !== commentID);
      }

      return null;
    }

    return null;
  }
}

module.exports = CommentsService;
