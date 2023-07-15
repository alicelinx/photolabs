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

  const [viewedPhoto, setViewedPhoto] = useState(null);

  const [similarPhotos, setSimilarPhotos] = useState(null);

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
    let selectedPhoto = '';
    let similarPhotoArr = [];
    newPhotos.forEach((photo) => {
      if (photo.id === id) {
        selectedPhoto = photo;
        setViewedPhoto(photo);
        Object.keys(photo.similarPhotos).forEach((key) => {
          similarPhotoArr.push(photo.similarPhotos[key]);
        });
      }
    });
    setSimilarPhotos(similarPhotoArr);
    setIsModalOpen(!isModalOpen);
  };


  return (
    <div className="home-route">
      <TopNavigationBar likedPhotos={likedPhotos} />
      <PhotoList photos={newPhotos} toggleLike={toggleLike} openModal={toggleModal} />
      {isModalOpen && <PhotoDetailsModal
        viewedPhoto={viewedPhoto}
        closeModal={toggleModal}
        photoSrc={viewedPhoto.urls.regular}
        similarPhotos={similarPhotos}
        toggleLike={toggleLike}
        photoId={viewedPhoto.id}
        isLiked={viewedPhoto.isLiked}
      />}
    </div>
  );
};

export default HomeRoute;