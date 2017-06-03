// Import client startup through a single index entry point

import './routes.js';
import './helpers.js';

Accounts.ui.config({
    passwordSignupFields: 'USERNAME_AND_EMAIL'
});

Meteor.startup(function(){
	$('body').addClass('homepage');
	$('body').attr('id', 'myPage');
	$('body').attr('data-spy', 'scroll');
	$('body').attr('data-target', '.navbar');
	$('body').attr('data-offset', '60');
});