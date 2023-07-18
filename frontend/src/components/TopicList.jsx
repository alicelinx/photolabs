import React from 'react';

import '../styles/TopicList.scss';

import TopicListItem from './TopicListItem';
import FavIcon from './FavIcon';
import TopicListItemSkeleton from './TopicListItemSkeleton';

const TopicList = (props) => {

  const placeholderTopics = [...Array(5)];

  return (
    <div className="top-nav-bar__topic-list">
      {props.isLoading && placeholderTopics.map((_, index) => <TopicListItemSkeleton key={index} />)}
      {!props.isLoading && props.topics.map((topic, index) =>
        <TopicListItem
          key={index}
          title={topic.title}
          toggleTopic={props.toggleTopic}
          topicId={topic.id}
        />
      )}
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