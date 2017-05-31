import {Profile} from './userProfile.js';
import {Meteor} from 'meteor/meteor';


Meteor.methods({
	'profile.upsert':function(profileObj){
		console.log("inside profile.upsert");
		var fname = profileObj.fname;
		var lname = profileObj.lname;
		var sex   = profileObj.sex;
		var address= profileObj.address;
		var _id    = profileObj._id;
		var cursor = Profile.insert({'_id':_id, 'fname':fname,'lname':lname,'sex':sex,'address':address});
		console.log("profile inserted:"+cursor);
		return cursor;
	}
});