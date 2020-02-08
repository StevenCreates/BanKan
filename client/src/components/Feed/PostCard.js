import React, { useRef, useState, useContext } from "react";
import { usePost } from "../hooks/PostHook";
import { RootContext } from "../../context/RootContext";
import "./PostCard.css";

const PostCard = ({ post }) => {
  const [show, toggleShow] = useState(false);
  const [postId, setPostID] = useState("");
  const { userState } = useContext(RootContext);
  const [currentComments, setCurrentComments] = useState([]);
  const ref = useRef();

  const thisFunctionDoesIt = () => {
    toggleShow(!show);
    setPostID(ref.current.id);
    getComment(postId);
  };

  const getComment = () => {
    let body = {
      id: ref.current.id
    };
    console.log({ body });
    fetch("/api/comments/findme", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setCurrentComments(data);
      })
      .catch(err => console.log(err));
  };

  const submitComment = () => {
    console.log(inputs.comment);
    let body = {
      comment: inputs.comment,
      user_id: userState.id,
      id: postId,
      name: userState.name
    };
    fetch("/api/comments/newcomment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(body)
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        // setCurrentComments(data);
      })
      .catch(err => console.log(err));
  };

  const { inputs, handleInputChange, handleSubmit } = usePost(submitComment);

  return (
    <div>
      <div ref={ref} user={post.user_id} id={post._id} className='card'>
        <div className='top-post'>
          <div>Title:{post.title}</div>
          <audio controls>
            <source src={post.link} type='audio/mp3'></source>
          </audio>
        </div>
        <div>Author:{post.user}</div>
        <div>{post.body}</div>

        {/* <embed href={post.link}>Listen!</embed> */}
        <button onClick={thisFunctionDoesIt}>Comment</button>
        {show && (
          <div>
            {currentComments.map(currentComments => (
              <div className='current-comments'>
                <div className='name-comment'>{currentComments.name}:</div>
                <div className='the-comment'>{currentComments.comment}</div>
              </div>
            ))}
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  className='comment-field'
                  placeholder='Comment'
                  type='text'
                  name='comment'
                  onChange={handleInputChange}
                  value={inputs.comment}
                  required
                />
              </div>
              <button type='submit'>Submit Comment</button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
};
export default PostCard;
