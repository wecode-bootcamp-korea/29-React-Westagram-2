import './Main.scss';
import '../../../../src/common.scss';
import '../../../../src/reset.scss';
import { useState, useEffect } from 'react';

import Nav from '../../../../src/components/Nav/Nav';
import MainFeed from './MainFeed/MainFeed';
import StoryData from './MainFeed/Othersdata/StoryData';
import PushData from './MainFeed/Othersdata/PushData';

const Main = () => {
  const [mockDatas, setMockDatas] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/data/commentData-kiman.json')
      .then(res => res.json())
      .then(data => setMockDatas(data));
  }, []);
  return (
    <div id="total">
      <Nav />
      <main id="main">
        <div id="mainfeedbox">
          {mockDatas &&
            mockDatas.map((mockdata, idx) => {
              return <MainFeed mockdata={mockdata} key={idx} />;
            })}
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
              {StoryData.map(con => {
                return (
                  <div className="storycontent" key={con.id}>
                    <img src={con.img} alt={con.alt} />
                    <div className="storywriters">
                      <div className="storywriter">{con.writer}</div>
                      <div className="storytimelog">{con.timelog}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="push">
            <div className="pushtitle">
              <div className="pushleft">회원님을 위한 추천</div>
              <div className="pushright">모두 보기</div>
            </div>
            <div className="pushcontents">
              {PushData.map(con => {
                return (
                  <div className="pushcontent" key={con.id}>
                    <div className="pushinf">
                      <img src={con.img} alt={con.alt} />
                      <div className="pushwriters">
                        <div className="pushwriter">{con.writer}</div>
                        <div className="pushothers">{con.others}</div>
                      </div>
                    </div>
                    <div className="pushfollow">팔로우</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Main;
