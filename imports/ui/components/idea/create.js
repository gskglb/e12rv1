

import './create.html';


Template.createIdeaForm.helpers({
  defaultValues : function(){
    var templateData = Template.instance().data;
    return { 
      refNo : "I_" + moment().format('DDMMMYYYY_HMMss'),
      status : "Unpublished",
      expiresOn : new Date("31-Dec-2017"),
    };
  }
});

AutoForm.hooks({
  insertIdeaForm: {
   onSuccess: function () {
      	Flash.success("Your idea is successfully created in our idea bank");
        return true;
    }
  }
});