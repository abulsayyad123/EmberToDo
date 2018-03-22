import DS from 'ember-data';

var Post = DS.Model.extend({
  title: DS.attr(),
  isComplete: DS.attr('boolean', {defaultValue: 'false'}),

  taskStatus: Ember.computed('isComplete', function () {
		return this.get('isComplete')? 'Incomplete': 'Completed';
  }),

  taskTime: DS.attr('string')
});

Post.reopenClass({
  FIXTURES: [
    // {
    //   id: 1,
    //   title: "Something something Basecamp"
    // }
  ]
});

export default Post;