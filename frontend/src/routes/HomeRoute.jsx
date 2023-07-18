import React, { useState, useEffect } from "react";

import '../styles/HomeRoute.scss';

import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";
import PhotoDetailsModal from "./PhotoDetailsModal";
import useApplicationData from "../hooks/useApplicationData";

const HomeRoute = () => {
  const [topics, setTopics] = useState([]);
  const [topic, setTopic] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const { state, dispatch } = useApplicationData();

  useEffect(() => {
    setIsLoading(true);
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "UPDATE_PHOTOS", data });
        setIsLoading(false);
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
    } else { // remove current topic
      fetch('/api/photos')
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

  const clearTopic = () => {
    setTopic(null);
  };

  return (
    <div className="home-route">
      <TopNavigationBar
        likedPhotos={state.likedPhotos}
        topics={topics}
        toggleTopic={toggleTopic}
        clearTopic={clearTopic}
        isLoading={isLoading}
      />
      <PhotoList
        photos={state.newPhotos}
        toggleLike={toggleLike}
        openModal={toggleModal}
        isLoading={isLoading}
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