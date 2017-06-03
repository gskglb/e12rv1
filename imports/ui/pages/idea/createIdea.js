import '/imports/ui/components/idea/create.js';
import './createIdea.html';
import { Idea } from '/imports/api/idea/idea.js';

Template.createIdea.onCreated(function () {
  Meteor.subscribe('ideas.me');
});


Template.createIdea.helpers({
	myIdeas() {
    	return Idea.find({createdBy:Meteor.userId()}, { sort: { createdAt: -1 } });
  	},

	trimDescription(desc){
		return desc.substr(0,400) + "...";
	}  	
});
