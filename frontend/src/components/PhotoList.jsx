import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo, index) => <PhotoListItem key={index} src={photo.urls.regular} photo={photo} toggleLike={props.toggleLike} photoId={photo.id} openModal={props.openModal} />)}
    </ul>
  );
};

export default PhotoList;