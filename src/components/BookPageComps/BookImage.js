import React from 'react';

const BookImage = ({Url}) => {
  console.log('Received url', Url);
  return(
    <div>
      <a href="#openModal">
        <img src={Url} width="400" height="500"></img>
      </a>
      <div id="openModal" className="modalDialog">
        <div>	<a href="#close" title="Close" className="close">X</a> <div>
          <img src={Url}></img>
        </div>
        </div>
      </div>
    </div>
  );
};

export default BookImage;
