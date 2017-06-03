// Methods related to links

import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';
import { Idea } from './idea.js';

Meteor.methods({
	statusUpdate : function(id, newStatus){
    	Idea.update({_id : id}, {$set : {status : newStatus}});
    	console.log("Status Updated for " + id + " to " + newStatus);
	}
});
