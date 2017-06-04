import '/imports/ui/components/idea/create.js';
import './createIdea.html';
import { Idea } from '/imports/api/idea/idea.js';
import '/imports/ui/modals/addTags.js';

Template.createIdea.onCreated(function () {
  Meteor.subscribe('ideas.me');
});

Template.createIdea.events({
	'click .publish': function(event){
		event.preventDefault();
		console.log("Publish clicked" + this._id);
	 	
 		Meteor.call("statusUpdate", this._id, "Published" ,function(error, result) {
	      if(error) {
	        console.log("Sorry couldn't publish your idea" + this._id);
	      } 
	    });  
 	},

	'click .unpublish': function(event){
		event.preventDefault();
		console.log("Publish clicked" + this._id);
	 	
 		Meteor.call("statusUpdate", this._id, "Unpublished" ,function(error, result) {
	      if(error) {
	        console.log("Sorry couldn't Unpublish your idea" + this._id);
	      } 
	    });  
 	},

 	'click .addTagsModal': function(event){
 		event.preventDefault();
 		Session.set('ideaObj', this);
 		Modal.show('addTagsModal');
 	},

 	'click .showHideTags' : function(event){
 		$(".main-container.collapse").on('shown.bs.collapse', function () {    
		//when a collapsed div is shown hide all other collapsible divs that are visible
       		$(".main-container.collapse").not($(this)).collapse('hide');
		});
 	}
 
});



Template.createIdea.helpers({
	myIdeas() {
    	return Idea.find({createdBy:Meteor.userId()}, { sort: { createdAt: -1 } });
  	},

	trimDescription(desc){
		return desc.substr(0,400) + "...";
	},  	

	isPublishRequired : function(status){
    	return status === "Unpublished";
   	}, 

});
