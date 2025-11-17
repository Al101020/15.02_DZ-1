import React from 'react';
// import React, { useState, useRef } from 'react';
import ReactDOM from 'react';
import './Portfolio.css';

// const filters = {['All', 'Websites', 'Flayers', 'Business Cards']};
// let selected='All';
// const onSelectFilter = (filter) => {console.log(filter);};




// const Toolbar = ({ All, Websites, Flayers, Business, ...props }) => {
//   console.log(props);
//   return (
//     <div>
//       <div className="img">111</div>
//     </div>
//   )
// }

function onSelectFilter(e) {
  console.log(e.target.textContent);
}

function Portfolio() {
  return (
    <>
      <div>
        <div className='Toolbar'>
          <div className='All' onClick={onSelectFilter}>All</div>
          <div className='Websites' onClick={onSelectFilter}>Websites</div>
          <div className='Flayers' onClick={onSelectFilter}>Flayers</div>
          <div className='Business-Cards' onClick={onSelectFilter}>Business Cards</div>
        </div>
        <div className='Projects'></div>
      </div>
    </>
  )
}

export default Portfolio
