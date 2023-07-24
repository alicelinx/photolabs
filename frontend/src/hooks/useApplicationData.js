/* eslint-disable */
import { useReducer } from 'react';

const initialState = {
  newPhotos: [],
  likedPhotos: false,
  isModalOpen: false,
  viewedPhoto: null,
  similarPhotos: null,
  likedPhotoIds: [],
};

const reducer = (state, action) => {
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
      let similarPhotos = null;
      let likedPhotoIds = [];

      const newPhotos = state.newPhotos.map((photo) => {
        if (photo.isLiked) {
          // remove the unliked photo from  similarPhotosArr
          likedPhotoIds = state.likedPhotoIds.filter((photo) => photo.id !== action.id);
        } else {
          // update the similarPhotosArr to include the liked photo
          likedPhotoIds = [...state.likedPhotoIds, action.data];
        }

        if (photo.id === action.data) {
          return {
            ...photo,
            isLiked: !photo.isLiked,
          };
        } else {
          return photo;
        }
      });

      if (state.viewedPhoto) {
        if (state.viewedPhoto.id === action.data) {
          viewedPhoto = {
            ...viewedPhoto,
            isLiked: !viewedPhoto.isLiked,
          };
        }
      }

      if (state.similarPhotos) {
        const newSimilarPhotos = state.similarPhotos.map((photo) => {
          if (photo.id === action.data) {
            return {
              ...photo,
              isLiked: !photo.isLiked,
            };
          } else {
            return photo;
          }
        });
        similarPhotos = newSimilarPhotos;
      }

      return {
        ...state,
        newPhotos,
        viewedPhoto,
        similarPhotos,
        likedPhotoIds,
      };
    }

    case 'TOGGLE_MODAL': {
      if (state.isModalOpen) {
        return {
          ...state,
          isModalOpen: false,
        };
      }
      const viewedPhoto = state.newPhotos.filter((photo) => photo.id === action.data)[0];
      let similarPhotos = [];
      Object.keys(viewedPhoto.similar_photos).forEach((key) => {
        similarPhotos.push({ ...viewedPhoto.similar_photos[key], isLiked: state.likedPhotoIds.includes(viewedPhoto.similar_photos[key].id) });
      });

      return {
        ...state,
        isModalOpen: true,
        viewedPhoto,
        similarPhotos,
      };
    }

    case 'UPDATE_PHOTOS': {
      return {
        ...state,
        newPhotos: action.data.map((photo) => {
          return {
            ...photo,
            // like the photo if id is in state.likedPhotosArr
            isLiked: state.likedPhotoIds.includes(photo.id),
          };
        }),
      };
    }

    default: {
      console.log(`Unknown type: ${action.type}`);
    }
  }
};

const useApplicationData = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return {
    state,
    dispatch,
  };
};

export default useApplicationData;