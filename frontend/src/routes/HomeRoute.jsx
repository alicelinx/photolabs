import React, { useState, useEffect } from "react";
import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import '../styles/HomeRoute.scss';
import PhotoDetailsModal from "./PhotoDetailsModal";
import useApplicationData from "../hooks/useApplicationData";

const HomeRoute = () => {
  // const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);
  const { state, dispatch } = useApplicationData();

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json()).then(data => {
        dispatch({ type: "INITIALIZE_DATA", data });
      });
    fetch('/api/topics')
      .then(res => res.json()).then(data => setTopics(data));
  }, []);

  const handleShowLiked = () => {
    dispatch({ type: 'SWITCH_PHOTO_IS_LIKED' });
  };

  const toggleLike = function(id) {
    dispatch({ type: 'TOGGLE_LIKE', data: id });
    handleShowLiked();
  };

  const toggleModal = (id) => {
    dispatch({ type: 'TOGGLE_MODAL', data: id });
  };


  return (
    <div className="home-route">
      <TopNavigationBar likedPhotos={state.likedPhotos} topics={topics} />
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