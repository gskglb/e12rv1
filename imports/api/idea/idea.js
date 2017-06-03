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
				return moment().toDate();
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
	    		return moment().toDate();
	  		} 
		}
	},	  
	"createdBy": {
		type: String,
		autoValue: function () {
			if ( this.isInsert ) {
				if(Meteor.isServer){
					return this.userId?this.userId:"SYS";		
				}else{
		  			return "SYS";
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
