import React, { useState, useRef } from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import CommentItem from './CommentItem/CommentItem';

const Main = () => {
  const inputRef = useRef(null);
  const [comments, setComments] = useState([
    { name: 'guest1', comment: '요를레히리', id: Math.random() },
  ]);

  const [commentInput, setCommentInput] = useState('');

  const onChange = e => {
    setCommentInput(e.target.value);
  };

  const onClick = e => {
    setComments([
      ...comments,
      { name: 'gueset1', comment: commentInput, id: Math.random() },
    ]);
    inputRef.current.value = '';
    // inputRef.current.fucus();
  };
  return (
    <div className="mainPage">
      <Nav />
      <main>
        <div className="feeds">
          <div className="feedWrap">
            <article>
              <div className="post">
                <div className="post__header">
                  <div className="post__header__profile">
                    <img
                      src="/images/jeongdo/europe.jpg"
                      alt="europe_jeongdo"
                    />
                    <a href="/#">Seokkitdo</a>
                  </div>
                  <i className="fas fa-ellipsis-h" />
                </div>
                <div className="post__content">
                  <img src="/images/jeongdo/europe.jpg" alt="europe_jeongdo" />
                </div>
                <div className="post__commentWrap">
                  <div className="post__comment">
                    <div className="post__comment__icons">
                      <i class="fas fa-heart heart on" />
                      <i class="far fa-comment" />
                      <i class="fas fa-upload" />
                    </div>
                    <i className="far fa-bookmark" />
                  </div>

                  <div className="post__comment__writer">
                    <img src="images/jeongdo/europe.jpg" alt="europe_jeongdo" />
                    <span>
                      <a href="/#">somebody</a>님 외 <span>10명</span>이
                      좋아합니다
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
                    {comments &&
                      comments.map((comment, idx) => (
                        <CommentItem
                          comment={comment}
                          id={comment.id}
                          key={idx}
                          setComments={setComments}
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
                  <button className="submitBtn" onClick={onClick}>
                    게시
                  </button>
                </div>
              </div>
            </article>
          </div>
          <aside>
            <div className="aside__profile">
              <img src="images/jeongdo/europe.jpg" alt="europe_jeongdo" />
              <div className="aside__profile__info">
                <a href="/#">Seokkitdo</a>
                <p>징도박사</p>
              </div>
            </div>

            <div className="aside__story">
              <div className="aside__story-title">
                <p>스토리</p>
                <p>모두 보기</p>
              </div>
              <div className="aside__story-profileWrap">
                <div className="aside__story-profile">
                  <div className="aside__story-profile__circle">
                    <img src="images/jeongdo/messi.jpg" alt="europe_jeongdo" />
                  </div>
                </div>
                <div className="aside__story-profile-info">
                  <div className="aside__story-profile-name">
                    <p>Lionel Messi</p>
                    <p>1시간전</p>
                  </div>
                </div>
              </div>

              <div className="aside__story-profileWrap">
                <div className="aside__story-profile">
                  <div className="aside__story-profile__circle">
                    <img src="images/jeongdo/kianu.jpg" alt="europe_jeongdo" />
                  </div>
                </div>
                <div className="aside__story-profile-info">
                  <div className="aside__story-profile-name">
                    <p>Keanu Reeves</p>
                    <p>3시간전</p>
                  </div>
                </div>
              </div>

              <div className="aside__story-profileWrap">
                <div className="aside__story-profile">
                  <div className="aside__story-profile__circle">
                    <img
                      src="images/jeongdo/brendan.jpg"
                      alt="europe_jeongdo"
                    />
                  </div>
                </div>
                <div className="aside__story-profile-info">
                  <div className="aside__story-profile-name">
                    <p>Brendan Eich</p>
                    <p>7시간전</p>
                  </div>
                </div>
              </div>

              <div className="aside__story-profileWrap">
                <div className="aside__story-profile">
                  <div className="aside__story-profile__circle">
                    <img src="images/jeongdo/harry.jpg" alt="europe_jeongdo" />
                  </div>
                </div>
                <div className="aside__story-profile-info">
                  <div className="aside__story-profile-name">
                    <p>Harry Porter</p>
                    <p>2시간전</p>
                  </div>
                </div>
              </div>

              <div className="aside__story-profileWrap">
                <div className="aside__story-profile">
                  <div className="aside__story-profile__circle">
                    <img src="images/jeongdo/jack.jpg" alt="europe_jeongdo" />
                  </div>
                </div>
                <div className="aside__story-profile-info">
                  <div className="aside__story-profile-name">
                    <p>Jonny Depp</p>
                    <p>5시간전</p>
                  </div>
                </div>
              </div>

              <div className="aside__story-profileWrap">
                <div className="aside__story-profile">
                  <div className="aside__story-profile__circle">
                    <img src="images/jeongdo/coner.jpg" alt="europe_jeongdo" />
                  </div>
                </div>
                <div className="aside__story-profile-info">
                  <div className="aside__story-profile-name">
                    <p>Conor McGregor</p>
                    <p>1시간전</p>
                  </div>
                </div>
              </div>

              <div className="aside__story-profileWrap">
                <div className="aside__story-profile">
                  <div className="aside__story-profile__circle">
                    <img
                      src="images/jeongdo/cillian.jpg"
                      alt="europe_jeongdo"
                    />
                  </div>
                </div>
                <div className="aside__story-profile-info">
                  <div className="aside__story-profile-name">
                    <p>Cillian Murphy</p>
                    <p>1시간전</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aside__recommendation">
              <div className="aside__recommendation-title">
                <p>회원님을 위한 추천</p>
                <p>모두 보기</p>
              </div>

              <div className="aside__recommendation-profileWrap">
                <div className="aside__recommendation-profile">
                  <div className="aside__recommendation-profile__circle">
                    <img
                      src="images/jeongdo/hisaishi.jpg"
                      alt="europe_jeongdo"
                    />
                  </div>

                  <div className="aside__recommendation-profile-info">
                    <div className="aside__recommendation-profile-name">
                      <p>Joe Hisaishi</p>
                      <p>7시간전</p>
                    </div>
                  </div>
                </div>
                <button className="aside__recommendation-profile__follow">
                  팔로우
                </button>
              </div>

              <div className="aside__recommendation-profileWrap">
                <div className="aside__recommendation-profile">
                  <div className="aside__recommendation-profile__circle">
                    <img src="images/jeongdo/robert.jpg" alt="europe_jeongdo" />
                  </div>

                  <div className="aside__recommendation-profile-info">
                    <div className="aside__recommendation-profile-name">
                      <p>Robert Downey Jr.</p>
                      <p>11시간전</p>
                    </div>
                  </div>
                </div>
                <button className="aside__recommendation-profile__follow">
                  팔로우
                </button>
              </div>

              <div className="aside__recommendation-profileWrap">
                <div className="aside__recommendation-profile">
                  <div className="aside__recommendation-profile__circle">
                    <img
                      src="images/jeongdo/Kristen Stewart.png"
                      alt="europe_jeongdo"
                    />
                  </div>

                  <div className="aside__recommendation-profile-info">
                    <div className="aside__recommendation-profile-name">
                      <p>Kristen Stewart</p>
                      <p>3시간전</p>
                    </div>
                  </div>
                </div>
                <button className="aside__recommendation-profile__follow">
                  팔로우
                </button>
              </div>

              <div className="aside__recommendation-profileWrap">
                <div className="aside__recommendation-profile">
                  <div className="aside__recommendation-profile__circle">
                    <img
                      src="images/jeongdo/Dustin Poirier.jpg"
                      alt="europe_jeongdo"
                    />
                  </div>

                  <div className="aside__recommendation-profile-info">
                    <div className="aside__recommendation-profile-name">
                      <p>Dustin Poirier</p>
                      <p>4시간전</p>
                    </div>
                  </div>
                </div>
                <button className="aside__recommendation-profile__follow">
                  팔로우
                </button>
              </div>

              <div className="aside__recommendation-profileWrap">
                <div className="aside__recommendation-profile">
                  <div className="aside__recommendation-profile__circle">
                    <img
                      src="images/jeongdo/Rachel McAdams.jpg"
                      alt="europe_jeongdo"
                    />
                  </div>

                  <div className="aside__recommendation-profile-info">
                    <div className="aside__recommendation-profile-name">
                      <p>Rachel McAdams</p>
                      <p>13시간전</p>
                    </div>
                  </div>
                </div>
                <button className="aside__recommendation-profile__follow">
                  팔로우
                </button>
              </div>
            </div>
            <div className="aside__footer">
              <p>Instagram 정보 · 지원· 홍보 센터·API</p>
              <p>채용 정보 · 개인정보처리방침· 약관·</p>
              <p>디렉터리 · 프로필· 해시태그·언어</p>
              <p>2019 INSTAGRAM</p>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
};

export default Main;
