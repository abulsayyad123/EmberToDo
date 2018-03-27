import DS from 'ember-data';

var PostComment = DS.Model.extend({
  text: DS.attr('string'),
  postId: DS.attr("number"),
  isEditable: DS.attr('boolean', {defaultValue: false}),
  posts: DS.belongsTo('post')
});

PostComment.reopenClass({
  FIXTURES: [
    // {
    //   id: 1,
    //   title: "Something something Basecamp"
    // }
  ]
});

export default PostComment;