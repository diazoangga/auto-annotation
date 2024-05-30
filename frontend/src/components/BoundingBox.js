import React from 'react';

function BoundingBox({ annotations, onReject }) {
  return (
    <div>
      {annotations.map((ann, index) => (
        <div key={index}>
          <p>Class: {ann.class}, BBox: {ann.bbox.join(', ')}</p>
          <button onClick={() => onReject(index)}>Reject</button>
        </div>
      ))}
    </div>
  );
}

export default BoundingBox;
