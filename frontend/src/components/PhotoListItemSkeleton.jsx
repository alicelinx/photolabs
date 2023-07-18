import React from 'react';

import '../styles/PhotoListItem.scss';
import PhotoFavButton from './PhotoFavButton';

const PhotoListItemSkeleton = () => {

  return (
    <div className='photo-list__item'>
      <PhotoFavButton />
      <img
        className='photo-list__image'
        src='https://www.pulsecarshalton.co.uk/wp-content/uploads/2016/08/jk-placeholder-image.jpg'
      />
      <br />
      <div className='photo-list__user-details'>
        <span>
          <img
            className='photo-list__user-profile'
            src='https://media.istockphoto.com/id/1288129985/vector/missing-image-of-a-person-placeholder.jpg?s=1024x1024&w=is&k=20&c=6xw6BObnEkaAF12aIIfQ5NmcaA0M9f5ZwWaT_J6qo48='
          />
        </span>
        <span>
          <img className='photo-list__user-info-s' src='https://via.placeholder.com/1080x1080/eee?text=%20%E2%80%8C' />
          <br />
          <img className='photo-list__user-location-s' src='https://via.placeholder.com/1080x1080/eee?text=%20%E2%80%8C' />
        </span>
      </div>
    </div >
  );
};

export default PhotoListItemSkeleton;