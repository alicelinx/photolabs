import React, { useState } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import '../styles/HomeRoute.scss';
import PhotoDetailsModal from "./PhotoDetailsModal";
import useApplicationData from "../hooks/useApplicationData";

const HomeRoute = () => {
  const { state, dispatch } = useApplicationData();

  const handleShowLiked = () => {
    dispatch({ type: 'SWITCH_PHOTO_IS_LIKED' });
  };

  const toggleLike = function(id) {
    dispatch({ type: 'TOGGLE_LIKE', data: id });
    handleShowLiked();
  };

  const toggleModal = (id) => {
    console.log(id);
    dispatch({ type: 'TOGGLE_MODAL', data: id });
  };


  return (
    <div className="home-route">
      <TopNavigationBar likedPhotos={state.likedPhotos} />
      <PhotoList
        photos={state.newPhotos}
        toggleLike={toggleLike}
        openModal={toggleModal}
      />
      {state.isModalOpen && <PhotoDetailsModal
        viewedPhoto={state.viewedPhoto}
        closeModal={toggleModal}
        photoSrc={state.viewedPhoto ? state.viewedPhoto.urls.regular : ''}
        similarPhotos={state.similarPhotos}
        toggleLike={toggleLike}
      />}
    </div>
  );
};

export default HomeRoute;