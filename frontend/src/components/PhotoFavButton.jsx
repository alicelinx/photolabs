import React, { useCallback, useState } from 'react';

import { FavIcon } from './FavIcon';
import '../styles/PhotoFavButton.scss';

const PhotoFavButton = function(props) {

  const [status, setStatus] = useState('inactive');
  const toggleStatus = () => status === 'inactive' ? setStatus('active') : setStatus('inactive');
  const color = status === 'inactive' ? '#EEEEEE' : '#db0d0d';

  const clickHandler = () => {
    toggleStatus();
    props.toggleLike(props.photoId);
  };

  return (
    <div className="photo-list__fav-icon" onClick={clickHandler}>
      <div className="photo-list__fav-icon-svg">
        <FavIcon fill={color} />
      </div>
    </div>
  );
};

export default PhotoFavButton;