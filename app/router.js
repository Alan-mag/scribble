import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('view-article', {path: '/view-article/:article_id'}); // to be edited
  this.route('create-article');
  this.route('edit-article', {path: '/edit-article/:article_id'});
  this.route('admin-portal');
});

export default Router;
