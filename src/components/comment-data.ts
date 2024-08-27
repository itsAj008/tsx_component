import {Commentitems} from './types'

export const commentsData :Commentitems[] = [
    {
      id: 1,
      text: "This is the first comment",
      author: "User1",
      children: [
        {
          id: 2,
          text: "This is a nested comment",
          author: "User2",
          children: [
            {
              id: 3,
              text: "This is a nested comment within a nested comment",
              author: "User3",
              children: []
            }
          ]
        },
        {
          id: 4,
          text: "Another nested comment",
          author: "User4",
          children: []
        }
      ]
    },
    {
      id: 5,
      text: "This is another top-level comment",
      author: "User5",
      children: []
    }
  ];
  