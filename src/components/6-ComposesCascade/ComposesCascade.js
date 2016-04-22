import styles from './ComposesCascade.css';

import React, { Component } from 'react';

export default class ComposesCascade extends Component {

  render() {
    return (
      <div className={styles.ComposesCascade}>
        <div className={styles.ComposesCascadeChild1}><strong>background blue</strong> </div>
        <br />
        <div className={styles.ComposesCascadeChild2}>background blue + color white</div>
      </div>);
  }

};
