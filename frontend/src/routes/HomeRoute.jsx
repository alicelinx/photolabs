import React from "react";

import '../styles/HomeRoute.scss';

import PhotoList from "../components/PhotoList";
import TopNavigationBar from "../components/TopNavigationBar";

const HomeRoute = ({ state, toggleLike, toggleModal, toggleTopic, clearTopic }) => {

  return (
    <div className="home-route">
      <TopNavigationBar
        likedPhotos={state.likedPhotos}
        topics={state.topics}
        toggleTopic={toggleTopic}
        clearTopic={clearTopic}
      />
      <PhotoList
        photos={state.newPhotos}
        toggleLike={toggleLike}
        openModal={toggleModal}
      />
    </div>
  );
};

export default HomeRoute;