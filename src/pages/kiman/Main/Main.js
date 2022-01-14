import './Main.scss';
import '../../../reset.scss';
import '../../../common.scss';
import Nav from '../../../components/Nav/Nav';
import MainFeed from './MainFeed/MainFeed';

const Main = () => {
  return (
    <>
      <Nav />
      <main id="main">
        <div id="mainfeedbox">
          <MainFeed />
          <MainFeed />
          <MainFeed />
        </div>
        <div id="mainright">
          <div id="rightdetail">
            <div className="myinf">
              <img src="/images/kiman/test.jpg" alt="my profile img" />
              <div className="myname">
                <div className="mymainname">Wecode_Bootcamp</div>
                <div className="mysubname">Wecode | 위코드</div>
              </div>
            </div>
          </div>
          <div className="story">
            <div className="storytitle">
              <div className="stotyleft">스토리</div>
              <div className="storyright">모두 보기</div>
            </div>
            <div className="storycontents">
              <div className="storycontent">
                <img src="/images/kiman/test.jpg" alt="stroy profile img" />
                <div className="storywriters">
                  <div className="storywriter">Wecode_Bootcamp</div>
                  <div className="storytimelog">1시간 전</div>
                </div>
              </div>
              <div className="storycontent">
                <img src="/images/kiman/test.jpg" alt="stroy profile img" />
                <div className="storywriters">
                  <div className="storywriter">Wecode_Bootcamp</div>
                  <div className="storytimelog">1시간 전</div>
                </div>
              </div>
              <div className="storycontent">
                <img src="/images/kiman/test.jpg" alt="stroy profile img" />
                <div className="storywriters">
                  <div className="storywriter">Wecode_Bootcamp</div>
                  <div className="storytimelog">1시간 전</div>
                </div>
              </div>
              <div className="storycontent">
                <img src="/images/kiman/test.jpg" alt="stroy profile img" />
                <div className="storywriters">
                  <div className="storywriter">Wecode_Bootcamp</div>
                  <div className="storytimelog">1시간 전</div>
                </div>
              </div>
            </div>
          </div>

          <div className="push">
            <div className="pushtitle">
              <div className="pushleft">회원님을 위한 추천</div>
              <div className="pushright">모두 보기</div>
            </div>
            <div className="pushcontents">
              <div className="pushcontent">
                <div className="pushinf">
                  <img src="/images/kiman/test.jpg" alt="push profile img" />
                  <div className="pushwriters">
                    <div className="pushwriter">Wecode_Bootcamp</div>
                    <div className="pushothers">
                      ???님 외 2명이 팔로우 합니다.
                    </div>
                  </div>
                </div>
                <div className="pushfollow">팔로우</div>
              </div>
              <div className="pushcontent">
                <div className="pushinf">
                  <img src="/images/kiman/test.jpg" alt="push profile img" />
                  <div className="pushwriters">
                    <div className="pushwriter">Wecode_Bootcamp</div>
                    <div className="pushothers">
                      ???님 외 2명이 팔로우 합니다.
                    </div>
                  </div>
                </div>
                <div className="pushfollow">팔로우</div>
              </div>
              <div className="pushcontent">
                <div className="pushinf">
                  <img src="/images/kiman/test.jpg" alt="push profile img" />
                  <div className="pushwriters">
                    <div className="pushwriter">Wecode_Bootcamp</div>
                    <div className="pushothers">
                      ???님 외 2명이 팔로우 합니다.
                    </div>
                  </div>
                </div>
                <div className="pushfollow">팔로우</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Main;
