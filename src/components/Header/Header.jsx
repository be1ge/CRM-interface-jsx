import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles['sidebar']}>
            <div className={styles['container']}>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    exact
                    to="/"
                >
                    <div className={styles['sidebar_item']}>Main</div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/project"
                >
                    <div className={styles['sidebar_item']}>Project</div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/article"
                >
                    <div className={styles['sidebar_item']}>Article</div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/bet"
                >
                    <div className={styles['sidebar_item']}>Bet</div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/client"
                >
                    <div className={styles['sidebar_item']}>Client</div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/instruction"
                >
                    <div className={styles['sidebar_item']}>Instruction</div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/shift"
                >
                    <div className={styles['sidebar_item']}>Shift</div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/workers"
                >
                    <div className={styles['sidebar_item']}>Workers</div>
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
