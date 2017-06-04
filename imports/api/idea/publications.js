// All Idea-related publications

import { Meteor } from 'meteor/meteor';
import { Idea } from './idea.js';

Meteor.publish('ideas.all', function () {
  return Idea.find({status:"Published"});
});

Meteor.publish('ideas.me', function () {
	console.log("Getting my ideas");
  return Idea.find({createdBy:this.userId});
});