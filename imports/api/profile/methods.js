import {Meteor} from 'meteor/meteor';

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

function checkAndAdd(profileObj,key,value) {
	if(typeof value != "undefined") {
		profileObj[key]=value;
	} else {
		profileObj[key]="";
	}
}
if(Meteor.isServer) {
	Meteor.methods({
	'profile.read':function() {
			var _userId = Meteor.userId();
			var profileFields = {"profileData.fname":1,"profileData.lname":1,
								 "profileData.sex":1,"profileData.country":1, "profileData.address":1};
			var cursor = Meteor.users.find({_id:_userId},{fields:profileFields});
			var profileObj = {};
			cursor.forEach(function(user){
				console.log("Retrieving profile for user:"+user._id);
				if(typeof user.profileData!="undefined") {
					checkAndAdd(profileObj,"fname",user.profileData.fname);
					checkAndAdd(profileObj,"lname",user.profileData.lname);
					checkAndAdd(profileObj,"sex",user.profileData.sex);
					checkAndAdd(profileObj,"address",user.profileData.address);
					checkAndAdd(profileObj,"country",user.profileData.country);					
				}
			});
			console.log(profileObj.fname+","+profileObj.lname+","+profileObj.sex);
			return profileObj;
		}
	});
}
