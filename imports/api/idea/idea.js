// Definition of the links collection

import { Mongo } from 'meteor/mongo';

export const Idea = new Mongo.Collection('Ideas');

IdeaSchema = new SimpleSchema({
	"refNo" : {
		type : String,
	  	label : "Reference Number"
	},
	"summary": {
		type: String,
		label: "Summary of the Idea"
	},
	"description": {
		type: String,
		label: "Description"
	},
	"status" : {
		type: String,
		label : "Status"
	},
	"expiresOn" : {
		type : Date,
		autoValue: function () {
			if ( this.isInsert ) {
				return new Date('31-Dec-2017')
		  	}
		}
	},
	"likes_count": {
		type: Number,
		autoValue: function () {
			if ( this.isInsert ) {
				return 0
		  	}
		}
	},
	"dislikes_count" : {
		type: Number,
		autoValue: function () {
			if ( this.isInsert ) {
				return 0
		  	}
		}		
	},
	"createdAt": {
		type: Date,
		autoValue: function() {
	  		if ( this.isInsert ) {
	    		return new Date;
	  		} 
		}
	},	  
	"createdBy": {
		type: String,
		autoValue: function () {
			if ( this.isInsert ) {
				if(Meteor.isClient){
					return Meteor.userId();	
				}else{
					return "-1";
				}
		  	}
		}
	},
	"updatedAt": {
		type: Date,
		autoValue: function() {
	  		if ( this.isUpdate ) {
	    		return moment().toDate();
	  		} 
		},
		optional : true
	}
});

Idea.attachSchema(IdeaSchema);
