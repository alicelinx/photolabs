import { useReducer, useEffect } from 'react';
import reducer from '../reducer';
const initialState = {
  newPhotos: [],
  likedPhotos: false,
  isModalOpen: false,
  viewedPhoto: null,
  similarPhotos: null,
  likedPhotoIds: [],
  topics: [],
  topic: null
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('/api/photos')
      .then(res => res.json())
      .then(data => {
        dispatch({ type: "UPDATE_PHOTOS", data });
      });
    fetch('/api/topics')
      .then(res => res.json())
      .then(data => dispatch({ type: 'UPDATE_TOPICS', data }));
  }, []);

  // fetch photos based on topic id
  useEffect(() => {
    if (state.topic) {
      fetch(`/api/topics/photos/${state.topic}`)
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
  }, [state.topic]);

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
    dispatch({ type: 'SET_TOPIC', data: id });
  };

  const clearTopic = () => {
    dispatch({ type: 'SET_TOPIC', data: null });
  };


  return {
    state,
    dispatch,
    toggleLike,
    toggleModal,
    toggleTopic,
    clearTopic
  };
};

export default useApplicationData;