import Ember from 'ember';

export default Ember.Component.extend({


  actions: {
    saveArticle() {
      var params = {
        title: this.get('title') ? this.get('title') : "",
        author: this.get('author') ? this.get('author') : "",
        date: this.get('date') ? this.get('date') : "",
        description: this.get('description') ? this.get('description') : "",
        text: this.get('text') ? this.get('text') : "",
        photo: this.get('photo') ? this.get('photo') : "",
        thumbnail: this.get('thumbnail') ? this.get('thumbnail') : "",
      };
      this.sendAction('saveArticle', params);
    }
  }
});
