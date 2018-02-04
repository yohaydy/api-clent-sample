import React, { Component } from "react";
import styles from "./body.css";

export default class extends Component {
  render() {
    return (
      <div className={styles.container}>
        <div className={styles.text}>Body</div>
      </div>
    );
  }
}
