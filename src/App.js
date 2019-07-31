import React from 'react';
import Gallery from './components/ImageGallery'
import MenuContentProp from './components/Choices'
import ImageMore from './components/ImageMore'

function App() {
  return (
    <div className="App">
      <ImageMore />
      <MenuContentProp name = 'editorials' content = 'Button A'/>
      <MenuContentProp name = 'reviews' content = 'Button B'/>
      <MenuContentProp name = 'upcomingEvents' content = 'Button C'/>
      <Gallery perRow={4} count={100}/>
    </div>
  );
}

export default App;
