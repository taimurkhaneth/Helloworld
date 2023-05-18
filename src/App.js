import React, { useState } from 'react';
import './index.css';

function HelloWorld() {
  const [showMessage, setShowMessage] = useState(false);

  const handleClick = () => {
    setShowMessage(true);
  };

  return (
    <div className="container">
      {showMessage ? (
        <h1 className="hello-world-animation">Hello, World!</h1>
      ) : (
        <button className="click-button" onClick={handleClick}>
          Click Here
        </button>
      )}
    </div>
  );
}

export default HelloWorld;
