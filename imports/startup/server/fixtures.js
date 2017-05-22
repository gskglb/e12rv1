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
        description : `
        Sample paragraph text
In some templates we used a Lorem Ipsun text paragraphs. This "strange language" is a sample text to illustrate how a paragraph or a text block could be integrated into the graphic layout. 
Acording to www.lipsum.com website: 
What is "Lorem Ipsum" language?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. 
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        `,
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
        description : `
Sample paragraph text
In some templates we used a Lorem Ipsun text paragraphs. This "strange language" is a sample text to illustrate how a paragraph or a text block could be integrated into the graphic layout. 
Acording to www.lipsum.com website: 
What is "Lorem Ipsum" language?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum 
Where does it come from?
Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32. 
The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
        `,
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
