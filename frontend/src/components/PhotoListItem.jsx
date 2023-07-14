
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {

  const logPhotoInfo = () => {
    props.openModal(props.photoId);
  };

  return (
    <div className='photo-list__item'>
      <PhotoFavButton toggleLike={props.toggleLike} photoId={props.photoId} />
      <img className='photo-list__image' src={props.src} onClick={logPhotoInfo} />
      <br />
      <div className='photo-list__user-details'>
        <span><img className='photo-list__user-profile' src={props.userImage} /></span>
        <span className='photo-list__user-info'>{props.userName}
          <br /><span className='photo-list__user-location'>{props.userLocationCity}, {props.userLocationCountry}</span>
        </span>
      </div>
    </div>
  );
};


export default PhotoListItem;