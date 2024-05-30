import React, { useState } from 'react';
import ImageUploader from './components/ImageUploader';
import ImageNavigator from './components/ImageNavigator';
import BoundingBox from './components/BoundingBox';
import ClassAdder from './components/ClassAdder';

function App() {
  const [images, setImages] = useState([]);
  const [annotations, setAnnotations] = useState([]);
  const [classes, setClasses] = useState([]);

  const handleImagesLoaded = (files) => {
    setImages(files);
  };

  const handleAnnotate = async (image) => {
    const formData = new FormData();
    formData.append('images', image);

    const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}/annotate`, {
      method: 'POST',
      body: formData,
    });

    const data = await response.json();
    setAnnotations(data);
  };

  const handleReject = (index) => {
    setAnnotations(annotations.filter((_, i) => i !== index));
  };

  const handleAddClass = (newClass) => {
    setClasses([...classes, newClass]);
  };

  const handleExport = async () => {
    await fetch(`${process.env.REACT_APP_BACKEND_URL}/export`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(annotations),
    });
  };

  return (
    <div>
      <h1>Auto Annotate</h1>
      <ImageUploader onImagesLoaded={handleImagesLoaded} />
      <ImageNavigator images={images} onAnnotate={handleAnnotate} />
      <BoundingBox annotations={annotations} onReject={handleReject} />
      <ClassAdder onAddClass={handleAddClass} />
      <button onClick={handleExport}>Export Annotations</button>
    </div>
  );
}

export default App;
