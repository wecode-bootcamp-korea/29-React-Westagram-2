import React from 'react';
import './ProfileModal.scss';

const ProfileModal = () => {
  return (
    <aside className="profile-modal" id="profileModal">
      <div id="triangle-profile" />
      <ul>
        <li className="profile-modal-item">
          <img alt="my profile" src="./images/profile.svg" />
          <div>프로필</div>
        </li>
        <li className="profile-modal-item">
          <img alt="my bookmarks" src="./images/bookmark.svg" />
          <div>저장됨</div>
        </li>
        <li className="profile-modal-item">
          <img alt="settings" src="./images/settings.svg" />
          <div>설정</div>
        </li>
        <li className="profile-modal-item logout">로그아웃</li>
      </ul>
    </aside>
  );
};

export default ProfileModal;
