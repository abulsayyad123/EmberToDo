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

	totalTime: Ember.computed('model.@each.requiredTime', function(){
		 let totalTime = 0; 
		 this.get('model').forEach((val)=>{
		 	 totalTime = totalTime + parseInt(val.get('hours')*60) + parseInt(val.get('minutes'));
		 });
		 let hours = Math.floor(totalTime/60);
		 let minutes = totalTime%60;
		 const requiredTime = hours+' hrs '+minutes +' minutes';

		 return requiredTime;
	}),

	actions:{
		addTodo(){
			const title = this.get('title');
			const hours = this.get('taskTime.hours')? this.get('taskTime.hours'): '0';
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
			
		},

		adjustMinutes(){
			const minutes = this.get('taskTime.minutes');
			const hours = this.get('taskTime.hours');
			if(minutes > 59){
				let remainingMinutes = minutes - 60;
				this.set('taskTime.hours', hours+1);
				this.set('taskTime.minutes', remainingMinutes);
			}
		}


	}
});
