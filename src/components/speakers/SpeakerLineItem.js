import React from 'react';
import uuidv4 from 'uuid/v4';

import './Speakers.scss';

function SpeakerLineItem({speaker}) {

  const { name, title, company, photo } = speaker;

  return (
    <li className="speaker" key={uuidv4()}>
      {/* <a href={`speakers.html#${name.replace(' ', '').toLowerCase()}`} target="_self"> */}
        <div className="avatar">
          <img alt={name} src={require(`../../assets/images/${photo}`)}/>
        </div>
        <p className="name">{name}</p>
        <p className="role">{title}</p>
        <p className="company">{company}</p>
      {/* </a> */}
    </li>
  );
}

export default SpeakerLineItem;
