import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  author: DS.attr(),
  date: DS.attr('date', {
    defaultValue() { return new Date(); }
  }),
  description: DS.attr(),
  text: DS.attr(),
  photo: DS.attr(),
  thumbnail: DS.attr()
});
