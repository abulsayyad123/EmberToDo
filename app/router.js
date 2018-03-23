import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('post', {path:'/'});
  this.route('post-detail', {path: '/post/:post_id'});
});

export default Router;
