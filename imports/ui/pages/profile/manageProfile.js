import {Router}  from 'meteor/iron:router';
import {Meteor}  from 'meteor/meteor';
import {ReactiveDict} from 'meteor/reactive-dict';
import {Profile} from '../../../api/profile/userProfile.js';
import '../../../api/profile/methods.js';
import './manageProfile.html';

Template.body.onCreated(function onCreate(){
	this.state = new ReactiveDict();
	Meteor.subscribe('MyProfile');
});


Template.manageProfile.helpers({
	countrySelectProps:function(){
		return {name:'country', class:'form-control'};
	},
	gender:function(){
		return [{key:"M",value:"Male"},{key:"F",value:"Female"},{key:"O",value:"Others"}];
	},
	userId:function(){
		return Meteor.userId();
	},
	profileData:function(){
		var cursor = Profile.find({});
		console.log("on client>>>"+cursor.count());
		var profileObj = {};
		cursor.forEach((profile) => {
		  profileObj.fname = profile.fname;
		  profileObj.lname = profile.lname;
		  profileObj.sex   = profile.sex;
		  profileObj.address = profile.address;
		  profileObj.country = profile.country;
		});
		console.log()
		return profileObj;
	},
	isSelected:function(first, second){
		return (first===second.hash.second)?"selected":"";
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
		var firstName = event.target.firstName.value;
		var lastName  = event.target.lastName.value;
		var sex       = event.target.sex.value;
		var address   = event.target.address.value;
		var country   = event.target.country.value;
	
		var profileObj = {'fname':firstName,'lname':lastName,'sex':sex,'address':address,'country':country};

		var result = Meteor.call('profile.upsert',profileObj);
		
		console.log(result);
		Router.go("landing");
	}
});