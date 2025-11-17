import React, { useState } from 'react';
import ReactDOM from 'react';
import './App.css'

const Like = ({ count, onLike }) => {
  return (
    <button className="heartT" onClick={onLike}>
      {count} 
    </button>
  )
}

function App() {
  const [isActive, setActive] = useState(false);
  const onLike = () => setActive(!isActive);

  const [count, setCount] = useState(0);
  const onLikeT = () => {
    console.log('LIKE!', count);
    setCount(count + 1);
  };

  return (
    <>
      <div>
        <button className={isActive ? 'heart heart_active' : 'heart'} onClick={onLike} />
      </div>
      <div>---------- -------- ---------</div>
      <h1>Ку-Ку</h1>
      <div>---------- -------- ---------</div>
      <div>
        <Like count={count} onLike={onLikeT}/>
      </div>
    </>
  )
}

export default App
