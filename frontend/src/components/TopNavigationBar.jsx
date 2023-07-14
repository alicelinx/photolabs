import React from 'react';

import '../styles/TopNavigationBar.scss';
import TopicList from './TopicList';

const TopNavigationBar = (props) => {
  return (
    <div className="top-nav-bar">
      <span className="top-nav-bar__logo">PhotoLabs</span>
      <TopicList toggleLike={props.toggleLike} likedPhotos={props.likedPhotos} />
    </div>
  );
};

export default TopNavigationBar;