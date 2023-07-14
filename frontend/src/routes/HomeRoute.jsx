import React, { useState } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import '../styles/HomeRoute.scss';
import photos from '../mocks/photos.js';
import PhotoDetailsModal from "./PhotoDetailsModal";

const HomeRoute = () => {
  const [newPhotos, setNewPhotos] = useState(photos.map(photo => {
    return {
      ...photo,
      isLiked: false
    };
  }));

  const [likedPhotos, setLikedPhotos] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  const toggleModal = (id) => {
    let chosenPhoto = '';
    photos.forEach((photo) => {
      if (photo.id === id) {
        chosenPhoto = photo;
      }
    });
    console.log(chosenPhoto);
    setIsModalOpen(!isModalOpen);
  };


  return (
    <div className="home-route">
      <TopNavigationBar toggleLike={toggleLike} likedPhotos={likedPhotos} />
      <PhotoList photos={newPhotos} toggleLike={toggleLike} openModal={toggleModal} />
      {isModalOpen && <PhotoDetailsModal closeModal={toggleModal} />}
    </div>
  );
};

export default HomeRoute;