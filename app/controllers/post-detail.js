import Controller from '@ember/controller';

export default Controller.extend({
	
	actions:{
		createComment(comments){
			const postComment = this.get('store').createRecord('post_comment', {
			  text: comments
			});
			postComment.set('posts',this.get('model'));
			postComment.save();
		}
	}
});