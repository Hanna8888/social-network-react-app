import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

function Sidebar({ className }) {
    return (
        <aside className={cn(styles.Root, className)}>
            <nav className={styles.nav}>
                <ul>
                    <li>
                        <NavLink
                                to="/profile"
                                className={cn(styles.item, (navData) => (navData.isActive ? "active-style" : 'none'))}>
                                    Profile
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                                to="/dialogs"
                                className={cn(styles.item, (navData) => (navData.isActive ? "active-style" : 'none'))}>
                                    Messages
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                                to="/users"
                                className={cn(styles.item, (navData) => (navData.isActive ? "active-style" : 'none'))}>
                                    Users
                        </NavLink>
                    </li>
                </ul>
            </nav>
        </aside>
    );
}

Sidebar.prototypes = {
    className: PropTypes.string,
}

Sidebar.defaultProps = {
    className: '',
}

export default Sidebar;
