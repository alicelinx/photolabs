import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo, index) => <PhotoListItem
        key={index}
        src={photo.urls.regular}
        photo={photo}
        toggleLike={props.toggleLike}
        photoId={photo.id}
        openModal={props.openModal}
        userName={photo.user.name}
        userImage={photo.user.profile}
        userLocationCity={photo.location.city}
        userLocationCountry={photo.location.country}
        isLiked={photo.isLiked}
      />)}
    </ul>
  );
};

export default PhotoList;