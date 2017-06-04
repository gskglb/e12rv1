import './addTags.html';
import { Idea } from '/imports/api/idea/idea.js';

Template.addTagsModal.rendered = function(){

var that = Session.get('ideaObj');
  this.$('.tag-input').selectize({
    valueField: 'name',
    labelField: 'name',
    searchField: ['name'],
    create: function(input, cb) {
      console.log('create tag: ', input)
      Idea.addTag(input, {_id: that._id});
      return Meteor.tags.findOne({collection: 'ideas', name: input});
      
    },
    options: Meteor.tags.find({collection: 'ideas'}).fetch(),
    render: {
        item: function(item, escape) {
            return '<div>' +
              (item.name ? '<span class="name">' + escape(item.name) + '</span>' : '') +
            '</div>';
        },
        option: function(item, escape) {
            var name = item.name;
            var caption = item.nRefs;
            return '<div>' +
                '<span class="name">' + escape(name) + '</span>&nbsp;' +
                (caption ? '<span class="badge">' + escape(caption) + '</span>' : '') +
            '</div>';
        }
    },
    onItemAdd: function(value, $item) {
      console.log('add tag: ', value);
      Idea.addTag(value, {_id: that._id});
    },
    onItemRemove: function(value) {
      console.log('remove tag: ', value);
      Idea.removeTag(value, {_id: that._id});
    }
  });


};


Template.addTagsModal.helpers({
	getIdeaObj(){
		const ideaObj = Session.get('ideaObj');
		return ideaObj;
	}
});