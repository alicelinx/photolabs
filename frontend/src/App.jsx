import React, { useState } from 'react';
import './App.scss';
import HomeRoute from './routes/HomeRoute';
import PhotoDetailsModal from './routes/PhotoDetailsModal';

const App = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };


  return (
    <div className="App">
      <HomeRoute openModal={openModal} />
      {isModalOpen && <PhotoDetailsModal />}
    </div>
  );
};

export default App;