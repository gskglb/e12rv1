// All Idea-related publications

import { Meteor } from 'meteor/meteor';
import { Idea } from './idea.js';

Meteor.publish('ideas.all', function () {
	console.log("Getting ideas");
  return Idea.find();
});
