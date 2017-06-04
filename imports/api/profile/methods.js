import {Meteor} from 'meteor/meteor';

if(Meteor.isServer) {
	Meteor.publish('MyProfile',function(){
		var userId = this.userId;
		var profileFields = {"profileData.fname":1,"profileData.lname":1,
							 "profileData.sex":1,"profileData.country":1, "profileData.address":1};
		var cursor = Meteor.users.find({_id:userId},{fields:profileFields});
		this.ready();
		return cursor;
	});
}

Meteor.methods({
	'profile.update':function(profileObj){
		var fname = profileObj.fname;
		var lname = profileObj.lname;
		var sex   = profileObj.sex;
		var address= profileObj.address;
		var country= profileObj.country;
		var id    = Meteor.userId();

		console.log("fname:"+fname+";lname:"+lname+";gender:"+sex+";address:"+address+";country:"+country);

		var cursor = Meteor.users.update({'_id':id},{$set:{'profileData.fname':fname,'profileData.lname':lname,
								'profileData.sex':sex,'profileData.address':address,'profileData.country':country}});

		return cursor;
	}
});

