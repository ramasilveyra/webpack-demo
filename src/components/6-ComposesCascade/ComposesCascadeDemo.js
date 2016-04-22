import ComposesCascade from './ComposesCascade';

import React, { Component } from 'react';

import js from '!!raw!./ComposesCascade.js';
import css from '!!raw!./ComposesCascade.css';
import Snippet from 'shared/Snippet/Snippet';

export default class ComposesCascadeDemo extends Component {

  render() {
    const files = [
      { name: 'ComposesCascade.js', source: js },
      { name: 'ComposesCascade.css', source: css }
    ];

    return (
      <Snippet files={files}>
        <ComposesCascade />
      </Snippet>
    );
  }

};
