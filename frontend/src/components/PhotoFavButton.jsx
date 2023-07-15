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
        <FavIcon
          width={20}
          height={17}
          fill={!props.isLiked ? '#EEEEEE' : '#db0d0d'}
          outlineWidth={2}
          stroke={'#C80000'}
        />
      </div>
    </div>
  );
};

export default PhotoFavButton;