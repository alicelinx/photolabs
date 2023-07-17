import React from 'react';

import '../styles/TopNavigationBar.scss';

import TopicList from './TopicList';

const TopNavigationBar = (props) => {

  const handleClick = () => {
    props.clearTopic(props.topicId);
  };

  return (
    <div className="top-nav-bar">
      <span
        className="top-nav-bar__logo"
        onClick={handleClick}
      >
        PhotoLabs
      </span>
      <TopicList
        toggleLike={props.toggleLike}
        likedPhotos={props.likedPhotos}
        topics={props.topics}
        toggleTopic={props.toggleTopic}
      />
    </div>
  );
};

export default TopNavigationBar;