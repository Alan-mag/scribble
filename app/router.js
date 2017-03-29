import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('view-article');
  this.route('edit-article');
  this.route('create-article');
  this.route('admin-portal');
});

export default Router;
