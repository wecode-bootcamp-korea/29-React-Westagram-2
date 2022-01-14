import '../../../common.scss';
import './Main.scss';
import Nav from '../../../components/Nav/Nav';
import FeedCard from './FeedCard/FeedCard';

function Main() {
  return (
    <div className="main-namju-container">
      <Nav />
      <main className="main-namju" id="main">
        <section className="feed" id="feed">
          <FeedCard
            profileSrc="images/namju/profile-img.jpeg"
            name="southpole_pbf"
            feedSrc="/images/namju/feed-img.jpeg"
            likes="69"
            caption="새해 복 많이 받으세요"
            time="42분"
          />

          <FeedCard
            profileSrc="images/namju/profile-img-2.jpeg"
            name="hellonix"
            feedSrc="/images/namju/feed-img-2.jpeg"
            likes="129"
            caption="꽃이랑🌸"
            time="1시간"
          />

          <FeedCard
            profileSrc="images/namju/profile-img-3.jpeg"
            name="chansongjo"
            feedSrc="/images/namju/feed-img-3.jpeg"
            likes="14"
            caption="여행길. 🏞"
            time="2시간"
          />
        </section>

        <aside className="sidebar" id="sideBar">
          <h1 className="info-me">
            <a href="#">
              <div className="profile-pic-wrap">
                <img
                  src="./images/namju/profile-img.jpeg"
                  alt="southpole_pbf profile picture"
                  className="profile-pic"
                />
              </div>
              <div className="profile-info">
                <strong>southpole_pbf</strong>
                <div>namju yun</div>
              </div>
            </a>
          </h1>

          <section className="story">
            <div className="story-title">
              <h1>스토리</h1>
              <h2>
                <a href="">모두 보기</a>
              </h2>
            </div>

            <ul className="story-list" id="storyList">
              <li className="story-item">
                <button type="button" className="img-gradient">
                  <div className="story-img-wrap">
                    <img src="./images/namju/like-info-img.jpeg" alt="" />
                  </div>
                  <div className="gradient" />
                </button>
                <div className="story-item-desc">
                  <a href="#">
                    <strong>dassboss</strong>
                  </a>
                  <span>10분 전</span>
                </div>
              </li>

              <li className="story-item">
                <button type="button" className="img-gradient">
                  <div className="story-img-wrap">
                    <img src="./images/namju/profile-img-2.jpeg" alt="" />
                  </div>
                  <div className="gradient" />
                </button>
                <div className="story-item-desc">
                  <a href="#">
                    <strong>hellonix</strong>
                  </a>
                  <span>12분 전</span>
                </div>
              </li>

              <li className="story-item">
                <button type="button" className="img-gradient">
                  <div className="story-img-wrap">
                    <img src="./images/namju/profile-img-3.jpeg" alt="" />
                  </div>
                  <div className="gradient" />
                </button>
                <div className="story-item-desc">
                  <a href="#">
                    <strong>chansongjo</strong>
                  </a>
                  <span>23분 전</span>
                </div>
              </li>

              <li className="story-item">
                <button type="button" className="img-gradient">
                  <div className="story-img-wrap">
                    <img src="./images/namju/profile-img-default.jpeg" alt="" />
                  </div>
                  <div className="gradient" />
                </button>
                <div className="story-item-desc">
                  <a href="#">
                    <strong>awnerqqx</strong>
                  </a>
                  <span>30분 전</span>
                </div>
              </li>
            </ul>
          </section>

          <section className="rec">
            <div className="rec-title">
              <h1>회원님을 위한 추천</h1>
              <h2>
                <a href="">모두 보기</a>
              </h2>
            </div>

            <ul className="rec-list">
              <li className="rec-item">
                <a href="#" className="rec-profile">
                  <div className="rec-img-wrap">
                    <img src="./images/namju/like-info-img.jpeg" alt="" />
                  </div>
                  <div className="rec-item-desc">
                    <strong>dassboss</strong>
                    <span>chansongjo님 외 4명이 팔로우 중입니다</span>
                  </div>
                </a>
                <button>팔로우</button>
              </li>
              <li className="rec-item">
                <a href="#" className="rec-profile">
                  <div className="rec-img-wrap">
                    <img src="./images/namju/like-info-img.jpeg" alt="" />
                  </div>
                  <div className="rec-item-desc">
                    <strong>dassboss</strong>
                    <span>chansongjo님 외 4명이 팔로우 중입니다</span>
                  </div>
                </a>
                <button>팔로우</button>
              </li>
              <li className="rec-item">
                <a href="#" className="rec-profile">
                  <div className="rec-img-wrap">
                    <img src="./images/namju/like-info-img.jpeg" alt="" />
                  </div>
                  <div className="rec-item-desc">
                    <strong>dassboss</strong>
                    <span>chansongjo님 외 4명이 팔로우 중입니다</span>
                  </div>
                </a>
                <button>팔로우</button>
              </li>
            </ul>
          </section>

          <section className="terms">
            <div className="terms-link">
              <a href="">Instagram 정보</a>
              <a href="">지원</a>
              <a href="">홍보 센터</a>
              <a href="">API</a>
              <a href="">채용 정보</a>
              <a href="">개인정보처리방침</a>
              <a href="">약관</a>
              <a href="">디렉터리</a>
              <a href="">프로필</a>
              <a href="">해시태그</a>
              <a href="">언어</a>
            </div>
            <div className="copyright">© 2019 INSTAGRAM</div>
          </section>
        </aside>
      </main>
    </div>
  );
}

export default Main;
