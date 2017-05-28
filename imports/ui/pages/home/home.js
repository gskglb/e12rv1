import '/imports/ui/components/idea/listing.js';
import { Idea } from '/imports/api/idea/idea.js';
import './home.html';

Template.home.onCreated(function () {
  Meteor.subscribe('ideas.all');
});

Template.home.helpers({
  ideas() {
    return Idea.find({});
  },

  trimDescription(desc){
  	return desc.substr(0,500) + "...";
  }

});

