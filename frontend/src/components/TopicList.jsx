import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';
import FavIcon from './FavIcon';
import topics from '../mocks/topics.js';

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {topics.map((topic, index) => <TopicListItem key={index} title={topic.title} />)}
      <div className="topic-list__item">
        <FavIcon fill={'#db0d0d'} toggleLike={props.toggleLike} displayAlert={props.likedPhotos} />
      </div>
    </div>
  );
};

export default TopicList;