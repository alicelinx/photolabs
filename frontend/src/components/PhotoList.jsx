import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';
import photos from '../mocks/photos.js';

const PhotoList = (props) => {
  return (
    <ul className="photo-list">
      {props.photos.map((photo, index) => <PhotoListItem key={index} src={photo.urls.regular} photo={photo} toggleLike={props.toggleLike} photoId={photo.id} />)}
    </ul>
  );
};

export default PhotoList;