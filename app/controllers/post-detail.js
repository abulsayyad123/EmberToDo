import Controller from '@ember/controller';

export default Controller.extend({
	comments:'',

	actions:{
		addComment(){
			console.log(this.get('comments'));
			const postComment = this.get('store').createRecord('post_comment', {
			  //id: this.get('model.postComments.length') + 1,
			  text: this.get('comments'),
			  post: this.get('model')
			});

			postComment.save();
			this.set('comments', '');
		},

		contentEditable(comment){
			comment.set('isEditable', true);
		},

		removeComment(comment){
			comment.destroyRecord();
		}
	}
});