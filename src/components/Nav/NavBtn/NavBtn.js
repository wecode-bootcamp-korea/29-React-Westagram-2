import React from 'react';

const NavBtns = props => {
  return (
    <a href="#" className={props.className} id={props.id}>
      <img src={props.src} alt={props.alt} />
    </a>
  );
};

export default NavBtns;
