import React, { useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = function(props) {
  const clickHandler = () => {
    props.toggleLike(props.photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={clickHandler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={!props.isLiked ? '#EEEEEE' : '#db0d0d'} />
      </div>
    </div>
  );
};

export default PhotoFavButton;