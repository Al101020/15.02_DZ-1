import React from 'react';
// import React, { useState, useRef } from 'react';
import ReactDOM from 'react';
import './Portfolio.css';

// function Toolbar({ filters, selected, onSelectFilter }) {
function Toolbar({ filters, onSelectFilter }) {
  return (
    <div className="filters">
      {filters.map((item) => {
        // const classname = item === selected ? "active" : "button"; // ?
        return (
          <div
            key={item}
            className={item.replace(/\s/g, '-')}
            onClick={() => {
              onSelectFilter(item);
            }}
          >{item}</div>
        );
      })}
    </div>
  );
};

function Portfolio() {
  return (
    <>
      <Toolbar
      filters={["All", "Websites", "Flayers", "Business Cards"]}
      selected="All"
      onSelectFilter={(filter) => {console.log(filter);}}/>
    </>
  )
}

export default Portfolio
