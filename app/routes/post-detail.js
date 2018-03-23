import Route from '@ember/routing/route';

export default Route.extend({
	model(params){
		debugger;
		return this.store.peekRecord("post", params.post_id);
	}
});
