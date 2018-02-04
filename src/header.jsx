import React, { Component } from 'react';
import styles from './header.css'

export default class Header extends Component {
    
    render() {
        console.log(styles)
        return (
            <div className={styles.container}>
                <div className={styles.text}> Header </div>
            </div>
        );
    }
}