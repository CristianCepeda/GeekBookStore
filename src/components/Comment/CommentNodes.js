import React from 'react';

import Comment from './Comment';
const CommenNode = (user) => (
  <div className="DisplayCommentPreview">
    <div>
      id: {user.id}
      <br/>
      Author: {user.name}
      <br/>
      text: {comment.text}
    </div>
  </div>
);


export default DisplayBook;
