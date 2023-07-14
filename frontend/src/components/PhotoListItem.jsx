
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  return (
    <div className='photo-list__item'>
      {/* <span>Username: {props.username}</span>
      <span><img className='photo-list__user-profile' src={props.profile} /></span> */}
      <PhotoFavButton toggleLike={props.toggleLike} photoId={props.photoId} />
      <img className='photo-list__image' src={props.src} />
    </div>
  );
};


export default PhotoListItem;