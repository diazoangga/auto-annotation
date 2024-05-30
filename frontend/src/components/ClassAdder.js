import React, { useState } from 'react';

function ClassAdder({ onAddClass }) {
  const [newClass, setNewClass] = useState('');

  const handleAdd = () => {
    if (newClass) {
      onAddClass(newClass);
      setNewClass('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={newClass}
        onChange={(e) => setNewClass(e.target.value)}
        placeholder="New Class"
      />
      <button onClick={handleAdd}>Add Class</button>
    </div>
  );
}

export default ClassAdder;
