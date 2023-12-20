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
                    <div className={styles['sidebar_item']}>
                        <div className={styles['sidebar_text']}>
                            <div>
                                <img src="./src/assets/icons/home.svg" alt="" />
                            </div>
                            <div>Main</div>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/project"
                >
                    <div className={styles['sidebar_item']}>
                        <div className={styles['sidebar_text']}>
                            <div>
                                <img src="./src/assets/icons/list.svg" alt="" />
                            </div>
                            <div>Project</div>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/article"
                >
                    <div className={styles['sidebar_item']}>
                        <div className={styles['sidebar_text']}>
                            <div>
                                <img
                                    src="./src/assets/icons/barcode.svg"
                                    alt=""
                                />
                            </div>
                            <div>Article</div>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/bet"
                >
                    <div className={styles['sidebar_item']}>
                        <div className={styles['sidebar_text']}>
                            <div>
                                <img src="./src/assets/icons/bet.svg" alt="" />
                            </div>
                            <div>Bet</div>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/client"
                >
                    <div className={styles['sidebar_item']}>
                        <div className={styles['sidebar_text']}>
                            <div>
                                <img
                                    src="./src/assets/icons/client.svg"
                                    alt=""
                                />
                            </div>
                            <div>Client</div>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/instruction"
                >
                    <div className={styles['sidebar_item']}>
                        <div className={styles['sidebar_text']}>
                            <div>
                                <img
                                    src="./src/assets/icons/instruction.svg"
                                    alt=""
                                />
                            </div>
                            <div>Instruction</div>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/shift"
                >
                    <div className={styles['sidebar_item']}>
                        <div className={styles['sidebar_text']}>
                            <div>
                                <img
                                    src="./src/assets/icons/shift.svg"
                                    alt=""
                                />
                            </div>
                            <div>Shift</div>
                        </div>
                    </div>
                </NavLink>
                <NavLink
                    className={styles['inactive']}
                    activeClassName={styles['active']}
                    to="/workers"
                >
                    <div className={styles['sidebar_item']}>
                        <div className={styles['sidebar_text']}>
                            <div>
                                <img
                                    src="./src/assets/icons/workers.svg"
                                    alt=""
                                />
                            </div>
                            <div>Workers</div>
                        </div>
                    </div>
                </NavLink>
            </div>
        </div>
    );
}

export default Header;
