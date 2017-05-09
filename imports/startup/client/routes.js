import { Router } from 'meteor/iron:router'


// Import needed templates
import '../../ui/layouts/body/body.js';
import '../../ui/pages/landing/landing.js';
import '../../ui/pages/home/home.js';
import '../../ui/pages/not-found/not-found.js';


AccountsTemplates.configureRoute('signIn', {
    redirect: '/home'
});
AccountsTemplates.configureRoute('signUp', {
    redirect: '/home'
});



Router.configure({
    layoutTemplate: 'App_body',
    notFoundTemplate: 'App_notFound'
});

Router.route('/', {
  name: 'landing',
  template: 'landing' 
});

Router.route('/home', {
  name: 'home',
  template: 'home' 
});