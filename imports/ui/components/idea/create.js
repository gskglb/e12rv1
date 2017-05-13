import { Idea } from '/imports/api/idea/idea.js';

import './create.html';


Template.createIdeaForm.helpers({
  defaultValues : function(){
    var templateData = Template.instance().data;
    return { 
      refNo : "I_" + moment().format('DDMMMYYYY_HMMss'),
      status : "Unpublished",
    };
  }
});

AutoForm.hooks({
  createIdeaForm: {
   onSuccess: function () {
      	Flash.success("Your idea is successfully created in our idea bank");
        return true;
    }
  }
});