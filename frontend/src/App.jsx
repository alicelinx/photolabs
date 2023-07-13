import React from 'react';
import PhotoList from './components/PhotoList';
import TopicList from './components/TopicList';
import './App.scss';
import TopNavigationBar from './components/TopNavigationBar';

const App = () => (
  <div className="App">
    <TopNavigationBar />
    <PhotoList />
  </div>
);

export default App;