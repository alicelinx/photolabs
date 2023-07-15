/* eslint-disable */
import { useReducer } from "react";
import photos from '../mocks/photos.js';

const initialState = {
  newPhotos: photos.map(photo => {
    return {
      ...photo,
      isLiked: false
    };
  }),
  likedPhotos: false,
  isModalOpen: false,
  viewedPhoto: null,
  similarPhotos: null
};

// helper function to update state and return it
const reducer = (state, action) => {
  // action => {type: string, data: anything}
  switch (action.type) {
    case 'SWITCH_PHOTO_IS_LIKED': {
      let likedPhotos = false;
      for (const photo of state.newPhotos) {
        if (photo.isLiked) {
          likedPhotos = true;
        }
      }
      return {
        ...state,
        likedPhotos,
      };
    }

    case 'TOGGLE_LIKE': {
      let viewedPhoto = state.viewedPhoto;
      const newPhotos = state.newPhotos.map(photo => {
        if (photo.id === action.data) {
          return {
            ...photo,
            isLiked: !photo.isLiked
          };
        } else {
          return photo;
        }
      });
      if (state.viewedPhoto) {
        if (state.viewedPhoto.id === action.data) {
          viewedPhoto = {
            ...viewedPhoto,
            isLiked: !viewedPhoto.isLiked
          };
        }
      }

      return {
        ...state,
        newPhotos,
        viewedPhoto,
      };
    }

    case 'TOGGLE_MODAL': {
      if (state.isModalOpen) {
        return {
          ...state,
          isModalOpen: false,
        };
      }

      const viewedPhoto = state.newPhotos.filter(photo => photo.id === action.data)[0];
      let similarPhotos = [];

      Object.keys(viewedPhoto.similarPhotos).forEach((key) => {
        similarPhotos.push({ ...viewedPhoto.similarPhotos[key], isLiked: false });
      });

      return {
        ...state,
        isModalOpen: true,
        viewedPhoto,
        similarPhotos,
      };
    }


    default: {
      console.log('default');
    }
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    state,
    dispatch

  };
};
export default useApplicationData;