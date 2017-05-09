import './header.html';

Template.header.rendered = function(){
	console.log("Hello");
};

Template.header.events({
  'click [data-action=logout]' : function() {
    AccountsTemplates.logout();
  }
});

