import React from 'react';
import PhotoListItem from './PhotoListItem';
import '../styles/PhotoList.scss';
import photos from '../mocks/photos.js';

const PhotoList = () => {
  return (
    <ul className="photo-list">
      {photos.map((photo, index) => <PhotoListItem key={index} src={photo.urls.regular} />)}
    </ul>
  );
};

export default PhotoList;