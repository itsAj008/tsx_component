import React, { useState } from 'react';
import { Commentitems } from './types';
import { actionTypes } from './CommentSection';

interface CommentProps {
  comment: Commentitems;
  dispatch: React.Dispatch<{ type: string, payload?: any }>;
}

const Comment = ({ comment, dispatch } :CommentProps) => {
  const [showReply, setShowReply] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [reply, setReply] = useState('');

  const handleSubmit = (id: number) => {
    if (reply.trim() !== '') {
      console.log(id, reply)
      dispatch({ type: actionTypes.ADD_REPLY_TO_COMMENT, payload: { id, reply } });
      setReply('');
      setShowReply(false);
      setShowReplies(true);
    }
  };

  return (
    <>
      <div className='bg-slate-200 max-w-full py-1 px-3 mt-2 flex flex-col rounded-lg'>
        <div className='text-sm font-semibold flex gap-2 items-center'>
          <span>@{comment.author}</span>
          <span className='opacity-80 text-xs'>1 year ago</span>
        </div>
        <span className='text-base'>{comment.text}</span>
        <button className='w-fit cursor-pointer border-b-[1px] border-gray-600 hover:scale-95' onClick={() => setShowReply(prev => !prev)}>Reply</button>

        <div className={`grid overflow-hidden transition-all duration-200 ease-in ${showReply ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
          <div className='overflow-hidden'>
            <textarea 
              className='w-full rounded-lg' 
              value={reply} 
              onChange={(e) => setReply(e.target.value)}
            ></textarea>
            <button 
              className='text-[10px] py-1 pb-1 px-2 bg-blue-400 text-white rounded-lg float-right' 
              onClick={() => handleSubmit(comment.id)}
            >
              Post
            </button>
          </div>
        </div>
      </div>
      <div className={`cursor-pointer flex mb-1 ${comment.children.length > 0 ? '' : 'hidden'}`} onClick={() => setShowReplies(prev => !prev)}>
        <span className={`${showReplies ? 'rotate-180' : 'rotate-0'}`}>🔻</span>
        <span className='w-fit'>Replies</span>
      </div>
      <div className='ml-5'>
        {(showReplies && comment.children.length > 0) && comment.children.map((childComment) => (
          <Comment key={childComment.id} comment={childComment} dispatch={dispatch} />
        ))}
      </div>
    </>
  );
};

export default Comment;
