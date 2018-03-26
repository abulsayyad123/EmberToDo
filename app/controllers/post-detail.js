import Controller from '@ember/controller';

export default Controller.extend({
	
	actions:{
		createComment(comments){
			console.log(this.get('comments'));
			const postComment = this.get('store').createRecord('post_comment', {
			  text: comments,
			  post: this.get('model')
			});

			postComment.save();
		}
	}
});