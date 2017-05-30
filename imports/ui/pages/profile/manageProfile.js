import { Router } from 'meteor/iron:router';

import { Mongo } from 'meteor/mongo';

import './manageProfile.html';

Template.manageProfile.helpers({
	userId:function(){
		return Meteor.userId();
	},
	profileData:function(){
		var userId = Meteor.userId();
		const users = new Mongo.Collection('todos');
		var cursor = users.find({_id:userId});
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
		// const users = new Mongo.Collection('users');
		var firstName = event.target.firstName.value;
		var lastName = event.target.lastName.value;
		var sex = event.target.sex.value;
		var address = event.target.address.value;

		var result = users.updateOne({_id:userId},{$set:{fname:firstName,lname:lastName,sex:sex,address:address}});
		console.log(result);
		Router.go("landing");
	}
});