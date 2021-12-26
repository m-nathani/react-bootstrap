import React from 'react';
import classnames from 'classnames';
import styles from './Communication.module.scss';

const Communication = () => (
  <main className={styles.communicationDetails}>
    <aside className={classnames(styles.sidebar)}>Sidebar</aside>
    <footer className={classnames(styles.sidebarFooter)}>Sidebar Footer</footer>
    <section className={classnames(styles.content)}>content section</section>
    <footer className={classnames(styles.footer)}>Footer</footer>
  </main>
);

export default Communication;
