
import React from 'react';
import PhotoFavButton from './PhotoFavButton';
import '../styles/PhotoListItem.scss';

const PhotoListItem = (props) => {
  return (
    <div className='photo-list__item'>
      {/* <span>Username: {props.username}</span>
      <span><img className='photo-list__user-profile' src={props.profile} /></span> */}
      <PhotoFavButton />
      <img className='photo-list__image' src={props.imageSource} />
    </div>
  );
};

PhotoListItem.defaultProps = {
  "id": "1",
  "location": {
    "city": "Montreal",
    "country": "Canada"
  },
  "imageSource": `${process.env.PUBLIC_URL}/Image-1-Regular.jpeg`,
  "username": "Joe Example",
  "profile": `${process.env.PUBLIC_URL}/profile-1.jpg`
};

export default PhotoListItem;