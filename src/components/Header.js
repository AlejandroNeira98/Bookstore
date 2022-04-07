import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Styles/Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>BOOKSTORE CMS</h1>
      <nav className={styles.nav}>
        <ul>
          <li>
            <Link to="/" className={styles.link}>BOOKS</Link>
          </li>
          <li>
            <Link to="/categories" className={styles.link}>CATEGORIES</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
