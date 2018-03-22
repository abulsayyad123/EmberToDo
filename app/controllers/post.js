import Controller from '@ember/controller';

export default Controller.extend({
	title: '',
	taskTime: {
		hours:'',
		minutes:''
	},

	enableSubmitButton: Ember.computed('title', 'taskTime.hours', 'taskTime.minutes', function(){
		if(!(this.get('title').length && (this.get('taskTime.hours') > 0 || this.get('taskTime.minutes') > 0 ))){
			return true;
		}
	}),

	actions:{
		addTodo(){
			const title = this.get('title');
			const hours = this.get('taskTime.hours')? this.get('taskTime.hours'): '0' + ":";
			const minutes = this.get('taskTime.minutes')? this.get('taskTime.minutes'): '0';
			const requiredTime = hours+' hrs '+minutes +' minutes';
			const task = this.get('store').createRecord('post', {
			  id: this.get('model.length') +1,
			  title: title,
			  taskTime: requiredTime
			});

			task.save();

			this.set('title','');
			this.set('taskTime.hours','');
			this.set('taskTime.minutes','');
		},

		removeTask(task){
			task.destroyRecord();
		},

		markComplete(task){
			// this.get('store').findRecord('post', task.id).then(function(post) {
			  
			//   post.set('isComplete', true);

			//   post.save();
			// });
			task.get('taskStatus') === 'Incomplete' ? task.set('taskStatus', 'Completed') : task.set('taskStatus', 'Incomplete');
		},

		showTask(status){
			const model = this.get('model');
			if (status === 'all') {
				let newFetchModel = this.get('store').findAll('post');
				this.set('model', newFetchModel);
			} else {
				var newModelValue = model.filter((item)=> {
						return item.taskStatus === status
					});
				this.set('model',newModelValue);	
			}
			
		}


	}
});
