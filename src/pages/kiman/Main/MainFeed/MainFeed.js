import React, { useState, useRef } from 'react';
import AddComment from './CommentFunction/AddComment';
import './MainFeed.scss';

const MainFeed = ({ mockdata }) => {
  const inputRef = useRef();
  const [userComments, setuserComments] = useState(mockdata);

  const [userComment, setuserComment] = useState('');

  const onChange = e => setuserComment(e.target.value);

  const onClick = e => {
    if (!inputRef.current.value) {
      alert('댓글을 입력해주세요');
    } else {
      setuserComments([
        ...userComments,
        {
          name: 'test1',
          comment: userComment,
          id: Math.random(),
          isLike: false,
        },
      ]);
      inputRef.current.value = null;
      setuserComment('');
    }
  };

  const onKeyupEnter = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onClick();
    }
  };

  return (
    <div id="mainfeed">
      <article id="article">
        <div className="writer">
          <div className="profile">
            <img src="/images/kiman/test.jpg" alt="writer profile img" />
            <div className="mainname">Wecode Bootcamp</div>
          </div>
          <div className="smallmenu">
            <i className="fas fa-ellipsis-h" />
          </div>
        </div>
        <div className="feedimg">
          <img
            className="mainimg"
            src="/images/kiman/test.jpg"
            alt="main feed img"
          />
        </div>
        <div className="commentbox">
          <div className="smalllogo">
            <div className="smalllogoleft">
              <i id="likeheart" className="fas fa-heart" />
              <i className="far fa-comment" />
              <i className="fas fa-external-link-alt" />
            </div>
            <div className="smalllogoright">
              <i className="far fa-bookmark" />
            </div>
          </div>
          <div className="like" />
          <div className="comment">
            <ul>
              {userComments &&
                userComments.map((com, idx) => {
                  return (
                    <AddComment
                      userComments={userComments}
                      setuserComments={setuserComments}
                      com={com}
                      key={idx}
                    />
                    // <li key={idx} id={id}>
                    //   <div className="userwriteall">
                    //     <div className="userwrite">
                    //       <div className="userid">{com.name}</div>
                    //       <div className="usercommnet">{com.comment}</div>
                    //       <button className="hidden">X</button>
                    //     </div>
                    //     <CommentLike />
                    //   </div>
                    // </li>
                  );
                })}
            </ul>
          </div>
          <div className="commentinputbox">
            <input
              maxlength="70"
              type="text"
              placeholder="댓글달기..."
              onChange={onChange}
              onKeyUp={onKeyupEnter}
              ref={inputRef}
            />
            <button className="commentbtn" onClick={onClick}>
              게시
            </button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default MainFeed;
