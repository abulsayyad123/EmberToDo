import Ember from 'ember';
import DS from 'ember-data';

var Post = DS.Model.extend({
  title: DS.attr(),
  isComplete: DS.attr('boolean', {defaultValue: 'false'}),

  taskStatus: Ember.computed('isComplete', function () {
		return this.get('isComplete')? 'Incomplete': 'Completed';
  }),

  taskTime: DS.attr('string'),

  hours: Ember.computed('taskTime', function () {
		return this.get('taskTime').split(' hrs')[0];
  }),

  minutes: Ember.computed('taskTime', function () {
		const hrs = this.get('taskTime').split('minutes')[0];
		const minutes = hrs.split('hrs')[1].trim('');
		return minutes;
  }),

  postComments: DS.hasMany('post_comment')

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