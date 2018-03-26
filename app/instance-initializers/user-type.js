import EmberObject from '@ember/object';

var UserConfig = Ember.Object.extend({
	userTypes: ['free User','Premium User']
});

export function initialize(application) {
  application.register('userType', UserConfig.userTypes);
  application.inject('controller', 'userTypes', 'userType');
}

export default {
  initialize,
  name: 'user-type'
};
