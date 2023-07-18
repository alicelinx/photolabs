import React from 'react';

import '../styles/TopicListItem.scss';

const TopicListItemSkeleton = () => {

  return (
    <div>
      <span>
        <img className="topic-list__item-s" src='https://via.placeholder.com/1080x1080/eee?text=%20%E2%80%8C' />
      </span>
    </div>

  );
};

export default TopicListItemSkeleton;