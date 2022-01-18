import React, { useRef, useState } from 'react';
import CommentItem from '../CommentItem/CommentItem';
import './Feed.scss';

const Feed = ({ feed, feedComments }) => {
  const [isFeedLike, setIsFeedLike] = useState(feed.feedLike);
  const [isCommentLike, setIsCommentLike] = useState(false);
  const [comments, setComments] = useState(feedComments);
  const [commentInput, setCommentInput] = useState('');

  const inputRef = useRef(null);
  const onChange = e => {
    setCommentInput(e.target.value);
  };

  const onClickAdd = e => {
    setComments([
      ...comments,
      {
        userName: 'sekkitdo',
        content: commentInput,
        id: Math.random(),
        isLiked: isCommentLike,
      },
    ]);
    inputRef.current.value = '';
    inputRef.current.focus();
  };

  const onClickLike = e => {
    setIsFeedLike(!isFeedLike);
  };

  return (
    <article>
      <div className="post">
        <div className="post__header">
          <div className="post__header__profile">
            <img src={feed.selfiImg} alt="europe_jeongdo" />
            <a href="/#">Seokkitdo</a>
          </div>
          <i className="fas fa-ellipsis-h" />
        </div>
        <div className="post__content">
          <img src={feed.feedImg} alt="europe_jeongdo" />
        </div>
        <div className="post__commentWrap">
          <div className="post__comment">
            <div className="post__comment__icons">
              {isFeedLike ? (
                <i class="fas fa-heart on" onClick={onClickLike} />
              ) : (
                <i className="far fa-heart heart " onClick={onClickLike} />
              )}
              <i class="far fa-comment" />
              <i class="fas fa-upload" />
            </div>
            <i className="far fa-bookmark" />
          </div>

          <div className="post__comment__writer">
            <img src="images/jeongdo/europe.jpg" alt="europe_jeongdo" />
            <span>
              <a href="/#">somebody</a>님 외 <span>10명</span>이 좋아합니다
            </span>
          </div>
          <span className="post__myComment">
            <a href="/#">Seokkitdo</a>
            <span>
              위코드에서 공부중...&nbsp;
              <button className="rmBack">더보기</button>
            </span>
          </span>

          <div className="post__comment__guest-Wrap">
            {comments.map((comment, idx) => (
              <CommentItem
                comment={comment}
                key={idx}
                setIsCommentLike={setIsCommentLike}
                setComments={setComments}
                id={comment.id}
                comments={comments}
              />
            ))}
          </div>

          <time role="presentation" className="postTime">
            21시간전
          </time>
        </div>

        <div className="post__addComment">
          <i className="far fa-smile" />
          <textarea
            type="text"
            placeholder="댓글 달기..."
            className="commentInput"
            required
            onChange={onChange}
            ref={inputRef}
          />
          <button className="submitBtn" onClick={onClickAdd}>
            게시
          </button>
        </div>
      </div>
    </article>
  );
};

export default Feed;
