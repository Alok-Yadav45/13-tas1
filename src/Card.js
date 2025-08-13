import React from 'react';

function Card( props ) {
  return (
    <div className="card">
      <div className="img">{props.img}</div>
      <div className="body">
        <div className="title">{props.title}</div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
}

export default Card;