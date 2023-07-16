import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';
import FavIcon from './FavIcon';

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic, index) => <TopicListItem key={index} title={topic.title} />)}
      <div className="topic-list__item">
        <FavIcon
          fill={'#db0d0d'}
          width={20}
          height={17}
          outlineWidth={2}
          stroke={'#C80000'}
          displayAlert={props.likedPhotos}
        />
      </div>
    </div>
  );
};

export default TopicList;