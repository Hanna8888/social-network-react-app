import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import styles from './Footer.module.css';

function Footer({ className }) {
    return (
        <footer className={cn(styles.Root, className)} role="contentinfo">
            <h4>It's good to have friends</h4>
        </footer>
    )
}

Footer.propTypes = {
    className: PropTypes.string,
}

Footer.defaultProps = {
    className: '',
}

export default Footer;