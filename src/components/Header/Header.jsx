import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

function Header() {
    return (
        <div className={styles['sidebar']}>
            <div className={styles['container']}>
                <div className={styles['filler']}>
                    
                </div>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    exact
                    to="/"
                >
                    <div className={styles['sidebar_item']}>
                        <div className={styles['sidebar_text']}>Main</div>
                    </div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/project"
                >
                    <div className={styles['sidebar_item']}>
                        <div className={styles['sidebar_text']}>Project</div>
                    </div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/article"
                >
                    <div className={styles['sidebar_item']}>
                        <div className={styles['sidebar_text']}>Article</div>
                    </div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/bet"
                >
                    <div className={styles['sidebar_item']}>
                        <div className={styles['sidebar_text']}>Bet</div>
                    </div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/client"
                >
                    <div className={styles['sidebar_item']}>
                        <div className={styles['sidebar_text']}>Client</div>
                    </div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/instruction"
                >
                    <div className={styles['sidebar_item']}>
                        <div className={styles['sidebar_text']}>
                            Instruction
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/shift"
                >
                    <div className={styles['sidebar_item']}>
                        <div className={styles['sidebar_text']}>Shift</div>
                    </div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/workers"
                >
                    <div className={styles['sidebar_item']}>
                        <div className={styles['sidebar_text']}>Workers</div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
