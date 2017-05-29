import { Idea } from '/imports/api/idea/idea.js';
import './createIdea.html';

Template.createIdea.helpers({
  defaultValues : function(){
    var templateData = Template.instance().data;
    return { 
      refNo : "I_" + moment().format('DDMMMYYYY_HMMss'),
      status : "Unpublished",
      expiresOn : new Date("31-Dec-2017"),
    };
  },

  ideaCollection() {
    return Idea;
  }

});

AutoForm.hooks({
  insertIdeaForm: {
	onSubmit: function (insertDoc, updateDoc, currentDoc) {
		console.log("Submitted");
      return true;
    },
   onSuccess: function () {
      	Flash.success("Your idea is successfully created in our idea bank");
        return true;
    }
  }
});