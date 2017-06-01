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
		var id    = Meteor.userId();
		console.log("fname:"+fname+";lname:"+lname+";gender:"+sex+";address:"+address);
		var cursor = Profile.update({'_id':id},{$set:{'fname':fname,'lname':lname,'sex':sex,'address':address}});
		console.log("profile.upsert:update:"+cursor);
		return cursor;
	}
});

