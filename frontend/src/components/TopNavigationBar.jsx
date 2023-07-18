import React from 'react';

import '../styles/TopNavigationBar.scss';

import TopicList from './TopicList';

const TopNavigationBar = (props) => {

  const handleClick = () => {
    props.clearTopic(props.topicId);
  };

  return (
    <div className="top-nav-bar">
      {props.isLoading && <img className='top-nav-bar__logo-s' src='https://via.placeholder.com/1080x1080/eee?text=%20%E2%80%8C' />}
      {!props.isLoading &&
        <span
          className="top-nav-bar__logo"
          onClick={handleClick}
        >
          PhotoLabs
        </span>
      }
      <TopicList
        toggleLike={props.toggleLike}
        likedPhotos={props.likedPhotos}
        topics={props.topics}
        toggleTopic={props.toggleTopic}
        isLoading={props.isLoading}
      />
    </div>
  );
};

export default TopNavigationBar;