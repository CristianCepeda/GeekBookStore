import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

const TitleHeader = ({name}) => {
  return(
    <div>
    <h1 align="center">{name}</h1>
    </div>
  );
}

export default TitleHeader
