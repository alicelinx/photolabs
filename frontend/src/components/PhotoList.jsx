import React from 'react';

import '../styles/PhotoList.scss';

import PhotoListItem from './PhotoListItem';
import PhotoListItemSkeleton from './PhotoListItemSkeleton';

const PhotoList = (props) => {

  const placeholderPhotos = [...Array(10)];

  return (
    <ul className="photo-list">
      {props.isLoading && placeholderPhotos.map((_, index) => <PhotoListItemSkeleton key={index} />)}
      {!props.isLoading && props.photos.map((photo, index) =>
        <PhotoListItem
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
        />
      )}
    </ul>
  );
};

export default PhotoList;