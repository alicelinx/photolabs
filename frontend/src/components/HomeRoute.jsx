import { React, useState } from "react";
import PhotoList from "./PhotoList";
import TopNavigationBar from "./TopNavigationBar";
import '../styles/HomeRoute.scss';
import photos from '../mocks/photos.js';

const HomeRoute = () => {
  const [newPhotos, setNewPhotos] = useState(photos.map(photo => {
    return {
      ...photo,
      isLiked: false
    };
  }));

  const toggleLike = function(id) {
    let newPhotoArr = [];
    for (const photo of newPhotos) {
      if (photo.id === id) {
        photo.isLiked = !photo.isLiked;
        newPhotoArr.push(photo);
      } else {
        newPhotoArr.push(photo);
      }
    }
    setNewPhotos(newPhotoArr);
  };

  return (
    <div className="home-route">
      <TopNavigationBar />
      <PhotoList photos={newPhotos} toggleLike={toggleLike} />
    </div>
  );
};

export default HomeRoute;