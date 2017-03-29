import Ember from 'ember';

export default Ember.Component.extend({

  actions: {
    update(article) {
        var params = {
          title: this.get('title'),
          author: this.get('author'),
          description: this.get('description'),
          text: this.get('text'),
          photo: this.get('photo'),
          thumbnail: this.get('thumbnail'),
        };
        this.sendAction('update', article, params);
      },
      delete(article) {
        if(confirm('Are you sure you want to delete this article?')) {
          this.sendAction('destroyArticle', article);
        }
      },
    }
});
