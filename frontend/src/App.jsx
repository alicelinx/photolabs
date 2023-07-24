import React from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import useApplicationData from './hooks/useApplicationData';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {
  const { state, toggleLike, toggleModal, toggleTopic, clearTopic } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        state={state}
        toggleLike={toggleLike}
        toggleModal={toggleModal}
        toggleTopic={toggleTopic}
        clearTopic={clearTopic}
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

export default App;