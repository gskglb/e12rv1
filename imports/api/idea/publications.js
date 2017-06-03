// All Idea-related publications

import { Meteor } from 'meteor/meteor';
import { Idea } from './idea.js';

Meteor.publish('ideas.all', function () {
	console.log("Getting ideas");
  return Idea.find();
});

Meteor.publish('ideas.me', function () {
	console.log("Getting my ideas");
  return Idea.find({createdBy:this.userId});
});