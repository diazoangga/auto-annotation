import React from 'react';

function ImageUploader({ onImagesLoaded }) {
  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    onImagesLoaded(files);
  };

  return (
    <div>
      <input type="file" directory="" webkitdirectory="" multiple onChange={handleFileChange} />
    </div>
  );
}

export default ImageUploader;
