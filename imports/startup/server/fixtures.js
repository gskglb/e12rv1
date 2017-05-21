// Fill the DB with example data on startup

import { Meteor } from 'meteor/meteor';
import { Idea } from '../../api/idea/idea.js';

Meteor.startup(() => {

  // Clean up all ideas
  Idea.remove({});
  // if the Links collection is empty
  if (Idea.find().count() === 0) {
    const data = [
      {
        refNo: 'dummyRefNo1',
        summary: 'An Awesome Idea from Guru - 1',
        description : `This is first line. This is second line. How to split the line? I don't know`,
        status : 'Published',
        expiresOn : new Date('2017-12-31'),
        likes_count : 100,
        dislikes_count : 2,
      },
      {
        refNo: 'dummyRefNo2',
        summary: 'An Awesome Idea from Guru - 2',
        description : `This is first line. This is second line. How to split the line? I don't know`,
        status : 'Published',
        expiresOn : new Date('2017-12-31'),
        likes_count : 10,
        dislikes_count : 5,
      },
      {
        refNo: 'dummyRefNo3',
        summary: 'An Awesome Idea from Guru - 3',
        description : `This is first line. This is second line. How to split the line? I don't know`,
        status : 'Published',
        expiresOn : new Date('2017-12-31'),
        likes_count : 22,
        dislikes_count : 5,
      },
      {
        refNo: 'dummyRefNo4',
        summary: 'An Awesome Idea from Guru - 4',
        description : `This is first line. This is second line. How to split the line? I don't know`,
        status : 'Published',
        expiresOn : new Date('2017-12-31'),
        likes_count : 55,
        dislikes_count : 32,
      },
    ];

    data.forEach(idea => Idea.insert(idea));
  }
});
