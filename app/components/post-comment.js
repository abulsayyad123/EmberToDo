import Component from '@ember/component';

export default Component.extend({
	comments:'',

	actions:{
		addComment(){
			const promise = this.get('onAddingComment')(this.get('comments'));
			// promise.then((result)=>{
			// 	debugger;
			// })
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
