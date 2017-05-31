import { Router } from 'meteor/iron:router';
import {Meteor} from 'meteor/meteor';
import {Profile} from '../../../api/profile/userProfile.js';
import                '../../../api/profile/methods.js';

import './manageProfile.html';

Template.manageProfile.helpers({
	userId:function(){
		return Meteor.userId();
	},
	profileData:function(){
		var userId = Meteor.userId();
		var cursor = Profile.find({_id:userId});
		return cursor;
	}
});

Template.manageProfile.events({
	'click .profile-cancel':function(event){
		console.log("cancel clicked user id:"+Meteor.userId());
		var cancelButton = event.target;
		Router.go("landing");
	},

	'submit form': function(event) {
		event.preventDefault();
		console.log("save clicked, user id:"+Meteor.userId);
		var userId = Meteor.userId();
		var firstName = event.target.firstName.value;
		var lastName  = event.target.lastName.value;
		var sex       = event.target.sex.value;
		var address   = event.target.address.value;

		var profileObj = {'_id':userId,'fname':firstName,'lname':lastName,'sex':sex,'address':address};

		var result = Meteor.call('profile.upsert',profileObj);
		
		console.log(result);
		Router.go("landing");
	}
});