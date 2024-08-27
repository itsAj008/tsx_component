import React, { useEffect, useReducer, useState } from 'react';
import Comment from './Comment';
import { Commentitems } from './types';
import { commentsData } from './comment-data';

export const actionTypes = {
  ADD_COMMENT: 'add_comment',
  ADD_REPLY_TO_COMMENT: 'add_reply_to_comment',
  REMOVE_COMMENT: 'remove_comment'
};

const reducer = (commentState: Commentitems[], action: { type: string, payload?: any }) => {
  switch (action.type) {
    case actionTypes.ADD_COMMENT:
      return [
        ...commentState,
        {
          id: Date.now(),
          text: action.payload,
          author: "aj",
          children: []
        }
      ];

    case actionTypes.ADD_REPLY_TO_COMMENT:
        const addreply = (state:Commentitems[]) : Commentitems[] => {
                return state.map((comment)=> {
                    if (comment.id === action.payload.id) {
                        const newReply = {
                            id: Date.now(),
                            text: action.payload.reply,
                            author: "igris",
                            children: []
                        };
                        return {
                            ...comment,
                            children: [...comment.children, newReply]
                        };
                    }else if(  comment.children.length > 0){
                        return {
                            ...comment,
                            children: addreply(comment.children)
                        };
                       
                    }
                  return comment;
                 })

            }; 
        return addreply(commentState);

    default:
      return commentState;
  }
};
  

function CommentSection() {
  const [commentState, dispatch] = useReducer(reducer, commentsData);
  const [data, setData] = useState<string>('');

//   useEffect(() => {
//     dispatch({ type: actionTypes.ADD_COMMENT, payload: commentsData });
//   }, []);

  const handleSubmit = () => {
    if (data.trim() !== '') {
      dispatch({ type: actionTypes.ADD_COMMENT, payload: data });
      setData('');
    }
  };

  console.log(commentState)

  return (
    <div className='w-[90%] max-w-[700px] min-h-80 p-4 flex flex-col justify-between text-xs'>
      <div className='custom-scrollbar max-h-96 overflow-y-scroll flex flex-col pr-1'>
        {commentState.map((comment: Commentitems) => (
          <Comment key={comment.id} comment={comment} dispatch={dispatch} />
        ))}
      </div>
      <div>
        <span className='text-xs'>Comment:</span>
        <textarea 
          className='w-full h-54 rounded-lg' 
          value={data} 
          onChange={(e) => setData(e.target.value)}
        ></textarea>
        <button 
          className='text-xs py-2 px-3 bg-blue-400 text-white rounded-lg float-right hover:scale-95 transition-colors duration-150 ease-in-out cursor-pointer hover:bg-blue-500 ' 
          onClick={handleSubmit}
        >
          Post
        </button>
      </div>
    </div>
  );
}

export default CommentSection;
