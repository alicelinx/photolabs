import React from 'react';

import '../styles/PhotoListItem.scss';

import PhotoFavButton from './PhotoFavButton';

const PhotoListItem = (props) => {

  const openModal = () => {
    props.openModal(props.photoId);
  };

  return (
    <div className='photo-list__item'>
      <PhotoFavButton
        toggleLike={props.toggleLike}
        photoId={props.photoId}
        isLiked={props.isLiked}
      />
      <img
        className='photo-list__image'
        src={props.src}
        onClick={openModal}
      />
      <br />
      <div className='photo-list__user-details'>
        <span>
          <img
            className='photo-list__user-profile'
            src={props.userImage}
          />
        </span>
        <span className='photo-list__user-info'>
          {props.userName}
          <br />
          <span className='photo-list__user-location'>
            {props.userLocationCity}, {props.userLocationCountry}
          </span>
        </span>
      </div>
    </div>
  );
};

export default PhotoListItem;