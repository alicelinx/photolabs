import { React, useState } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import '../styles/HomeRoute.scss';
import photos from '../mocks/photos.js';

const HomeRoute = () => {
  const [newPhotos, setNewPhotos] = useState(photos.map(photo => {
    return {
      ...photo,
      isLiked: false
    };
  }));

  const [likedPhotos, setLikedPhotos] = useState(false);

  const handleShowLiked = (newPhotoArr) => {
    let isLiked = false;
    for (const photo of newPhotoArr) {
      if (photo.isLiked) {
        isLiked = true;
      }
    }
    setLikedPhotos(isLiked);
  };

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

    handleShowLiked(newPhotoArr);
    setNewPhotos(newPhotoArr);
  };

  return (
    <div className="home-route">
      <TopNavigationBar toggleLike={toggleLike} likedPhotos={likedPhotos} />
      <PhotoList photos={newPhotos} toggleLike={toggleLike} />
    </div>
  );
};

export default HomeRoute;