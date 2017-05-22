import './listing.html';

Template.ideaListing.helpers({
  trimDescription : function(){
  	return this.description.substr(0,100) + "...";
  }
});