import React from 'react';

import '../styles/TopicList.scss';
import TopicListItem from './TopicListItem';
import FavIcon from './FavIcon';

const TopicList = (props) => {
  return (
    <div className="top-nav-bar__topic-list">
      {props.topics.map((topic, index) => <TopicListItem key={index} title={topic.title} />)}
      <div className="topic-list__item">
        <FavIcon fill={'#db0d0d'} />
      </div>
    </div>
  );
};

TopicList.defaultProps = {
  topics: [
    {
      "id": "1",
      "slug": "topic-1",
      "title": "Nature"
    },
    {
      "id": "2",
      "slug": "topic-2",
      "title": "Travel"
    },
    {
      "id": "3",
      "slug": "topic-3",
      "title": "People"
    },
  ]
};
export default TopicList;