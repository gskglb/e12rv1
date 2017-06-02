import {Profile} from './userProfile.js';
import {Meteor} from 'meteor/meteor';

if(Meteor.isServer) {
	Meteor.publish('MyProfile',function profileManagement(){
		var userId = this.userId;
		console.log("in publishing..."+userId);
		var cursor = Profile.find({_id:userId});
		console.log("on server>>>"+cursor.count());
		this.ready();
		return cursor;
	});
}

Meteor.methods({
	'profile.upsert':function(profileObj){
		var fname = profileObj.fname;
		var lname = profileObj.lname;
		var sex   = profileObj.sex;
		var address= profileObj.address;
		var country= profileObj.country;
		var id    = Meteor.userId();
		console.log("fname:"+fname+";lname:"+lname+";gender:"+sex+";address:"+address+";country"+country);

		var cursor = Profile.upsert({'_id':id},{$set:{'fname':fname,'lname':lname,'sex':sex,'address':address,'country':country}});

		console.log("profile.upsert:update:"+cursor);
		return cursor;
	}
});

