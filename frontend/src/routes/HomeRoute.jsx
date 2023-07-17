import React, { useState, useEffect } from "react";

import '../styles/HomeRoute.scss';

import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoDetailsModal from "./PhotoDetailsModal";
import useApplicationData from "../hooks/useApplicationData";

const HomeRoute = () => {
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState(null);
  const { state, dispatch } = useApplicationData();

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "UPDATE_PHOTOS", data });
      });
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => setTopics(data));
  }, []);

  // fetch photos based on topic id
  useEffect(() => {
    if (topic) {
      fetch(`/api/topics/photos/${topic}`)
        .then(res => res.json())
        .then(data => {
          dispatch({ type: "UPDATE_PHOTOS", data });
        });
    }
  }, [topic]);

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

  const toggleTopic = (id) => {
    setTopic(id);
  };


  return (
    <div className="home-route">
      <TopNavigationBar
        likedPhotos={state.likedPhotos}
        topics={topics}
        toggleTopic={toggleTopic}
      />
      <PhotoList
        photos={state.newPhotos}
        toggleLike={toggleLike}
        openModal={toggleModal}
      />
      {state.isModalOpen &&
        <PhotoDetailsModal
          viewedPhoto={state.viewedPhoto}
          closeModal={toggleModal}
          photoSrc={state.viewedPhoto ? state.viewedPhoto.urls.full : ''}
          similarPhotos={state.similarPhotos}
          toggleLike={toggleLike}
        />
      }
    </div>
  );
};

export default HomeRoute;