import React, { useState, useEffect } from 'react';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';

import Feed from './Feed/Feed';

const Main = () => {
  const [feeds, setFeeds] = useState([]);
  // const [comments, setComments] = useState([]);
  // const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData.json')
      .then(res => res.json())
      .then(data => {
        setFeeds(data);
        // setComments(data);
        // setData(data);
      });
  }, []);

  console.log(feeds);
  return (
    <div className="mainPage">
      <Nav />
      <main>
        <div className="feeds">
          <div className="feedWrap">
            {feeds.map((feed, idx) => (
              <Feed feed={feed} key={idx} feedComments={feed.comment} />
            ))}
            {/* {[...Array(data.length)].map((item, i) => (
              <Feed comments={comments} setComments={setComments} key={i} />
            ))} */}
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
              {' '}
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
