import React, { useState } from 'react';

function ImageNavigator({ images, onAnnotate }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const handleAnnotate = () => {
    onAnnotate(images[currentIndex]);
  };

  return (
    <div>
      {images.length > 0 && (
        <div>
          <img src={URL.createObjectURL(images[currentIndex])} alt="current" style={{ maxWidth: '100%' }} />
          <div>
            <button onClick={handlePrevious} disabled={currentIndex === 0}>Previous</button>
            <button onClick={handleNext} disabled={currentIndex === images.length - 1}>Next</button>
            <button onClick={handleAnnotate}>Annotate</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageNavigator;
