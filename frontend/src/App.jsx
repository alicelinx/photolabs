import React from 'react';

import PhotoListItem from './components/PhotoListItem';
import './App.scss';

const photos = [
  <PhotoListItem key={PhotoListItem.id} />,
  <PhotoListItem key={PhotoListItem.id} />,
  <PhotoListItem key={PhotoListItem.id} />
];
// Note: Rendering a single component to build components in isolation
const App = () => (

  <div className="App">
    {photos}
  </div>
);

export default App;