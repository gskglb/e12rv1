import {Router}  from 'meteor/iron:router';
import {Meteor}  from 'meteor/meteor';
import '../../../api/profile/methods.js';
import './manageProfile.html';

Template.manageProfile.onCreated(function onCreate(){
	this.profileObj = new ReactiveVar();
	var abc         = this.profileObj;
	Meteor.call('profile.read',null,function(error,result){
		abc.set(result);
	});
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
		var profileObj = Template.instance().profileObj.get();
		return profileObj;
	},
	isSelected:function(prop1, prop2) {
		return (prop1===prop2.hash.second)?"selected":"";
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
		var country   = event.target.country.value;
		var address   = event.target.address.value;
	
		var profileObj = {'fname':firstName,'lname':lastName,'sex':sex,'country':country,'address':address};

		var result = Meteor.call('profile.update',profileObj);
		
		console.log(result);
		Router.go("landing");
	}
});